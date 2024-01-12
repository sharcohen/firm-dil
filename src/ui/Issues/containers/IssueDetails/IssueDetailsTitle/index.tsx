import { PropsWithChildren } from "react"

export const IssueSection = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <div className="flex flex-col">
      <span className="text-20 font-semibold text-red-100 mb-2">{title}</span>
      {children}
    </div>
  )
}
