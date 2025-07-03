import { ColorModeScript, theme } from "@chakra-ui/react";
import { Provider } from "./provider";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const colorMode = theme.config?.initialColorMode || "light";

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "GreenNext SaaS",
  description:
    "Smart & Secure Campus platform powered by GreenNext. A smart campus platform for managing attendance, energy efficiency, and environmental monitoring. Designed for modern institutions like ESTIAM.",

  icons: {
    icon: [
      {
        url: "/static/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/static/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/static/favicons/apple-touch-icon.png",
  },
  manifest: "/static/favicons/manifest.json",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1A202C" },
  ],
};
