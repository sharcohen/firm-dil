import { updateIssueDetails } from "../infrastructure/repositories"
import { Issue } from "../infrastructure/types"

export const updateIssue = (issue: Issue) => {
  return updateIssueDetails(issue)
}
