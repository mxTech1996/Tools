"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { footerData, dataSite } from "@/data";
import { Footer as FooterComponent } from "ecommerce-mxtech";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-primary text-white mt-10 pt-10">
      <div className="container mx-auto grid grid-cols-4 gap-10">
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">{dataSite.name}</h3>
            <div className="flex space-x-8 mb-2">
              {footerData.map((item, i) => (
                <Link
                  href={item.href}
                  className="text-white hover:text-secondary"
                  key={i}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Image
              src="/images/visaMaster.png"
              alt="visa card"
              width={120}
              height={120}
            />
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-lg font-bold mb-2">Address</h3>
          <p className="text-white">{dataSite.address}</p>
        </div>

        <div className="w-full">
          <h3 className="text-lg font-bold mb-2">Email Address</h3>
          <p className="text-white">{dataSite.email}</p>
        </div>

        <div className="w-full">
          <h3 className="text-lg font-bold mb-2">Phone Number</h3>
          <p className="text-white">{dataSite.telephone}</p>
        </div>
      </div>

      <div className="w-full py-5 mt-10 text-center border-t border-t-neutral-300">
        <p className="text-white">{dataSite.name} - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
