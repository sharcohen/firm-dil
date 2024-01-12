/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayscale: {
          0: "#FFFFFF",
          100: "#F7F8FC", // header text
          200: "#DDDDDD", // detailed view, bottom separator
          300: "#DBDCE4", // list search section bottom border
          350: "#F9F9F9",
          400: "#5E5E5E", // first issue id, issue type
          500: "#DFE0EA", // border
          600: "#363740", // description text (not title), issue type text, issue.location.pageTitle
        },
        blue: {
          100: "#F3F4FB", // list bg
          200: "#F2F3F7", // status bg
        },
        violet: {
          200: "#D6D8E4", // app bg
        },
        green: {
          100: "#DAFADE", // selected list item bg
        },
        orange: {
          400: "#FF6A42", // issue.location.pageNumber
        },
        pink: {
          300: "#DFE0EB / 66", // issue.package / use / 40 (% alpha)
        },
        red: {
          100: "#929292", // issue title text ("description:, other related issues:, issues found on sheet:, location:")
        },
        status: {
          new: "#F12B2C",
          active: "#CA9C00",
          resolved: "#00C213",
        },
        risk: {
          low: "#F7DF94",
          medium: "#95CEE0",
          high: "#FF9248",
          critical: "#F78080",
        },
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        card: "2px 2px 22px 2px rgba(159, 162, 180, 0.25)",
      },
      fontSize: {
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
      },
    },
  },
  plugins: ["@headlessui/tailwindcss"],
}
