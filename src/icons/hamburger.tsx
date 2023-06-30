import { IconProps } from 'icons'

const HamburgerIcon: (props: IconProps) => JSX.Element = ({
  color = '#000000',
  height = '24',
  width = '24'
}): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    width={width}
  >
    <g>
      <path
        fill={color}
        d="M1.5 2.5h21s1 0 1 1v1s0 1-1 1h-21s-1 0-1-1v-1s0-1 1-1"
      ></path>
      <path
        fill={color}
        d="M1.5 10.5h21s1 0 1 1v1s0 1-1 1h-21s-1 0-1-1v-1s0-1 1-1"
      ></path>
      <path
        fill={color}
        d="M1.5 18.5h21s1 0 1 1v1s0 1-1 1h-21s-1 0-1-1v-1s0-1 1-1"
      ></path>
    </g>
  </svg>
)

export default HamburgerIcon
