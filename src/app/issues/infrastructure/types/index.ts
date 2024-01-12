export interface IssuePoint {
  x: number
  y: number
}

export interface IssueLocation {
  pageNumber: string
  pageTitle: string
  level?: string
  roomNumber?: string
  min?: IssuePoint
  max?: IssuePoint
}

export type IssueRiskLevel = "Low" | "Medium" | "High" | "Critical"

export type IssueStatus = "New" | "Active" | "Resolved"

export type IssueType =
  | "Element missing tag"
  | "Missing sheet"
  | "Tag not consistent"

export interface Issue {
  id: string
  updateTime: string
  description: string
  riskLevel: IssueRiskLevel
  status: IssueStatus
  package: string
  type: IssueType
  locations: IssueLocation[]
}
