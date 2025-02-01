"use client";

import { navData, dataSite } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-white sticky top-0 z-20 border-b border-b-primary">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-8  text-primary">
          <Link className="font-bold text-lg" href="/">
            {dataSite.iconImage && (
              <Image
                src={dataSite.iconImage}
                alt={dataSite.name}
                width={40}
                height={50}
              />
            )}
          </Link>

          <nav className="flex space-x-8">
            {navData.map((item, index) => (
              <Link key={index} href={item.href} className="hover:font-medium">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-8">
            <Link href="/my-cart" className="hover:font-medium">
              Go to Cart
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
