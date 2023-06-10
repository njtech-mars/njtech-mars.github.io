const plugin = require("tailwindcss/plugin");

const animationDelay = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "animation-delay": (value) => ({ animationDelay: value })
      },
      {
        values: theme("animationDelay")
      }
    );
  },
  {
    theme: {
      animationDelay: {
        0: "0s",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms"
      }
    }
  }
);
module.exports = animationDelay;
