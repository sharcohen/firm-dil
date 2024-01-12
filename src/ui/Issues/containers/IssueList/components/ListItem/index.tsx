import classNames from "classnames"
import {
  Issue,
  IssueRiskLevel,
} from "../../../../../../app/issues/infrastructure/types"
import { Location } from "../../../IssueDetails/Location"
import { DescriptionText } from "../../../../components/DescriptionText"
import { Header } from "../../../../components/Header"

const riskLevelColors: Record<IssueRiskLevel, string> = {
  Low: "border-r-[10px] border-r- border-r-risk-low",
  Medium: "border-r-[10px] border-risk-medium",
  High: "border-r-[10px] border-r-risk-high",
  Critical: "border-r-[10px] border-r-risk-critical",
}

export const ListItem = ({
  issue,
  selected,
  onClick,
  onRiskLevelChange,
}: {
  onRiskLevelChange: (issue: Issue, newLevel: IssueRiskLevel) => void
  onClick: (issue: Issue) => void
  issue: Issue
  selected: boolean
}) => {
  const className = riskLevelColors[issue.riskLevel]
  return (
    <div
      onClick={() => onClick?.(issue)}
      className={classNames(
        "transition-colors",
        "duration-200",
        { "bg-green-100": selected },
        { "bg-grayscale-0": !selected },
        "m-3",
        "p-5",
        "box-border",
        "shadow-card",
        "rounded-[10px]",
        "border",
        "border-t-grayscale-500",
        "hover:cursor-pointer",
        "hover:shadow-lg",
        className
      )}
    >
      <Header
        status={issue.status}
        issuePackage={issue.package}
        riskLevel={issue.riskLevel}
        onChange={(newLevel) => onRiskLevelChange(issue, newLevel)}
      />
      <div className="flex items-center text-grayscale-400 mt-7">
        <span className="uppercase mr-8 font-semibold">#{issue.id}</span>
        <span className="uppercase font-semibold">{issue.type}</span>
      </div>
      <div className="my-5 mb-7">
        <DescriptionText text={issue.description} />
      </div>
      <Location location={issue.locations[0]} />
    </div>
  )
}
