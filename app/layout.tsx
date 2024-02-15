import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/app/contexts/themeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Haruka',
    description: 'Missing things that never were but should have been',
    icons: {
        icon: 'music.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    );
}
