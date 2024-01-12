import {
  Issue,
  IssueRiskLevel,
  IssueStatus,
} from "../../../../app/issues/infrastructure/types"
import { Package } from "../Package"
import { RiskLevel } from "../RiskLevel"
import { Status } from "../Status"

export const Header = ({
  status,
  riskLevel,
  issuePackage,
  onChange,
}: {
  status: IssueStatus
  riskLevel: IssueRiskLevel
  issuePackage: Issue["package"]
  onChange: (newLevel: IssueRiskLevel) => void
}) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <Status status={status} />
      <Package issuePackage={issuePackage} />
      <RiskLevel riskLevel={riskLevel} onChange={onChange} />
    </div>
  )
}
