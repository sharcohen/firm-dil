import classNames from "classnames"
import { IssueStatus } from "../../../../app/issues/infrastructure/types"

const statusColors: Record<IssueStatus, string> = {
  New: "text-status-new border-l-2 border-l-status-new",
  Active: "text-status-active border-l-2 border-l-status-active",
  Resolved: "text-status-resolved border-l-2 border-l-status-resolved",
}

export const Status = ({ status }: { status: IssueStatus }) => {
  const className = statusColors[status]
  return (
    <div
      className={classNames(
        "bg-blue-200",
        "rounded-r-sm",
        "p-1.5",
        "font-semibold",
        "text-16",
        "uppercase",
        className
      )}
    >
      <span>{status}</span>
    </div>
  )
}
