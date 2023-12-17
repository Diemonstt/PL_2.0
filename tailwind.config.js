/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#F13959",
        yellow: "#FBC13C",
        orderPage: "#7E7ADA",
        socialMedia: "#7E7ADA",
        signUpBtn: "#7E7ADA",
        loginBtn: "#FBC13C",
        loginBtnHover: "#D89600",
        grey: "#999999",
      },
    },
  },
  plugins: [],
};
