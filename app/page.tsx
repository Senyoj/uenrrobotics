import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

const Homepage = () => {
  const videoId = "dFObux6mfTc";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`;
  return (
    <>
      <section className="hero relative h-screen w-full overflow-hidden">
        <iframe
          src={embedUrl}
          title="YouTube video player"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          className="absolute top-1/2 left-1/2 w-full h-full min-w-[177.7vh] min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 object-cover -z-20 scale-[1.4]"
        ></iframe>
        <div className="absolute inset-0 bg-black/70 -z-10"></div>

        <div className="container mx-auto h-full flex flex-col justify-center items-start px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Pioneering Robotics & AI in Ghana
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Explore autonomous solutions in environmental monitoring and
              industrial automation, engineered by the{" "}
              <b>UENR Robotics Club (URC).</b>
            </p>
            {/* <button className="mt-8 px-6 py-3 bg-gray-950  text-white  rounded-full border-2 border-transparent hover:bg-white hover:text-gray-800 hover:border-gray-800 transition-all duration-300 group relative overflow-hidden"> */}
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white dark:bg-cyan-400/10 rounded-full group-hover:w-32 group-hover:h-32"></span>
              <span className="relative">// Get Involved</span>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-max relative p-10 md:px-56">
          <Image
            src="/bg.jpg"
            alt="gradient bg"
            fill
            className="object-cover -z-20"
            priority
          />
          <div className="absolute inset-0 bg-black/50 -z-10"></div>
          <div className="md:flex lg:justify-between lg:items-center">
            <div className="flex items-center gap-4">
              <div className="max-w-16 max-h-16 bg-white rounded-full "></div>
              <div>
                <h2 className="text-3xl font-bold text-white text-start">
                  Meet Memo
                </h2>
                <p className="text-white">
                  Our AI agent to help you navigate the URC Horizon. Try It
                  Now!!
                </p>
              </div>
            </div>
            <div>
              <button className="mt-4 px-6 py-3 font-semibold bg-gray-950  text-white  rounded-full border-2 border-transparent hover:bg-white hover:text-gray-800 hover:border-gray-800 transition-all duration-300 group relative overflow-hidden">
                Get Chatty
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-[#121212] text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mt-20 space-y-24">
            {/* --- Project 1: Explorer --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-start">
              <div className="group relative overflow-hidden">
                <a href="/products/explorer">
                  <Image
                    src="/explorer.jpg"
                    alt="Explorer surveillance robot"
                    width={800}
                    height={600}
                    className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 ">
                    <h1 className=" text-5xl font-extrabold   absolute bottom-10 left-10">
                      {" "}
                      The Unseen Guardian
                    </h1>
                  </div>
                </a>
              </div>
              <div>
                {/* <p className="text-2xl font-medium text-blue-400"></p> */}
                <h3 className="text-5xl font-extrabold mt-2 underline">
                  Meet Explorer
                </h3>
                <h3 className="text-5xl font-extrabold mt-2">
                  The Unseen Guardian
                </h3>
                <p className="mt-4 text-lg text-gray-300">
                  An autonomous surveillance robot with smart navigation,
                  designed for patrolling and monitoring restricted zones with
                  obstacle detection and avoidance.
                </p>
                <a
                  href="/products/explorer"
                  className="mt-6 inline-block font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* --- Project 2: Curiosity --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <div className="lg:order-last group relative overflow-hidden">
                <a href="/products/curiosity">
                  <Image
                    src="/curiosity-2.jpg"
                    alt="Curiosity autonomous boat"
                    width={400}
                    height={200}
                    className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </a>
              </div>
              <div className="lg:order-first pb-24">
                <h3 className="text-5xl font-extrabold underline">Curiosity</h3>
                <p className="mt-4 text-lg text-gray-300">
                  An autonomous research boat for industrial and environmental
                  monitoring, equipped with advanced sensors for real-time data
                  collection.
                </p>
                <a
                  href="/products/curiosity"
                  className="mt-6 inline-block font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto p-10 md:p-20">
          <div className=" mb-16">
            <h3 className="text-5xl md:text-6xl  font-extrabold  text-gray-900">
              Pushing Technological Boundaries
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              From autonomous boats to intelligent robotics, explore the
              technologies we're building.
              </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Explorer",
                href: "/products/explorer",
                imageSrc: "/explorer.jpg",
              },
              {
                name: "Curiosity",
                href: "/products/curiosity",
                imageSrc: "/curiosity-2.jpg",
              },
              {
                name: "Autonomous Mobile Robots",
                href: "/products/amr",
                imageSrc: "/amr.jpg",
              },
              {
                name: "Robotic Arm",
                href: "/products/robotic-arm",
                imageSrc: "/arm.jpg",
              },
              {
                name: "Robotic Head",
                href: "/products/robotic-head",
                imageSrc: "/head.jpg",
              },
            ].map((product) => (
              <div key={product.name} className="group relative">
                <a href={product.href} className="block">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={product.imageSrc}
                      alt={`Image of ${product.name}`}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out "
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-5xl font-extrabold  text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-4 inline-block font-semibold text-blue-500 transition-colors group-hover:text-blue-600">
                      Learn More <span aria-hidden="true">→</span>
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-32 text-white">
        <Image
          src="/bg.jpg"
          alt="Abstract background"
          fill
          className="object-cover -z-20"
        />
        <div className="absolute inset-0 bg-gray-950/80 -z-10"></div>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="lg:flex lg:gap-16 lg:items-end">
            {/* Left Column: Image */}

            {/* Right Column: Content */}
            <div className="lg:w-2/3">
              <div className="max-w-3xl text-left">
                <h2 className="text-5xl md:text-6xl font-extrabold">
                  Beyond Robotics: Software & Systems
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Our expertise extends beyond hardware. We design and build
                  robust software solutions that power modern digital
                  experiences.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8 text-black">
                {/* Learning Management System */}
                <div className="bg-white backdrop-blur-md border border-white/10 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">
                      Learning Management System
                    </h3>
                    <p className="mt-2 text-gray-900 pb-10">
                      An internal platform for our Members to manage courses,
                      track student progress, and facilitate online learning.
                    </p>
                    <Image
                      src="/lms.jpg"
                      alt="VoteMe - Secure Voting System"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out "
                    />
                  </div>
                </div>

                {/* Secure Voting System */}
                <div className="bg-white backdrop-blur-md border border-white/10 overflow-hidden">
                  <div className="p-6">
                    <Image
                      src="/voteme.jpg"
                      alt="VoteMe - Secure Voting System"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out "
                    />
                    <h3 className="text-2xl font-bold pt-10">VoteMe</h3>
                    <p className="mt-2 text-gray-900 ">
                      A robust and transparent digital voting solution for
                      on-campus elections, ensuring integrity and accessibility
                      for all participants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          {/* CTA Section */}
          <div className="">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">
              Stay Ahead of the Curve
            </h2>
          </div>

          {/* Blog Section */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Big Blog Post */}
            <a href="/blog/post-1" className="lg:col-span-2 block group">
              <div className="bg-white p-8 flex flex-col md:flex-row gap-8 h-full">
                <div className="md:w-1/2 overflow-hidden">
                  <Image
                    src="/AutonomousNavigation.jpg"
                    alt="Main blog post image"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col">
                  <h3 className="text-3xl font-bold text-gray-900">
                    The Future of Autonomous Navigation in Ghana
                  </h3>
                  <p className="mt-4 text-gray-600 flex-grow">
                    We delve into the challenges and triumphs of developing our
                    latest autonomous systems, pushing the boundaries of what's
                    possible with robotics in West Africa...
                  </p>
                </div>
              </div>
            </a>

            <div className="flex flex-col gap-8">
              <a href="/blog/post-2" className="block group flex-1">
                <div className="bg-white flex flex-col">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src="/arm2.jpg"
                      alt="Secondary blog post"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                      <h3 className="text-4xl font-bold text-white">
                        Our Journey into AI-Powered Robotics
                      </h3>
                    </div>
                  </div>
                </div>
              </a>

              <a href="/blog/post-3" className="block group flex-1">
                <div className="bg-white flex flex-col">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src="/amr.jpg"
                      alt="Third blog post"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                      <h3 className="text-4xl font-bold text-white">
                        Demystifying Swarm Robotics
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative h-96 flex flex-col items-center justify-center text-center overflow-hidden p-8">
            <Image
              src="/cta-bg.webp"
              alt="A community of innovators"
              fill
              className="object-cover -z-20"
            />
            <div className="absolute inset-0 bg-gray-900/60 -z-10"></div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white">
              Join Our Community of Innovators
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl">
              Become a part of a vibrant community dedicated to pushing the
              boundaries            </p>
            <div className="mt-8">
              <a
                href="/join"
                className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Homepage;
