import AdPlaceholder from "@/components/AdPlaceholder";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MestreDex",
  description: "Seu catálogo de Pokémon TCG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-blue-600">MestreDex</h1>
              <div className="flex-grow mx-8">
                <AdPlaceholder className="h-16 w-full max-w-2xl mx-auto" />
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Login
              </button>
            </nav>
          </header>

          <div className="flex-1 container mx-auto px-4 py-6 flex">
            <aside className="w-64 pr-8">
              <div className="sticky top-6">
                <h2 className="font-bold mb-4">Filtros</h2>
                {/* Filtros virão aqui */}
                <AdPlaceholder className="h-96 w-full mt-8" />
              </div>
            </aside>

            <main className="flex-1 bg-white p-6 rounded-lg shadow-md">
              {children}
            </main>
          </div>

          <footer className="text-center py-4 bg-gray-200">
            <p>MestreDex.com © 2026</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
