import classNames from "classnames"
import { SearchIcon } from "../../../../../../assets/SearchIcon"

export const Search = ({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) => {
  return (
    <div
      className={classNames(
        "flex",
        "flex-1",
        "items-center",
        "justify-center",
        "py-5",
        "px-4",
        "lg:mx-14",
        "gap-2.5",
        "rounded-tl-sm"
      )}
    >
      <button
        onClick={() => onChange(value)}
        className={classNames(
          "flex",
          "items-center",
          "justify-center",
          "p-2.5",
          "border",
          "border-grayscale-500",
          "rounded-[5px]",
          "bg-grayscale-0",
          "active:scale-95"
        )}
      >
        <SearchIcon />
      </button>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className={classNames(
          "flex",
          "items-center",
          "justify-center",
          "p-3",
          "w-full",
          "border",
          "border-grayscale-500",
          "rounded-[5px]",
          "bg-grayscale-0"
        )}
      />
    </div>
  )
}
