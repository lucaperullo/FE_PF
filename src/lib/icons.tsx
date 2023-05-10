import { Icon, IconProps, OmitCommonProps } from "@chakra-ui/react"
import { SVGProps } from "react"

export const CalendarIcon = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
    IconProps & { as?: "svg" | undefined },
  color: string
) => (
  <Icon viewBox="0 0 16 18" {...props}>
    <path
      fill="currentColor"
      color={color}
      d="M13.833 17.333H2.167c-.92 0-1.667-.746-1.667-1.666V4c0-.92.746-1.667 1.667-1.667h1.666V.667H5.5v1.666h5V.667h1.667v1.666h1.666c.92 0 1.667.746 1.667 1.667v11.667c0 .92-.746 1.666-1.667 1.666zm-11.666-10v8.334h11.666V7.333H2.167zm0-3.333v1.667h11.666V4H2.167zm10 10H10.5v-1.667h1.667V14zm-3.334 0H7.167v-1.667h1.666V14zM5.5 14H3.833v-1.667H5.5V14zm6.667-3.333H10.5V9h1.667v1.667zm-3.334 0H7.167V9h1.666v1.667zm-3.333 0H3.833V9H5.5v1.667z"
    />
  </Icon>
)
export const CommandIcon = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
    IconProps & { as?: "svg" | undefined },
  color: string
) => (
  <Icon viewBox="0 0 14 14" {...props}>
    <path
      fill="currentColor"
      color={color}
      d="M11 13.667a2.673 2.673 0 01-2.667-2.64v-1.36H5.667v1.346A2.667 2.667 0 113 8.333h1.333V5.667H3a2.667 2.667 0 112.667-2.68v1.346h2.666V3A2.667 2.667 0 1111 5.667H9.667v2.666H11a2.667 2.667 0 110 5.334zm-1.333-4V11A1.333 1.333 0 1011 9.667H9.667zM3 9.667a1.333 1.333 0 000 2.666A1.32 1.32 0 004.333 11V9.667H3zm2.667-4v2.666h2.666V5.667H5.667zm5.333-4A1.32 1.32 0 009.667 3v1.333H11A1.32 1.32 0 0012.333 3 1.32 1.32 0 0011 1.667zm-8 0A1.32 1.32 0 001.667 3 1.32 1.32 0 003 4.333h1.333V3A1.32 1.32 0 003 1.667z"
    />
  </Icon>
)
export const SearchIcon = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
    IconProps & { as?: "svg" | undefined },
  color: string
) => (
  <Icon viewBox="0 0 18 17" {...props}>
    <path
      fill="currentColor"
      color={color}
      d="M15.677 16.607l-5.715-5.716a6 6 0 01-7.719-9.133 6 6 0 019.134 7.718l5.715 5.716-1.414 1.414-.001.001zM6.485 2a4 4 0 102.917 1.264l.605.6-.682-.68-.012-.012A3.972 3.972 0 006.485 2z"
    />
  </Icon>
)
export const FilterIcon = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
    IconProps & { as?: "svg" | undefined },
  color: string
) => (
  <Icon viewBox="0 0 16 17" {...props}>
    <path
      fill="currentColor"
      color={color}
      d="M9.206 15.421a.824.824 0 00.46-.737V10.25a.82.82 0 01.245-.583l5.1-5.046a1.64 1.64 0 00.489-1.166v-2.13A.828.828 0 0014.667.5H1.333a.828.828 0 00-.833.824v2.131c0 .438.176.857.488 1.166L6.09 9.667a.82.82 0 01.244.583v5.258c0 .613.652 1.011 1.206.737l1.667-.824z"
    />
  </Icon>
)
export const AddIcon = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
    IconProps & { as?: "svg" | undefined },
  color: string
) => (
  <Icon viewBox="0 0 12 12" {...props}>
    <path
      fill="currentColor"
      color={color}
      d="M6.833 6.833v5H5.167v-5h-5V5.167h5v-5h1.666v5h5v1.666h-5z"
    />
  </Icon>
)
export const ArrowLeftIcon = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
    IconProps & { as?: "svg" | undefined },
  color: string
) => (
  <Icon viewBox="0 0 8 12" {...props}>
    <path
      fill="currentColor"
      color={color}
      d="M.907 6l5.008 5.008L7.093 9.83 3.26 5.997l3.833-3.834L5.915.992.907 6z"
    />
  </Icon>
)

export const ArrowRightIcon = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
    IconProps & { as?: "svg" | undefined },
  color: string
) => (
  <Icon viewBox="0 0 8 12" {...props}>
    <path
      fill="currentColor"
      color={color}
      d="M7.094 6L2.085.992.907 2.17 4.74 6.003.907 9.831l1.178 1.178L7.095 6z"
    />
  </Icon>
)
export const DotsIcon = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
    IconProps & { as?: "svg" | undefined },
  color: string
) => (
  <Icon viewBox="0 0 12 4" {...props}>
    <path
      fill="currentColor"
      color={color}
      d="M10 3.333a1.333 1.333 0 110-2.666 1.333 1.333 0 010 2.666zm-4 0A1.333 1.333 0 116 .667a1.333 1.333 0 010 2.666zm-4 0A1.333 1.333 0 112 .667a1.333 1.333 0 010 2.666z"
    />
  </Icon>
)
export const MessageIcon = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
    IconProps & { as?: "svg" | undefined },
  color: string
) => (
  <Icon viewBox="0 0 14 14" {...props}>
    <path
      fill="currentColor"
      color={color}
      d="M.333 1.667V11l3.2-2.4c.23-.174.512-.267.8-.267h5.334C10.403 8.333 11 7.736 11 7V1.667C11 .93 10.403.333 9.667.333h-8C.93.333.333.93.333 1.667zm1.334 6.666V1.667h8V7H3.889c-.288 0-.57.093-.8.267L1.667 8.333z"
    />
    <path
      fill="currentColor"
      color={color}
      d="M13.667 13.667V5c0-.736-.597-1.333-1.334-1.333V11l-1.422-1.067a1.323 1.323 0 00-.8-.266H3.667C3.667 10.403 4.264 11 5 11h4.667c.288 0 .57.093.8.267l3.2 2.4z"
    />
  </Icon>
)
export const ArrowDownIcon = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
    IconProps & { as?: "svg" | undefined },
  color: string
) => (
  <Icon viewBox="0 0 12 16" {...props}>
    <path
      fill="currentColor"
      color={color}
      d="M5 12.17L1.41 8.59 0 10l6 6 6-6-1.41-1.41L7 12.17V0H5v12.17z"
    />
  </Icon>
)
export const MobileMenuIcon = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> &
    IconProps & { as?: "svg" | undefined },
  color: string
) => (
  <Icon viewBox="0 0 20 14" {...props}>
    <path
      fill="currentColor"
      color={color}
      d="M13.208 12.347c0 .59-.479 1.07-1.07 1.07H1.445a1.07 1.07 0 010-2.14H12.14c.59 0 1.07.48 1.07 1.07zM19.625 7c0 .59-.479 1.07-1.07 1.07H1.446a1.07 1.07 0 110-2.14h17.11c.591 0 1.07.48 1.07 1.07zm-6.417-5.347c0 .59-.479 1.07-1.07 1.07H1.445a1.07 1.07 0 010-2.14H12.14c.59 0 1.07.48 1.07 1.07z"
    />
  </Icon>
)
