import { Poppins, DM_Mono } from "next/font/google";

// Scoped to the Projects redesign only — does not touch the site-wide
// font-poppins variable set up in _app.js.
export const poppinsProjects = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins-projects",
});

export const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});
