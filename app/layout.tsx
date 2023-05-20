// Import Styles
import "./globals.css";

// Import Font
import { Nunito } from "next/font/google";

// Import Components
import Navbar from "./components/navbar/Navbar";
import ClienOnly from "./components/ClientOnly";
import RegisterModel from "./components/modals/RegisterModel";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClienOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModel />
          <Navbar />
        </ClienOnly>
        {children}
      </body>
    </html>
  );
}
