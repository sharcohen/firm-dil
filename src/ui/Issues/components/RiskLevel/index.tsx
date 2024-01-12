import { Menu, Transition } from "@headlessui/react"
import classNames from "classnames"
import { Fragment } from "react"
import { IssueRiskLevel } from "../../../../app/issues/infrastructure/types"
import { CaretIcon } from "../../../../assets/CaretIcon"

const riskLevelColors: Record<IssueRiskLevel, string> = {
  Low: "bg-risk-low",
  Medium: "bg-risk-medium",
  High: "bg-risk-high",
  Critical: "bg-risk-critical",
}

const menuOptions: IssueRiskLevel[] = ["Critical", "High", "Medium", "Low"]

export const RiskLevel = ({
  riskLevel,
  onChange,
}: {
  riskLevel: IssueRiskLevel
  onChange: (newLevel: IssueRiskLevel) => void
}) => {
  const handleChange = (option: IssueRiskLevel) => {
    option !== riskLevel && onChange?.(option)
  }

  const className = riskLevelColors[riskLevel]
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Menu as="div" className="relative">
        <div>
          <Menu.Button
            className={classNames(
              "text-grayscale-0",
              "py-[4.5px]",
              "px-3",
              "rounded-sm",
              "font-semibold",
              "text-18",
              "uppercase",
              "flex",
              "flex-row",
              "gap-2.5",
              "items-center",
              "justify-center",
              "min-w-28",
              className
            )}
          >
            {({ open }) => (
              <>
                {riskLevel}
                <CaretIcon
                  className={classNames(
                    "transition-transform duration-[400ms]",
                    {
                      "-rotate-180": open,
                    }
                  )}
                />
              </>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={classNames(
              "absolute",
              "z-10",
              "py-0.5",
              "px-1",
              "mt-1",
              "origin-top-right",
              "rounded-sm",
              "min-w-full",
              "bg-grayscale-0",
              "shadow-lg",
              "ring-1",
              "ring-black/5",
              "ocus:outline-none"
            )}
          >
            {menuOptions.map((option) => (
              <div key={option} className="py-0.5">
                <Menu.Item>
                  <button
                    onClick={() => handleChange(option)}
                    className={classNames(
                      "flex",
                      "justify-center",
                      "w-full",
                      "rounded-sm",
                      "py-1",
                      "hover:bg-opacity-90",
                      "text-grayscale-0",
                      "hover:text-grayscale-600",
                      "active:bg-opacity-95",
                      "active:scale-95",
                      riskLevelColors[option]
                    )}
                  >
                    {option}
                  </button>
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
