import { IssueLocation } from "../../../../../app/issues/infrastructure/types"

export const Location = ({ location }: { location: IssueLocation }) => {
  return (
    <div className="text-18 uppercase flex flex-row gap-2">
      <span className="text-orange-400 underline">{location.pageNumber}</span>
      <span className="text-grayscale-600">{location.pageTitle}</span>
    </div>
  )
}
