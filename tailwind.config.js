/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
      circle: "circle",
    },
    extend: {
      fontSize: {
        "gleads-title": ["48px", "68px"],
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
      },
      fontFamily: {
        Helvetica: "'Helvetica', sans-serif",
      },
      letterSpacing: {
        default: "0.25px",
      },
      colors: {
        // greys
        "gleads-basic": "#333333",
        "gleads-greys-100": "#FAFAFA",
        "gleads-greys-200": "#E1E1E1",
        "gleads-greys-300": "#C8C8C8",
        "gleads-greys-400": "#AFAFAF",
        "gleads-greys-500": "#969696",
        "gleads-greys-600": "#4B4B4B",
        "gleads-greys-700": "#323232",
        "gleads-greys-800": "#191919",
        "gleads-greys-900": "#000000",
        // success
        "gleads-success-100": "#66DDB3",
        "gleads-success-500": "#00C781",
        "gleads-success-600": "#00B374",
        // warning
        "gleads-warning-100": "#FFD688",
        "gleads-warning-500": "#FFBB38",
        "gleads-warning-600": "#E6A832",
        // danger
        "gleads-danger-100": "#FF8C8C",
        "gleads-danger-500": "#FF4040",
        "gleads-danger-600": "#CC3333",
        // oxfordBlue
        "gleads-oxfordBlue-100": "#EBF1FF",
        "gleads-oxfordBlue-200": "#D6E4FF",
        "gleads-oxfordBlue-300": "#99BBFF",
        "gleads-oxfordBlue-400": "#4785FF",
        "gleads-oxfordBlue-500": "#1F69FF",
        "gleads-oxfordBlue-600": "#0052F5",
        "gleads-oxfordBlue-700": "#0036A3",
        "gleads-oxfordBlue-800": "#00297A",
        "gleads-oxfordBlue-900": "#001B52",
        //  buttonBlue
        "gleads-buttonBlue-100": "#F0FAFF",
        "gleads-buttonBlue-300": "#A0DBF8",
        "gleads-buttonBlue-400": "#79CCF6",
        "gleads-buttonBlue-500": "#53BEF3",
        "gleads-buttonBlue-600": "#2EAFEF",
        "gleads-buttonBlue-700": "#149FE4",
        // pink
        "gleads-pink-300": "#F9CEC8",
        "gleads-pink-400": "#F3988D",
        "gleads-pink-500": "#ED6B5A",
        "gleads-pink-600": "#E94F3C",
        "gleads-pink-700": "#E14431",
        // orange
        "gleads-orange-300": "#FCE4C5",
        "gleads-orange-400": "#F9C98B",
        "gleads-orange-500": "#F6AE51",
        "gleads-orange-600": "#F39720",
        // yellow
        "gleads-yellow-300": "#FEE89A",
        "gleads-yellow-400": "#FDD85D",
        "gleads-yellow-500": "#FDCE35",
        "gleads-yellow-600": "#FDC40B",
        // green
        "gleads-green-300": "#AAFCDB",
        "gleads-green-400": "#7DE3BA",
        "gleads-green-500": "#50CA99",
        "gleads-green-600": "#0BB873",
        "bbc-main": "#677294",
        "bbc-primary": "#007EFF",
        "bbc-primary-1": "#3994ff",
        "bbc-title": "#2C2C51",
        "bbc-title-2": "#4B505E",
        "bbc-gray": "#333333",
        "bbc-gray-2": "#797979",
        "bbc-gray-3": "#858da8",
        "bbc-hover": "#00AFF0",
        "bbc-text": "#2C2E2F",
        "bbc-text-2": "#3f4451",
        "bbc-text-3": "#222d39",
        "bbc-silver": "#C4C4C4",
        "bbc-red-300": "#E86666",
        "bbc-red-500": "#D90000",
        "bbc-brand-100": "#F1FBFF",
        "bbc-brand-400": "#3388FF",
        "bbc-brand-500": "#007EFF",
        "bbc-brand-600": "#0055CC",
        "bbc-brand-700": "#004099",
        "bbc-brand-800": "#002A66",
      },
    },
    backgroundImage: {
      "bbc-gradient-liner":
        "linear-gradient(90deg, #007EFF -2.06%, #003E7E -2.05%, #007EFF 97.16%);",
      "bbc-gradient-liner1":
        "linear-gradient(82.86deg, #000577 -19.93%, #00A3FF 75.2%), linear-gradient(89.75deg, #BA3838 -4.9%, #FF0000 97.56%);",
      "bbc-gradient-liner2":
        "linear-gradient(90deg, #00458C -2.06%, #003E7E -2.05%, #007EFF 97.16%);",
      "bbc-gradient-liner3":
        " linear-gradient(135deg, #007EFF 0%, #2C2C51 100%), linear-gradient(0deg, #FFFFFF 32.34%, #F4F4F4 103.48%);",
      "bbc-gradient-1":
        "linear-gradient(223.53deg, #A5FECA 3.65%, #3EDCEB 31.56%, #2594FF 65.16%, #5533FF 102.22%);",
      "bbc-gradient-2":
        "linear-gradient(51.06deg, #9358F7 0.87%, #7B78F2 25.96%, #6197EE 49.23%, #45B5E9 74.93%, #10D7E2 97.48%);",
      "bbc-gradient-3":
        "linear-gradient(225.92deg, #33D2FF 5.73%, #3D68DE 54.65%, #9845E8 96.75%);",
      "bbc-gradient-4":
        "linear-gradient(47.22deg, #6E6CD8 5.72%, #40A0EF 48.21%, #77E1EE 94.27%);",
      "bbc-gradient-5": "linear-gradient(135deg, #84A3E9 0%, #DFFEE6 100%);",
      "bbc-gradient-6":
        "linear-gradient(135deg, rgba(166, 191, 248, 0.5) 0%, rgba(239, 252, 242, 0.5) 100%);",
      "bbc-gradient-7":
        "linear-gradient(78.86deg, rgba(226, 17, 17, 0.35) -0.52%, rgba(252, 8, 8, 0.348906) 9.59%, rgba(255, 255, 255, 0) 78.92%), radial-gradient(78.34% 87.46% at 72.4% 50%, rgba(16, 255, 212, 0.8) 0%, rgba(255, 255, 255, 0.152) 62.28%, rgba(255, 255, 255, 0) 100%), radial-gradient(141.16% 149.67% at 121.35% 100%, #5F36D1 9.82%, rgba(135, 102, 231, 0.93368) 21.48%, rgba(242, 245, 255, 0.49) 69.06%, rgba(255, 180, 180, 0) 100%), radial-gradient(62.26% 88.34% at 100% -3.68%, #007EFF 0%, rgba(255, 255, 255, 0) 100%),linear-gradient(134.51deg, rgba(151, 149, 255, 0.78) 5.73%, rgba(255, 106, 114, 0) 101.2%);",
      "bbc-gradient-8":
        "linear-gradient(192.3deg, #8CEBFE -152.49%, #F9F9F9 106.03%);",
      "bbc-gradient-9":
        "linear-gradient(45deg, rgba(18, 194, 233, 0.7) 0%, rgba(196, 113, 237, 0.7) 50%, rgba(246, 79, 89, 0.7) 100%);",
      "bbc-country":
        "linear-gradient(284.43deg, rgba(166, 191, 248, 0.5) -22.32%, rgba(239, 252, 242, 0.5) 62.25%)",
      "bbc-gradient-service":
        "linear-gradient(135deg, #BBD0FF 0%, #DFFEE6 100%)",
      "bbc-terms-policy":
        "linear-gradient(139.68deg, rgba(129, 245, 255, 0.7) -37%, rgba(255, 213, 229, 0.7) 131.2%)",
      "bbc-gradient-10":
        "linear-gradient(79.91deg, rgba(226, 17, 17, 0.35) -45.03%, rgba(252, 8, 8, 0.348906) -9%, rgba(255, 255, 255, 0) 78.45%), radial-gradient(78.34% 87.46% at 72.4% 50%, rgba(16, 255, 212, 0.8) 0%, rgba(255, 255, 255, 0.152) 62.28%, rgba(255, 255, 255, 0) 100%), radial-gradient(141.16% 149.67% at 121.35% 100%, #5F36D1 9.82%, rgba(135, 102, 231, 0.93368) 21.48%, rgba(242, 245, 255, 0.49) 69.06%, rgba(255, 180, 180, 0) 100%), radial-gradient(69.08% 93.55% at 107.79% -8.89%, #007EFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(143.89deg, rgba(151, 149, 255, 0.78) -66.51%, rgba(180, 137, 216, 0.566277) -19.61%, rgba(255, 106, 114, 0) 104.64%)",
      "bbc-gradient-11":
        "radial-gradient(90.97% 103.16% at 74.66% 58.07%, rgba(16, 255, 212, 0.8) 0%, rgba(255, 255, 255, 0.152) 62.28%, rgba(255, 255, 255, 0) 100%) , radial-gradient(96.2% 88.65% at 84.01% 100%, #7849FF 0%, rgba(91, 127, 255, 0.49) 52.46%, rgba(255, 156, 156, 0) 100%) , radial-gradient(63.44% 78.03% at 100% -3.68%, #3CA1FF 0%, rgba(255, 255, 255, 0) 100%) , linear-gradient(132.99deg, rgba(234, 70, 70, 0.702) 4.71%, rgba(255, 106, 114, 0) 95.13%)",
      "bbc-gradient-12":
        "radial-gradient(110.88% 79.69% at 47.77% 151.82%, #FFEC45 0%, rgba(255, 236, 69, 0.3) 54.92%, rgba(255, 236, 69, 0) 96.11%) , radial-gradient(50% 68.23% at 98.21% 96.61%, #41D1B7 0%, rgba(65, 209, 183, 0.35) 49.27%, rgba(65, 209, 183, 0) 100%) , radial-gradient(83.71% 75.52% at -10.04% 2.86%, #8263DB 0%, rgba(129, 114, 218, 0.26) 56.87%, rgba(129, 114, 218, 0) 100%) , linear-gradient(180deg, #58CCDC 0%, rgba(88, 204, 220, 0) 100%), linear-gradient(81.23deg, #FF557E 21.4%, rgba(255, 85, 85, 0) 84.87%)",
      "bbc-gradient-13":
        "radial-gradient(105.68% 45.69% at 92.95% 50%, rgba(105, 244, 253, 0.5) 0%, rgba(160, 255, 244, 0.095) 53.91%, rgba(254, 216, 255, 0) 100%) , radial-gradient(103.18% 103.18% at 90.11% 102.39%, #C9FFF2 0%, rgba(230, 255, 250, 0) 100%) , radial-gradient(90.45% 90.45% at 87.84% 9.55%, #FFD2F5 0%, rgba(254, 219, 246, 0) 100%) , linear-gradient(135.66deg, rgba(203, 185, 255, 0.8) 14.89%, rgba(216, 202, 254, 0) 74.33%)",
      "bbc-useful-links":
        "linear-gradient(165.49deg, rgba(117, 121, 231, 0.7) -116.25%, rgba(185, 255, 252, 0.7) 98.96%)",
      "bbc-gradient-14":
        "linear-gradient(225.92deg, rgba(51, 210, 255, 0.7) 5.73%, rgba(61, 104, 222, 0.7) 54.65%, rgba(152, 69, 232, 0.7) 96.75%)",
      "bbc-gradient-15":
        "linear-gradient(44.34deg, #A5FECA 1.36%, #3EDCEB 27.95%, #2594FF 51.56%, #5533FF 75.55%)",
      "bbc-gradient-16":
        "linear-gradient(236.71deg, #A5FECA 11.48%, #3EDCEB 37.44%, #2594FF 68.68%, #5533FF 103.16%)",
      "bbc-gradient-hk-ecommerce":
        "linear-gradient(141.18deg, #CDF0EA 10.08%, #F9F9F9 98.58%)",
    },
    keyframes: {
      gradientAnimation: {
        "0%, 100%": {
          backgroundPosition: "0% 50%",
        },
        "50%": {
          backgroundPosition: "100% 50%",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1140px",
      },
      gridGutterWidth: "1.875rem",
    }),
  ],
};
