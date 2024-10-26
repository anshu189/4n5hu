const {nextui} = require('@nextui-org/theme');
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|chip|ripple|spinner).js"
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [addVariablesForColors,nextui()],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}