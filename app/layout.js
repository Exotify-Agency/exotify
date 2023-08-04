import "@/sass/globals.scss";

import { Roboto, Playfair_Display } from "next/font/google";
import StyledComponentsRegistry from "./registry";

import business from "@/data/business.json";

import Nav from "@/components/layout/Nav/Nav";
import Footer from "@/components/layout/Footer/Footer";
import { Providers } from "./providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

// Default metadata if not provided
export const metadata = {
  title: business.name,
  description: "A service based web development agency",
  icons: {
    icon: "/assets/logo.ico",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={[roboto.variable, playfair.variable].join(" ")}>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Nav />
            <main className="main">{children}</main>
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
