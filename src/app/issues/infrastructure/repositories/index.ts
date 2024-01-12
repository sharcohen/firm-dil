import { getIssueById, updateIssue, getPagedIssues } from "../../../data/server"
import { Issue } from "../types"

export const getIssues = async ({
  page,
  pageSize,
  searchTerm,
}: {
  page: number
  pageSize: number
  searchTerm: string
}) => {
  return getPagedIssues(page, pageSize, searchTerm)
}

export const getIssue = async (id: string) => {
  return getIssueById(id)
}

export const updateIssueDetails = async (issue: Issue) => {
  return updateIssue(issue)
}
