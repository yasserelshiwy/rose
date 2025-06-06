import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Toaster } from "sonner";
import Navbar from "../components/NavBar/navbar.jsx";
import { Inter } from "next/font/google";
import Footer from "../components/Footer/Footer";
import ReactQueryComponent from "../components/ReactQueryComponent/ReactQueryComponent";
import CustomSessionProvider from "../components/SessionProvider/SessionProvider";
import CustomStoreProvider from "../components/CustomStoreProvider/CustomStoreProvider";
import Token from "../components/TokenProvider/Token";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata = {
  title: "Rose",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <CustomStoreProvider>
          <CustomSessionProvider>
            <Token />
            <ReactQueryComponent>
              <Navbar />
              {children}
              <Toaster position="top-center" theme="dark" />
              <Footer />
            </ReactQueryComponent>
          </CustomSessionProvider>
        </CustomStoreProvider>
      </body>
    </html>
  );
}
