import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../[lang]/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { dir } from "i18next";
import HeaderContainer from "@/components/organisms/Header/HeaderContainer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
    params: { lang },
}: Readonly<{
    children: React.ReactNode;
    params: { lang: string };
}>) {
    return (
        <html suppressHydrationWarning lang={lang} dir={dir(lang)}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <HeaderContainer />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
