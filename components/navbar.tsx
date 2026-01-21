import { links } from "@/lib/data";
import Header from "./header";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <Header links={links} />
    </nav>
  );
}
