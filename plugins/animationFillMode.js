const plugin = require("tailwindcss/plugin");

const animationFillMode = plugin(function ({ addUtilities }) {
  addUtilities({
    ".fill-mode-none": {
      "animation-fill-mode": "none"
    },
    ".fill-mode-forwards": {
      "animation-fill-mode": "forwards"
    },
    ".fill-mode-backwards": {
      "animation-fill-mode": "backwards"
    },
    ".fill-mode-both": {
      "animation-fill-mode": "both"
    }
  });
});

module.exports = animationFillMode;
