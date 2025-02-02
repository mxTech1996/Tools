"use client";

import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";

import Image from "next/image";
import Link from "next/link";
import { formatNumber, useCart } from "ecommerce-mxtech";
import { FaStar } from "react-icons/fa";
import { dataSite } from "@/data";

const getSrc = (i = number) => {
  if (i === 0) {
    return "/images/ser-01.jpg";
  }
  if (i === 1) {
    return "/images/ser-02.jpg";
  }
  return "/images/ser-03.jpg";
};

const testimonialImages = [
  {
    src: "/images/leads.jpg",
    alt: "Professional portrait",
    className: "absolute left-20 top-10",
  },
  {
    src: "/images/leads.jpg",
    alt: "Professional portrait",
    className: "absolute left-48 top-0",
  },
  {
    src: "/images/leads.jpg",
    alt: "Professional portrait",
    className: "absolute left-96 top-16",
  },
  {
    src: "/images/leads.jpg",
    alt: "Professional portrait",
    className: "absolute right-96 top-0",
  },
  {
    src: "/images/leads.jpg",
    alt: "Professional portrait",
    className: "absolute right-48 top-20",
  },
  {
    src: "/images/leads.jpg",
    alt: "Professional portrait",
    className: "absolute right-20 top-8",
  },
  {
    src: "/images/leads.jpg",
    alt: "Professional portrait",
    className: "absolute left-32 bottom-0",
  },
  {
    src: "/images/leads.jpg",
    alt: "Professional portrait",
    className: "absolute left-72 bottom-20",
  },
  {
    src: "/images/leads.jpg",
    alt: "Professional portrait",
    className: "absolute right-72 bottom-16",
  },
  {
    src: "/images/leads.jpg",
    alt: "Professional portrait",
    className: "absolute right-32 bottom-4",
  },
];

export default function Home() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();

  return (
    <main>
      <Navbar />

      <div className="bg-primary text-white w-full py-40 px-4">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto px-4">
          {dataSite?.image_hero && (
            <div className="w-full h-full relative">
              <Image
                src={dataSite.image_hero}
                alt={dataSite.name}
                width={500}
                height={500}
                className="absolute w-full h-full object-cover rounded-lg"
              />
            </div>
          )}

          <div className="flex flex-col">
            <div className="p-8 mb-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                Unlock Your Potential with Our Comprehensive Learning Courses
              </h1>
              <p className=" text-xl mb-8 max-w-3xl">{dataSite.description}</p>

              <Link href="/#courses">
                <button className="bg-white text-black px-8 py-3 rounded-full text-lg transition-colors">
                  See more
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="relative w-full overflow-hidden bg-white px-4 py-20 mt-40 mb-20">
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Committed to Excellence
              <br />
              <span className="text-gray-400">
                with Best Practices and Techniques
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Discover how our solutions leverage the best practices and
              techniques to enhance your experience.
            </p>
          </div>
        </div>

        {/* Testimonial Images */}
        <div className="absolute inset-0 z-0">
          {testimonialImages.map((image, index) => (
            <div
              key={index}
              className={`${image.className} transition-transform hover:scale-105`}
            >
              <div className="h-32 w-32 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={180}
                  height={180}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      {dataSite?.services?.length > 0 && (
        <div
          className="bg-cover bg-center"
          id="our-services"
          style={{
            backgroundImage: `url(${dataSite.image_hero2})`,
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-60 text-white py-48">
            <section className="container mx-auto px-4">
              <h1 className="text-4xl uppercase font-bold mb-4 text-center">
                Services
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {dataSite?.services?.map((service, i) => {
                  return (
                    <div
                      className="bg-white text-black border border-neutral-200 p-6"
                      key={i}
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <h2 className="text-xl font-bold uppercase">
                            {service.title}
                          </h2>
                        </div>

                        <p className="text-gray-800 text-justify">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      )}

      {/* Products */}
      <section className="container mx-auto px-4 my-20" id="courses">
        <h1 className="text-4xl uppercase font-bold mb-8 text-center">
          Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {dataSite?.products?.map?.((course, index) => {
            const existProduct = validateProductInCart(course.id);

            return (
              <div
                key={index}
                className="bg-white rounded-md border border-neutral-200 overflow-hidden flex flex-row"
              >
                <Image
                  src={course.image}
                  alt={course.name}
                  className="w-1/3 h-auto object-cover object-center"
                  width={500}
                  height={500}
                />
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div className="flex flex-col gap-4 mb-4">
                    <h3 className="text-xl font-bold">{course.name}</h3>

                    <p className="text-xl font-medium">
                      {formatNumber(course?.price)} MXN
                    </p>

                    <p className="text-gray-800 text-sm">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {course.content
                        .split(",")
                        .slice(0, 5)
                        .map((badge, index) => (
                          <div
                            className="bg-green-900 rounded-sm text-white px-2 py-1"
                            key={index}
                          >
                            <span className="line-clamp-1 text-[10px]">
                              {badge.trim()}
                            </span>
                          </div>
                        ))}
                    </div>
                    <button
                      className="w-full px-4 py-2 rounded-lg transition-colors"
                      onClick={() => handleAddOrRemoveProduct(course.id)}
                      style={{
                        backgroundColor: !existProduct ? "#0C2F37" : "#F09806",
                        color: "white",
                      }}
                    >
                      {!existProduct ? "Buy" : "Remove"} course
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-primary hird h-[180px] text-white py-8 mt-20">
        <div className="h-full max-w-4xl mx-auto flex items-center justify-around">
          <div className="text-center">
            <h2 className="text-3xl font-bold">100k+</h2>
            <p>Active Costumers</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">200+</h2>
            <p>Expert Instructors</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">80k+</h2>
            <p>Worldwide Learners</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">500+</h2>
            <p>Advance Topics</p>
          </div>
        </div>
      </div>

      {/* References */}
      <div className="bg-secondary py-24 my-10 text-white" id="references">
        <div className="container mx-auto px-4 my-20">
          <h1 className="text-4xl uppercase font-bold mb-8 text-center text-primary">
            Reviews
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {dataSite.references.map((customer, index) => (
              <div
                key={index}
                className="bg-primary rounded-lg text-white shadow-md p-6 flex flex-col justify-between"
              >
                <div className="flex flex-col">
                  <div className="flex justify-between w-full items-center gap-5 mb-3">
                    <h3 className="text-xl font-semibold mb-2">
                      {customer.name}
                    </h3>
                  </div>

                  <p>{customer.description}</p>
                </div>

                <div className="flex items-center justify-end mt-5">
                  <div className="bg-primary text-white ml-2 px-2 py-1 flex items-center gap-4 text-xl">
                    <FaStar className="text-yellow-500" /> <span>4.5</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* More information */}
      {dataSite?.info?.length > 0 && (
        <div className="container mx-auto px-4 my-20" id="know-us">
          <h1 className="text-4xl uppercase font-bold mb-8 text-center">
            Know Us
          </h1>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {dataSite?.info?.map((info, i) => {
              return (
                <div className="bg-primary rounded-lg  text-white" key={i}>
                  <Image
                    src={getSrc(i)}
                    alt={info.name}
                    width={500}
                    height={500}
                    className="w-full h-72 object-cover"
                  />

                  <div className="flex flex-col items-center p-6">
                    <h2 className="text-xl font-bold mb-2 uppercase">
                      {info.title}
                    </h2>
                    <p className="text-sm text-justify">{info.description}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      )}

      <Footer />
    </main>
  );
}
