"use client";
import React from "react";
import { ContactInfo } from "ecommerce-mxtech";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

export default function MoreInformation() {
  return (
    <main className="relative bg-secondary">
      <Navbar />
      <ContactInfo
        labelSend="Send a message"
        classNameButton="bg-primary"
        title="We are delighted to assist you with anything you need"
      />
      <Footer />
    </main>
  );
}
