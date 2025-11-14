import Header from "@/components/Header";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <main>
        <Header />
        {children}
      </main>
    </ClerkProvider>
  );
}
