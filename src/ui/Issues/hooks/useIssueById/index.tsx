import { useQuery } from "@tanstack/react-query"
import { displayIssueDetails } from "../../../../app/issues/useCases/displayIssueDetails"

export const useIssueById = (id: string) => {
  return useQuery({
    queryKey: [`issue-${id}`],
    queryFn: () => displayIssueDetails(id),
  })
}
