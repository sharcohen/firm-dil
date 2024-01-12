// dataService.js
import { Issue, IssueLocation } from "../issues/infrastructure/types"
import data from "./data.json"

const db = data as Issue[]

const searchInObject = <T = Issue | IssueLocation[]>(
  issue: T,
  term: string
): boolean => {
  for (const key in issue) {
    if (Object.prototype.hasOwnProperty.call(issue, key)) {
      const value = issue[key as keyof T]
      if (
        typeof value === "string" &&
        value.toLowerCase().includes(term.toLowerCase())
      ) {
        return true
      } else if (Array.isArray(value)) {
        for (const element of value) {
          if (
            typeof element === "string" &&
            element.toLowerCase().includes(term.toLowerCase())
          ) {
            return true
          } else if (typeof element === "object" && element !== null) {
            if (searchInObject(element, term)) {
              return true
            }
          }
        }
      } else if (typeof value === "object" && value !== null) {
        if (searchInObject(value, term)) {
          return true
        }
      }
    }
  }

  return false
}

export const getIssueById = (id: string) => {
  return db.find((item) => item.id === id)
}

export const updateIssue = async (updatedData: Issue) => {
  const index = db.findIndex((item: Issue) => item.id === updatedData.id)
  if (index !== -1) {
    db[index] = { ...db[index], ...updatedData }
  }
}

export const getPagedIssues = async (
  page: number,
  pageSize: number,
  searchTerm: string
) => {
  const start = ((page || 1) - 1) * pageSize
  const end = start + pageSize

  const filteredItems = db.filter((item) => searchInObject(item, searchTerm))
  const paginatedItems = filteredItems.slice(start, end)

  const hasMore = end < filteredItems.length

  return { currentPage: page, items: paginatedItems, hasMore }
}
