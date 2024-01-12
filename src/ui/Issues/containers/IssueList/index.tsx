import { useState } from "react"
import {
  Issue,
  IssueRiskLevel,
} from "../../../../app/issues/infrastructure/types"
import { Loading } from "../../../components/Loading"
import { useDisplayIssues } from "../../hooks/useDisplayIssues"
import { ListItem } from "./components/ListItem"
import { Search } from "./components/Search"

export const IssueList = ({
  onItemClick,
  onRiskLevelChange,
  selectedId,
}: {
  onItemClick: (issue: Issue) => void
  onRiskLevelChange: (issue: Issue, level: IssueRiskLevel) => void
  selectedId: string | undefined
}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useDisplayIssues({ searchTerm })

  const loading = isLoading || isFetchingNextPage

  return (
    <div className="bg-blue-100 h-full rounded-tl-sm min-w-[34rem]">
      <Search onChange={setSearchTerm} value={searchTerm} />
      <div className="h-[calc(100vh-180px)] overflow-y-auto border-t border-t-grayscale-300">
        {(data?.pages?.flatMap((page) => page.items) || [])?.map((item) => (
          <ListItem
            onRiskLevelChange={onRiskLevelChange}
            onClick={onItemClick}
            key={item.id}
            issue={item}
            selected={item.id === selectedId}
          />
        ))}
        {loading && <Loading />}
        {!loading && hasNextPage && (
          <div className="flex items-center justify-center my-3 pb-3">
            <button
              className="bg-grayscale-0 h-10 w-10 ring-2 hover:bg-grayscale-100 active:scale-95 rounded-full"
              onClick={() => fetchNextPage()}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
