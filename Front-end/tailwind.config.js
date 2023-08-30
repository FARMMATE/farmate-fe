/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        "my-color": "#8D8D8D",
        "dark-black": "#2F2F2F",
        orange: "#FF9B64",
      },
      keyframes: {
        entry: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        fadein: {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          to: {
            opacity: 1,
            transform: "translateZ(0)",
          },
        },
        godown: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
          to: {
            opacity: 1,
            transform: "translateZ(0)",
          },
        },
        goup: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },
          to: {
            opacity: 1,
            transform: "translateZ(0)",
          },
        },
        fadeout: {
          "0%": {
            opacity: 1,
          },
          to: {
            opacity: 0,
            transform: "translate3d(0, 50%, 0)",
          },
        },
      },
      animation: {
        fadein: "fadein 0.5s ease-out",
        goup: "goup 0.5s ease-out",
        godown: "godown 0.5s ease-out",
        entry: "entry 1s ease-out",
        fadeout: "fadeout 1s ease-out",
      },
    },
    fontFamily: {
      "pretendard-l": ["Pretendard-Light"],
      "pretendard-r": ["Pretendard-Regular"],
    },
  },
  plugins: [],
};
