import "./globals.css";
import Header from "@/componentes/Header"

export const metadata = {
  title: "Create Next App",
  description: "Targaryens",
  charset: 'UTF-8',
  author: 'Brenda Matos',
  keywords: 'HTML, CSS, JavaScript, React, Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
