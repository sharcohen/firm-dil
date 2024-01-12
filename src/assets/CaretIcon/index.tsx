import { SVGProps } from "react"
export const CaretIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={10}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M1.24 1.157a.865.865 0 0 1 1.316 0l4.928 5.487 4.927-5.487a.865.865 0 0 1 1.316 0 1.122 1.122 0 0 1 0 1.466l-5.585 6.22a.865.865 0 0 1-1.317 0L1.24 2.623a1.122 1.122 0 0 1 0-1.466Z"
      clipRule="evenodd"
    />
  </svg>
)
