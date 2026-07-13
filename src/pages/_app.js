import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Montserrat, Inter } from "next/font/google";
import Head from "next/head";
import localFont from 'next/font/local'
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import favicon from "../../public/images/personal_logo.png";

export const metadata = {
  icons : {
    icon: "../../public/favicon.ico"
  }
}

const redaction = localFont({
src:'../../public/fonts/Redaction50-Regular.otf',


variable: "--font-redaction",
});

const poppins = localFont({
  src:'../../public/fonts/Poppins-Regular.ttf',
  variable: '--font-poppins',
})

const poppinsLight = localFont({
  src:'../../public/fonts/Poppins-Light.ttf',
  variable: '--font-poppinsLight',
})



const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});



export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href={favicon.src} />
      </Head>
      <main className={`${montserrat.variable} ${redaction.variable} ${poppins.variable} ${poppinsLight.variable} ${inter.variable} font-poppins bg-light w-full min-h-screen`}>
        <NavBar/>
        <AnimatePresence mode={"wait"}>
           <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
//we use this to manage the pages , anyhting we put here will be received by the pages
