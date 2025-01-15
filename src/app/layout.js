
import "./globals.css";


export const metadata = {
  title: "Ultimate ats",
  description: "created by Musabbir",
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
