/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from "react";

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {children}
      </body>
    </html>
  );
}
