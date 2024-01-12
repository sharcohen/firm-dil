import { useState } from "react"
import {
  Issue,
  IssueRiskLevel,
  IssueStatus,
} from "../../../app/issues/infrastructure/types"
import { IssueDetails } from "../../Issues/containers/IssueDetails"
import { IssueList } from "../../Issues/containers/IssueList"
import { useUpdateIssue } from "../../Issues/hooks/useUpdateIssue"
import { AppHeader } from "../../components/AppHeader"

export const Root = () => {
  const [issueId, setIssueId] = useState<string | undefined>(undefined)

  const { mutateAsync } = useUpdateIssue()

  const handleRiskLevelChange = (issue: Issue, level: IssueRiskLevel) => {
    const status: IssueStatus =
      issue.status === "Resolved" ? "Active" : issue.status
    mutateAsync({ ...issue, riskLevel: level, status })
  }

  const handleIssueClose = (issue: Issue) => {
    mutateAsync({ ...issue, status: "Resolved" })
  }

  const handleItemClick = (issue: Issue) => {
    setIssueId((prev) => (prev === issue.id ? undefined : issue.id))
  }

  return (
    <div className="flex flex-col h-screen bg-violet-200 m-0">
      <AppHeader title="Discovered Issues List" />
      <div className="flex flex-1 w-full">
        <div className="bg-grayscale-100">
          <IssueList
            onItemClick={handleItemClick}
            selectedId={issueId}
            onRiskLevelChange={handleRiskLevelChange}
          />
        </div>
        <div className="flex flex-1 items-center justify-center">
          {issueId && (
            <IssueDetails
              issueId={issueId}
              onClose={handleIssueClose}
              onRiskLevelChange={handleRiskLevelChange}
            />
          )}
        </div>
      </div>
    </div>
  )
}
