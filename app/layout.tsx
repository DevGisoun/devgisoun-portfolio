import type { Metadata } from 'next';

// CSS
import './globals.css';

const defautTitle = 'Dev. Gisoun - Portfolio';

export const metadata: Metadata = {
    title: {
        default: defautTitle,
        template: `%s | ${defautTitle}`,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
