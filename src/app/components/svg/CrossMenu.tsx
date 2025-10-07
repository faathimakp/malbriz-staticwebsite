import * as React from "react"
import { SVGProps } from "react"
const CrossMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={19}
    // height={19}
    viewBox="0 0 19 19"
    fill="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m11.324 9.97 7.071 7.072a.8.8 0 0 1 0 1.131l-.566.566a.8.8 0 0 1-1.131 0l-7.071-7.071-7.071 7.07a.8.8 0 0 1-1.131 0l-.566-.565a.8.8 0 0 1 0-1.131l7.07-7.071L.86 2.899a.8.8 0 0 1 0-1.13l.566-.567a.8.8 0 0 1 1.13 0l7.072 7.072 7.071-7.072a.8.8 0 0 1 1.131 0l.566.566a.8.8 0 0 1 0 1.131l-7.071 7.072Z"
      clipRule="evenodd"
    />
  </svg>
)
export default CrossMenu