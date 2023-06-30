import { IconProps } from 'icons'

const CloseIcon: (props: IconProps) => JSX.Element = ({
  color,
  width,
  height
}): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    width={width}
  >
    <path
      d="M14.3 12.18a.24.24 0 0 1 0-.35l9.26-9.27a1.49 1.49 0 0 0 0-2.12 1.51 1.51 0 0 0-2.12 0L12.18 9.7a.25.25 0 0 1-.36 0L2.56.44a1.51 1.51 0 0 0-2.12 0 1.49 1.49 0 0 0 0 2.12l9.26 9.27a.24.24 0 0 1 0 .35L.44 21.44a1.49 1.49 0 0 0 0 2.12 1.51 1.51 0 0 0 2.12 0l9.26-9.26a.25.25 0 0 1 .36 0l9.26 9.26a1.51 1.51 0 0 0 2.12 0 1.49 1.49 0 0 0 0-2.12Z"
      fill={color}
    ></path>
  </svg>
)

export default CloseIcon
