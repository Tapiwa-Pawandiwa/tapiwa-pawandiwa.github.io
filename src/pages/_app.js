import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import localFont from 'next/font/local'
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";


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

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/personal_logo.png"/>
      </Head>
      <main className={`${montserrat.variable} ${redaction.variable} ${poppins.variable} ${poppinsLight.variable} font-poppins bg-light w-full min-h-screen`}>
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
