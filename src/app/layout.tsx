import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "I LOVE SAVVA",
    description: "Савваметод – Это уникальный подход к МЕНТАЛЬНОМУ ФИТНЕСУ, который уверенно поможет вам повысить уровень энергии, развить осознанность и заметно улучшить качество жизни и тела.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className="">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
