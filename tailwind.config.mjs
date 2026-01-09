export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "24px",
        lg: "32px",
        xl: "40px",
      },
    },
    extend: {
      minHeight: {
        12: "48px", // touch target
      },
    },
  },
  plugins: [],
};
