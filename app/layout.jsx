import { Theme } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

import "@radix-ui/themes/styles.css";
import "@/styles/global.scss";

export const metadata = {
  title: "Quillbrix",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme color="var(--accent-12)">
          <Toaster />
          <NextTopLoader color="var(--blue-9)" showSpinner={false} height={3} />
          <Header />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
