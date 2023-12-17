/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accountPage: "#F13959",
        orderPage: "#7E7ADA",
        socialMedia: "#7E7ADA",
        signUpBtn: "#7E7ADA",
        loginBtn: "#FBC13C",
        loginBtnHover: "#D89600",
      },
    },
  },
  plugins: [],
};
