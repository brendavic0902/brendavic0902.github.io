import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}