import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Formación en Ventas | Selling Methodologies®",
  description:
    "20 clases, 40 horas de formación comercial online en vivo con instructores internacionales. Inicia el 13 de noviembre.",

  openGraph: {
    title: "Formación en Ventas | Selling Methodologies®",
    description:
      "20 clases · 40 horas · Online en vivo · Inicia el 13 de noviembre.",
    type: "website",
    locale: "es_MX",
    siteName: "Selling Methodologies | Instituto de Ventas",
  },

  twitter: {
    card: "summary_large_image",
    title: "Formación en Ventas | Selling Methodologies®",
    description:
      "20 clases · 40 horas · Online en vivo · Inicia el 13 de noviembre.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
