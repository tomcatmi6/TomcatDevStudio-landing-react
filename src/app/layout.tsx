import type { Metadata } from "next";
import "../assets/styles/styles.scss";

export const metadata: Metadata = {
  title: "Tomcat Dev Studio - Piotr Tomczak",
  description: "Tomcat Dev Studio - portfolio Piotra Tomczaka, frontend developera.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="body-container">
        {children}
        <footer className="footer">
        <p>© 2024 Tomcat Dev Studio. Wszystkie prawa zastrzeżone.</p>
      </footer>
      </body>
    </html>
  );
}