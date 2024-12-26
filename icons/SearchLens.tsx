import { Icon } from "@chakra-ui/react";

const SearchLens = () => {
  return (
    <Icon
      fontSize={{
        base: "24px",
        md: "40px",
        lg: "36px",
      }}
    >
      <svg
        viewBox="0 0 27 28"
        fill="none"
        version="1.1"
        id="svg3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_606_2282)" id="g1">
          <path
            d="m 23.110807,18.778749 -3.717624,-3.946585 c -0.167775,-0.178152 -0.395221,-0.277065 -0.633909,-0.277065 -0.251878,0 -0.399761,-0.288956 -0.265716,-0.502241 0.821143,-1.306305 1.298629,-2.875187 1.298629,-4.5645624 0,-4.5482257 -3.471584,-8.2335175 -7.75588,-8.2335175 -4.2844264,0 -7.7559251,3.6852918 -7.7559251,8.2335175 0,4.5482394 3.4714987,8.2335394 7.7559251,8.2335394 1.57418,0 3.037339,-0.49597 4.259864,-1.350516 0.210368,-0.147019 0.512945,-0.0026 0.512945,0.25404 0,0.253283 0.09319,0.494783 0.261064,0.672935 l 3.717518,3.946476 c 0.350574,0.372195 0.917353,0.372195 1.264144,0 l 1.055182,-1.120151 c 0.350575,-0.372088 0.350575,-0.973783 0.0037,-1.34587 z m -11.0745,-4.22365 c -2.6362938,0 -4.7728958,-2.264195 -4.7728958,-5.0668034 0,-2.7985962 2.1328725,-5.0667798 4.7728958,-5.0667798 2.636173,0 4.772809,2.2642164 4.772809,5.0667798 0,2.7986084 -2.132853,5.0668034 -4.772809,5.0668034 z"
            fill="#713488"
            fillOpacity="0.99"
            //shapeRendering="crispEdges"
            id="path1"
            style={{ strokeWidth: "1.08101" }}
          />
        </g>
        <defs id="defs3">
          <filter
            id="filter0_d_606_2282"
            x="0.660156"
            y="0.875"
            width="25.6602"
            height="26.75"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity={0}
              result="BackgroundImageFix"
              id="feFlood1"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
              id="feColorMatrix1"
            />
            <feOffset dy={4} id="feOffset1" />
            <feGaussianBlur stdDeviation={2} id="feGaussianBlur1" />
            <feComposite in2="hardAlpha" operator="out" id="feComposite1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              id="feColorMatrix2"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_606_2282"
              id="feBlend2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_606_2282"
              result="shape"
              id="feBlend3"
            />
          </filter>
        </defs>
      </svg>
    </Icon>
  );
};

export default SearchLens;
