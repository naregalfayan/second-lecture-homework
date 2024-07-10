"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface IProps {
  className?: string;
  href: string;
  children: ReactNode;
}

export const NavLink = (props: IProps) => {
  const { className, href, children } = props;
  const path = usePathname();
  const styleName = className + (path == href ? " has-background-success" : "");
  return (
    <>
      <Link className={styleName} href={href}>
        {children}
      </Link>
    </>
  );
};
