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
        slideFromLeft: {
          from: { transform: "translateX(-2rem)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 }
        },
        slideFromRight: {
          from: { transform: "translateX(2rem)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 }
        },
        slideFromTop: {
          from: { transform: "translateY(-2rem)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 }
        },
        slideFromBottom: {
          from: { transform: "translateY(2rem)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 }
        }
      }
    },
    animation: {
      slideFromLeft: "slideFromLeft ease-out 500ms forwards",
      slideFromRight: "slideFromRight ease-out 500ms forwards",
      slideFromTop: "slideFromTop ease-out 500ms forwards",
      slideFromBottom: "slideFromBottom ease-out 500ms forwards"
    }
  },
  plugins: [require("./plugins/animationDelay"), require("./plugins/animationFillMode")]
};
