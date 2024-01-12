import classNames from "classnames"
import { Issue } from "../../../../app/issues/infrastructure/types"

export const Package = ({
  issuePackage,
}: {
  issuePackage: Issue["package"]
}) => {
  return (
    <div
      className={classNames(
        "rounded-sm",
        "min-w-48",
        "p-1.5",
        "text-16",
        "uppercase",
        "flex",
        "font-semibold",
        "bg-[rgba(223,224,235,0.4)]",
        "mx-4",
        "items-center",
        "justify-center"
      )}
    >
      <span>{issuePackage}</span>
    </div>
  )
}
