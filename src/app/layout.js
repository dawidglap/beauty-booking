import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Salon La Fame",
  description: "Elegant booking system for beauty salons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={montserrat.variable}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
