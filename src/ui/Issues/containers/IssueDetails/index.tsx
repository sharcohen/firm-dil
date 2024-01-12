import classNames from "classnames"
import { useMemo } from "react"
import {
  Issue,
  IssueRiskLevel,
} from "../../../../app/issues/infrastructure/types"
import { DescriptionText } from "../../components/DescriptionText"
import { Header } from "../../components/Header"
import { findRoomAndLevel } from "../../utils"
import { IssueSection } from "./IssueDetailsTitle"
import { Location } from "./Location"
import { useIssueById } from "../../hooks/useIssueById"

export const IssueDetails = ({
  issueId,
  onRiskLevelChange,
  onClose,
}: {
  issueId: string
  onClose: (issue: Issue) => void
  onRiskLevelChange: (issue: Issue, level: IssueRiskLevel) => void
}) => {
  const { data: issue } = useIssueById(issueId)

  const { primaryLocation, secondaryLocations, location } = useMemo(() => {
    if (!issue) {
      return {}
    }
    const { level, room } = findRoomAndLevel(issue.locations)

    return {
      primaryLocation: issue.locations[0],
      secondaryLocations: issue.locations.slice(1),
      location: { level, room },
    }
  }, [issue])

  if (!issueId || !issue) {
    return null
  }

  const closeDisabled = issue?.status === "Resolved"

  return (
    <div
      className={classNames(
        "bg-grayscale-0",
        "lg:max-w-[620px]",
        "lg:w-[620px]",
        "min-h-[650px]",
        "h-[min(840px,calc(100vh-180px))]",
        "rounded-lg",
        "items-stretch",
        "flex",
        "flex-col",
        "shadow-card",
        "pt-8",
        "pb-12",
        "px-5",
        "m-6"
      )}
    >
      <Header
        status={issue.status}
        issuePackage={issue.package}
        riskLevel={issue.riskLevel}
        onChange={(newLevel) => onRiskLevelChange(issue, newLevel)}
      />
      <div className="px-10 py-11 flex items-start flex-col gap-4 flex-1">
        <div className="flex items-center text-grayscale-400 ">
          <span className="uppercase mr-8 font-semibold text-24">
            #{issue.id}
          </span>
          <span className="uppercase font-semibold">{issue.type}</span>
        </div>

        <IssueSection title="Description">
          <DescriptionText text={issue.description} />
        </IssueSection>

        <IssueSection title="Issue found on sheet:">
          {primaryLocation && <Location location={primaryLocation} />}
        </IssueSection>

        <div>
          <IssueSection title="Other related issues:" />
          {secondaryLocations?.map((location, index) => (
            <div key={index} className={classNames({ "mt-2": !!index })}>
              <Location location={location} />
            </div>
          ))}
        </div>
        <IssueSection title="Location:">
          {location && (
            <span className="text-18 text-grayscale-600 uppercase">
              LEVEL {location.level}, Room {location.room}
            </span>
          )}
        </IssueSection>
      </div>
      <div className="flex justify-end border-t border-t-grayscale-500 mx-10">
        <button
          onClick={() => onClose(issue)}
          disabled={closeDisabled}
          className={classNames(
            "uppercase",
            "py-1.5",
            "px-3.5",
            "mt-6",
            "rounded-[5px]",
            "bg-grayscale-350",
            "border",
            "border-grayscale-500",
            "text-orange-400",
            "disabled:text-gray-400",
            "disabled:cursor-not-allowed",
            "font-semibold",
            { "active:scale-95": !closeDisabled }
          )}
        >
          Close Issue
        </button>
      </div>
    </div>
  )
}
