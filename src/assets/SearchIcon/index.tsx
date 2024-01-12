import { SVGProps } from "react"
export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <g stroke="#5E5E5E" strokeWidth={2.594} clipPath="url(#a)">
      <circle cx={11.272} cy={11.271} r={9.945} />
      <path strokeLinecap="round" d="m19.057 19.054 6.919 6.919" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.03.028h27.674v27.674H.03z" />
      </clipPath>
    </defs>
  </svg>
)
