import Link from "next/link";
import React from "react";

interface IFloatingButton {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({ children, href }: IFloatingButton) {
  return (
    <Link href={href}>
      <a
        className="max-w-2xl text-white fixed w-14 bottom-28 right-8 bg-orange-400 rounded-full p-4
    hover:bg-orange-500 shadow-lg"
      >
        {children}
      </a>
    </Link>
  );
}
