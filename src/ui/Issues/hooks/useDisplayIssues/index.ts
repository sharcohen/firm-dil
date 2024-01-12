import { useInfiniteQuery } from "@tanstack/react-query"
import { displayIssuesList } from "../../../../app/issues/useCases/displayIssuesList"

export const useDisplayIssues = ({ searchTerm }: { searchTerm: string }) => {
  return useInfiniteQuery({
    queryKey: ["issues", `issues-${searchTerm}`],
    queryFn: ({ pageParam = 1 }) =>
      displayIssuesList({ page: pageParam, pageSize: 4, searchTerm }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  })
}
