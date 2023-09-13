/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#faf9f6",
          "200": "#f0f0f0",
        },
        white: "#fff",
        cornflowerblue: "#24a0ed",
        "subtitle-color": "#5b6792",
        midnightblue: "#031968",
        black: "#000",
        dimgray: "#6b6565",
      },
      spacing: {},
      fontFamily: {
        "inria-sans": "'Inria Sans'",
        inter: "Inter",
        "bebas-neue": "'Bebas Neue'",
      },
      borderRadius: {
        "26xl": "45px",
        "11xl": "30px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      mini: "0.94rem",
      "17xl": "2.25rem",
      "45xl": "4rem",
      base: "1rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#013456",
        gold: "#fad405",
        black: "#000",
        whitesmoke: {
          "100": "#faf9f6",
          "200": "#f4f1ec",
        },
        gainsboro: "#e5e4e3",
        midnightblue: "#031968",
        lightslategray: "#8796ba",
        gray: "#fafafa",
        orange: "#fea403",
        steelblue: "#5b6792",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "istok-web": "'Istok Web'",
        inter: "Inter",
        "bebas-neue": "'Bebas Neue'",
        "inria-sans": "'Inria Sans'",
      },
      borderRadius: {
        "31xl": "50px",
        "13xl": "32px",
        "29xl": "48px",
        "26xl": "45px",
      },
    },
    fontSize: {
      "13xl": "2rem",
      xl: "1.25rem",
      "17xl": "2.25rem",
      base: "1rem",
      "45xl": "4rem",
      mini: "0.94rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
