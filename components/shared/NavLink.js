import Link from "next/link";
import React from "react";

const NavLink = ({ value, href }) => {
  return (
    <div className="px-2 transition-all 250ms ease-in-out hover:scale-105 cursor-pointer hover:font-semibold">
      <Link href={href}>{value}</Link>
    </div>
  );
};

export default NavLink;
