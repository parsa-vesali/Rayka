import { cn } from "@/lib/utils";
import "@/styles/globals.css";


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" dir="rtl" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen font-Dana bg-background text-foreground antialiased max-w-full overflow-x-hidden",)}
            >
                {children}
            </body>
        </html>
    );
};
