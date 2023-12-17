/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accountPage: "#F13959",
        signUpBtn: "#7E7ADA",
        loginBtn: "#FBC13C",
      },
    },
  },
  plugins: [],
};
