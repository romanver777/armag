import "./globals.scss";
import type { Metadata } from "next";
import Header from "./components/header/header";

export const metadata: Metadata = {
  title: "Armageddon 2023",
  description: "Ближайшие подлеты астероидов",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/style/icon/favicon-32x32.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
