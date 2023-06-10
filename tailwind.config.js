/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        dark: "#20232a",
        light: "#2c3036"
      },
      keyframes: {
        scaleUp: {
          from: { transform: "scale(0.9)" },
          to: { transform: "scale(1)" }
        },
        scaleDown: {
          from: { transform: "scale(1.1)" },
          to: { transform: "scale(1)" }
        },
        slideFromLeft: {
          from: { transform: "translateX(-1rem)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 }
        },
        slideFromRight: {
          from: { transform: "translateX(1rem)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 }
        },
        slideFromTop: {
          from: { transform: "translateY(-1rem)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 }
        },
        slideFromBottom: {
          from: { transform: "translateY(1rem)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 }
        }
      }
    },
    animation: {
      scaleUp: "scaleUp ease 700ms forwards",
      scaleDown: "scaleDown ease 700ms forwards",
      slideFromLeft: "slideFromLeft ease 700ms forwards",
      slideFromRight: "slideFromRight ease 700ms forwards",
      slideFromTop: "slideFromTop ease 700ms forwards",
      slideFromBottom: "slideFromBottom ease 700ms forwards"
    }
  },
  plugins: [require("./plugins/animationDelay"), require("./plugins/animationFillMode")]
};
