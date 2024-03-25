import type { Metadata } from "next";
import { Libre_Caslon_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Providing } from "./providing";

const libreCaslon = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libreCaslon.className}>
        <Providing>
          <Providers>{children}</Providers>
        </Providing>
      </body>
    </html>
  );
}
