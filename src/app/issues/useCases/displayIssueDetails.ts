import { getIssue } from "../infrastructure/repositories"

export const displayIssueDetails = (id: string) => {
  return getIssue(id)
}
