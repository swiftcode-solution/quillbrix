import { Theme } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";
import Header from "./_components/Header";
import "@radix-ui/themes/styles.css";
import "@/styles/global.scss";
import Footer from "./_components/Footer";

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
          <Header />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
