


// import type { Metadata } from "next";
// import { Space_Grotesk, Manrope } from "next/font/google";
// import "./globals.css";

// const spaceGrotesk = Space_Grotesk({
//   variable: "--font-space-grotesk",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

// const manrope = Manrope({
//   variable: "--font-manrope",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "Revaya — Software That Runs Businesses",
//   description: "Custom Software, ERP, HRMS, SaaS Platforms, Automation & Enterprise Solutions",
//   icons: {
//     icon: [
//       {
//         url: "/favicon.png",
//         href: "/favicon.png",
//       },
//     ],
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html
//       lang="en"
//       className={`${spaceGrotesk.variable} ${manrope.variable} h-full`}
//     >
//       <body className="min-h-full flex flex-col bg-black text-white antialiased">
//         {children}
//       </body>
//     </html>
//   );
// }






import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Revaya — Software That Runs Businesses",
  description: "Custom Software, ERP, HRMS, SaaS Platforms, Automation & Enterprise Solutions",
  icons: {
    icon: [
      {
        url: "/bot_favicon.png",
        href: "/bot_favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full`}
    >
      <head>
        {/* Chatzy CSS Stylesheet */}
        <link 
          rel="stylesheet" 
          href="https://chatzy-kb-store.s3.amazonaws.com/icons/5ab07987-b5db-477c-82ff-1287e0883acb" 
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white antialiased">
        {children}

        {/* Chatzy Widget Script */}
        <script
          src="https://chatzy-kb-store.s3.amazonaws.com/icons/56706cc4-b3ba-4eba-9610-f2fb07008a5c"
          id="efbda2f2-bfa7-40a0-b6e8-c6cde28e296c"
          className="chatzy_widget_script"
          defer
        />
      </body>
    </html>
  );
}