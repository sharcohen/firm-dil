import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateIssue } from "../../../../app/issues/useCases/updateIssueDetails"
import { Issue } from "../../../../app/issues/infrastructure/types"

export const useUpdateIssue = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (issue: Issue) => updateIssue(issue),
    onSuccess: (_, item) => {
      queryClient.invalidateQueries({ queryKey: ["issues"] })
      queryClient.invalidateQueries({ queryKey: [`issue-${item.id}`] })
    },
  })
}
