import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:{default:"TALSNEPCO | People & Performance",template:"%s | TALSNEPCO"},description:"Human capacity development, professional training, hiring and consultancy in Port Harcourt, Nigeria.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
