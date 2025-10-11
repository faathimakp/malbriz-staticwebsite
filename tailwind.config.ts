import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

const configs: Config = {
  content: {
    files: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: () => ({
      defaultScreens: ["20rem", "90rem"],
    }),
    extend: {
      colors: {
       
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
      fontFamily: {
        ppMoriReqular: "var(--font-pp-mori-regular)",
        ppMoriSemibold: "var(--font-pp-mori-semibold)",
        satoshiMedium: "var(--font-satoshi-medium)",
        satoshiBold: "var(--font-satoshi-bold)",
        satoshiRegular: "var(--font-satoshi-regular)",
      },
      fontSize: {
        h1: "2rem",
        h2: "1.5rem",
        h3: "1rem",
        h4: "1.125rem",
        h5: "0.75rem",
        h6: "1.25rem",
        h7: "2.25rem",
        h8: "0.875rem",
        h9: "4rem",
        h10: "2.5rem",
        h11: "3rem",
        h12: "0.5rem",
        h13:"1.75rem",
      },
    },
  },
  plugins: [
    fluid({
      checkSC144: false,
    }),
  ],
};

export default configs;
