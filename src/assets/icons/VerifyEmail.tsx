import { SVGProps, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={95} height={95} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#8C61FF"
      fillOpacity={0.05}
      stroke="#DBCDFF"
      d="M95.5 48c0 26.234-21.266 47.5-47.5 47.5C21.767 95.5.5 74.234.5 48 .5 21.767 21.767.5 48 .5 74.234.5 95.5 21.767 95.5 48Z"
    />
    <g filter="url(#a)">
      <path stroke="#DBCDFF" strokeWidth={1.63} d="M71 26.348H25V71h46V48.674" />
    </g>
    <g filter="url(#b)">
      <path
        stroke="#DBCDFF"
        strokeWidth={1.5}
        d="m37.5 34.5 12 12.5L77 21l10.5 12L48 70.5 26 47l11.5-11.5"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={71.63}
        height={70.283}
        x={12.185}
        y={13.533}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={6} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.537453 0 0 0 0 0.366667 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_58" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_58" result="shape" />
      </filter>
      <filter
        id="b"
        width={87.582}
        height={75.644}
        x={12.957}
        y={7.92}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={6} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.537453 0 0 0 0 0.366667 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_58" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_58" result="shape" />
      </filter>
    </defs>
  </svg>
)
const VerifyEmail = memo(SvgComponent)

export { VerifyEmail }
