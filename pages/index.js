"use client";
import Image from "next/image";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Vortex } from "../components/ui/vortex";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { BackgroundBeams } from "../components/ui/background-beams";
import { AuroraBackground } from "../components/ui/aurora-background";
import { HeroParallax } from "../components/ui/hero-parallax";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import { BackgroundLines } from "../components/ui/background-lines";
import { WavyBackground } from "../components/ui/wavy-background";
import { LampContainer } from "../components/ui/lamp";
import { SparklesCore } from "../components/ui/sparkles";
import { Spotlight } from "../components/ui/spotlight";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { Tabs } from "../components/ui/tabs";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { FloatingNav } from "../components/ui/floating-navbar";

const solutions = [
  {
    name: "Blog",
    description: "Learn about tips, product updates and company culture.",
    href: "#",
  },
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums of contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "Check out webinars with experts and learn about our annual conference.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Features", href: "#" },
  { name: "Method", href: "#" },
  { name: "Customers", href: "#" },
  { name: "Changelog", href: "#" },
  { name: "Integrations", href: "#" },
  { name: "Pricing", href: "#" },
];
const footernavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

const tabs = [
  {
    title: "Product",
    value: "product",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Product Tab</p>
        <Image
          src="/linear.webp"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
      </div>
    ),
  },
  {
    title: "Services",
    value: "services",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Services tab</p>
        {/* <DummyContent /> */}
        <Image
          src="/linear.webp"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
      </div>
    ),
  },
  {
    title: "Playground",
    value: "playground",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Playground tab</p>
        <Image
          src="/linear.webp"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
      </div>
    ),
  },
  {
    title: "Content",
    value: "content",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Content tab</p>
        <Image
          src="/linear.webp"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Random tab</p>
        <Image
          src="/linear.webp"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
      </div>
    ),
  },
];

const navItems = [
  {
    name: "Home",
    link: "/",
    // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    // icon: (
    //   <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    // ),
  },
];

export default function Home() {
  return (
    // Floating Nav
    // <div className="relative  w-full">
    //   <FloatingNav navItems={navItems} />
    // </div>

    // rotating border
    // <div className="m-40 flex justify-center text-center">
    //   <HoverBorderGradient
    //     containerClassName="rounded-full"
    //     as="button"
    //     className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
    //   >
    //     <svg
    //       width="66"
    //       height="65"
    //       viewBox="0 0 66 65"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-3 w-3 text-black dark:text-white"
    //     >
    //       <path
    //         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //         stroke="currentColor"
    //         strokeWidth="15"
    //         strokeMiterlimit="3.86874"
    //         strokeLinecap="round"
    //       />
    //     </svg>
    //     <span>Aceternity UI</span>
    //   </HoverBorderGradient>
    // </div>

    // <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
    //   <Tabs tabs={tabs} />
    // </div>

    // sticky scroll
    // <div className="p-10">
    //   <StickyScroll content={content} />
    // </div>

    // spotlight
    // <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    //   <Spotlight
    //     className="-top-40 left-0 md:left-60 md:-top-20"
    //     fill="white"
    //   />
    //   <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
    //     <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
    //       Spotlight <br /> is the new trend.
    //     </h1>
    //     <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
    //       Spotlight effect is a great way to draw attention to a specific part
    //       of the page. Here, we are drawing the attention towards the text
    //       section of the page. I don&apos;t know why but I&apos;m running out of
    //       copy.
    //     </p>
    //   </div>
    // </div>

    // sparkles
    // <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    //   <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
    //     Aceternity
    //   </h1>
    //   <div className="w-[40rem] h-40 relative">
    //     {/* Gradients */}
    //     <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
    //     <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
    //     <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
    //     <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

    //     {/* Core component */}
    //     <SparklesCore
    //       background="transparent"
    //       minSize={0.4}
    //       maxSize={1}
    //       particleDensity={1200}
    //       className="w-full h-full"
    //       particleColor="#FFFFFF"
    //     />

    //     {/* Radial Gradient to prevent sharp edges */}
    //     <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    //   </div>
    // </div>

    // <LampContainer>
    //   <motion.h1
    //     initial={{ opacity: 0.5, y: 100 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{
    //       delay: 0.3,
    //       duration: 0.8,
    //       ease: "easeInOut",
    //     }}
    //     className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    //   >
    //     Build lamps <br /> the right way
    //   </motion.h1>
    // </LampContainer>

    // Wavy background
    // <WavyBackground className="max-w-4xl mx-auto pb-40">
    //   <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
    //     Hero waves are cool
    //   </p>
    //   <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
    //     Leverage the power of canvas to create a beautiful hero section
    //   </p>
    // </WavyBackground>

    // Background lines
    // <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
    //   <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
    //     Sanjana Airlines, <br /> Sajana Textiles.
    //   </h2>
    //   <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
    //     Get the best advices from our experts, including expert artists,
    //     painters, marathon enthusiasts and RDX, totally free.
    //   </p>
    // </BackgroundLines>

    // shooting stars
    // <div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
    //   <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
    //     <span>Shooting Star</span>
    //     <span className="text-white text-lg font-thin">x</span>
    //     <span>Star Background</span>
    //   </h2>
    //   <ShootingStars />
    //   <StarsBackground />
    // </div>

    // <HeroParallax products={products} />

    // Aurora
    // <AuroraBackground>
    //   <motion.div
    //     initial={{ opacity: 0.0, y: 40 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{
    //       delay: 0.3,
    //       duration: 0.8,
    //       ease: "easeInOut",
    //     }}
    //     className="relative flex flex-col gap-4 items-center justify-center px-4"
    //   >
    //     <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
    //       Background lights are cool you know.
    //     </div>
    //     <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
    //       And this, is chemical burn.
    //     </div>
    //     <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
    //       Debug now
    //     </button>
    //   </motion.div>
    // </AuroraBackground>

    // Flowing beam
    // <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
    //   <div className="max-w-2xl mx-auto p-4">
    //     <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
    //       Join the waitlist
    //     </h1>
    //     <p></p>
    //     <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
    //       Welcome to MailJet, the best transactional email service on the web.
    //       We provide reliable, scalable, and customizable email solutions for
    //       your business. Whether you&apos;re sending order confirmations,
    //       password reset emails, or promotional campaigns, MailJet has got you
    //       covered.
    //     </p>
    //     <input
    //       type="text"
    //       placeholder="hi@manuarora.in"
    //       className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
    //     />
    //   </div>
    //   <BackgroundBeams />
    // </div>

    // Gradient
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        {/* <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Gradients X Animations
        </p> */}
        <div className="flex-1 justify-between items-stretch">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              Productivity Elevated
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <p className="mt-10 text-xl font-normal text-slate-300 opacity-70">
              <span className="block pb-2">
                Something extraordinary is in the works.
              </span>
              <span className="block">
                We&apos;re crafting an AI-powered experience that will transform
              </span>
              <span className="block">the way you live, work, and create.</span>
            </p>
          </motion.div>
          <p className="fixed bottom-2 left-1/2 transform font-normal -translate-x-1/2 text-center text-sm opacity-40 text-gray-200 xl:text-center">
            &copy; 2024 Fociq Inc. All rights reserved.
          </p>
        </div>
      </div>
    </BackgroundGradientAnimation>

    // vortex
    // <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
    //   <Vortex
    //     backgroundColor="black"
    //     rangeY={800}
    //     particleCount={500}
    //     baseHue={120}
    //     className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
    //   >
    //     <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
    //       The hell is this?
    //     </h2>
    //     <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
    //       This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
    //       burned and you&apos;ll have a scar.
    //     </p>
    //     <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
    //       <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
    //         Order now
    //       </button>
    //       <button className="px-4 py-2  text-white ">Watch trailer</button>
    //     </div>
    //   </Vortex>
    // </div>

    // <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-600/30 via-slate-900 to-black">
    //   <Popover as="header" className="relative">
    //     <div className="backdrop-blur-md z-50 w-full fixed pt-2 ">
    //       <nav
    //         className="relative max-w-6xl mx-auto flex items-center justify-between border-b border-b-slate-800 pb-2"
    //         aria-label="Global"
    //       >
    //         <div className="flex items-center flex-1">
    //           <div className="flex items-center justify-between w-full md:w-auto">
    //             <a href="#">
    //               <span className="sr-only">Workflow</span>
    //               <img
    //                 className=" h-6 w-auto"
    //                 src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
    //                 alt="Workflow"
    //               />
    //             </a>
    //             <div className="-mr-2 flex items-center md:hidden">
    //               <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
    //                 <span className="sr-only">Open main menu</span>
    //                 <MenuIcon className="h-6 w-6" aria-hidden="true" />
    //               </Popover.Button>
    //             </div>
    //           </div>
    //           <div className="hidden space-x-4 md:flex md:ml-10">
    //             {navigation.map((item) => (
    //               <a
    //                 key={item.name}
    //                 href={item.href}
    //                 className="text-base font-medium text-white hover:text-gray-300"
    //               >
    //                 {item.name}
    //               </a>
    //             ))}
    //             <Popover className="relative">
    //               {({ open }) => (
    //                 <>
    //                   <Popover.Button
    //                     className={classNames(
    //                       open ? "text-gray-900" : "text-gray-500",
    //                       "group text-sm font-medium text-white hover:text-gray-300 inline-flex items-center focus:outline-none focus:ring-0"
    //                     )}
    //                   >
    //                     <span>Company</span>
    //                     <ChevronDownIcon
    //                       className={classNames(
    //                         open ? "text-gray-600" : "text-gray-400",
    //                         "ml-2 h-5 w-5 group-hover:text-gray-500"
    //                       )}
    //                       aria-hidden="true"
    //                     />
    //                   </Popover.Button>

    //                   <Transition
    //                     as={Fragment}
    //                     enter="transition ease-out duration-200"
    //                     enterFrom="opacity-0 translate-y-1"
    //                     enterTo="opacity-100 translate-y-0"
    //                     leave="transition ease-in duration-150"
    //                     leaveFrom="opacity-100 translate-y-0"
    //                     leaveTo="opacity-0 translate-y-1"
    //                   >
    //                     <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
    //                       <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
    //                         <div className="relative grid gap-6 bg-slate-900 px-5 py-6 sm:gap-8 sm:p-8">
    //                           {solutions.map((item) => (
    //                             <a
    //                               key={item.name}
    //                               href={item.href}
    //                               className="-m-3 p-3 block rounded-md hover:bg-gray-800 transition ease-in-out duration-150"
    //                             >
    //                               <p className="text-base font-medium text-gray-300">
    //                                 {item.name}
    //                               </p>
    //                               <p className="mt-1 text-sm text-gray-500">
    //                                 {item.description}
    //                               </p>
    //                             </a>
    //                           ))}
    //                         </div>
    //                       </div>
    //                     </Popover.Panel>
    //                   </Transition>
    //                 </>
    //               )}
    //             </Popover>
    //           </div>
    //         </div>
    //         <div className="hidden md:flex md:items-center md:space-x-6">
    //           <a
    //             href="#"
    //             className="text-sm font-medium text-white hover:text-gray-300"
    //           >
    //             Log in
    //           </a>
    //           <a
    //             href="#_"
    //             class="px-4 py-1 relative rounded-full group text-sm font-medium text-white inline-block"
    //           >
    //             <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-lg from-purple-600 to-blue-500"></span>
    //             <span class="absolute inset-0 w-full h-full transition duration-200 ease-in-out rounded-full bg-gradient-to-br to-purple-600 from-blue-500"></span>
    //             <span class="relative ">Sign up</span>
    //           </a>
    //         </div>
    //       </nav>
    //     </div>

    //     <Transition
    //       as={Fragment}
    //       enter="duration-150 ease-out"
    //       enterFrom="opacity-0 scale-95"
    //       enterTo="opacity-100 scale-100"
    //       leave="duration-100 ease-in"
    //       leaveFrom="opacity-100 scale-100"
    //       leaveTo="opacity-0 scale-95"
    //     >
    //       <Popover.Panel
    //         focus
    //         className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
    //       >
    //         <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
    //           <div className="px-5 pt-4 flex items-center justify-between">
    //             <div>
    //               <img
    //                 className="h-8 w-auto"
    //                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    //                 alt=""
    //               />
    //             </div>
    //             <div className="-mr-2">
    //               <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
    //                 <span className="sr-only">Close menu</span>
    //                 <XIcon className="h-6 w-6" aria-hidden="true" />
    //               </Popover.Button>
    //             </div>
    //           </div>
    //           <div className="pt-5 pb-6">
    //             <div className="px-2 space-y-1">
    //               {navigation.map((item) => (
    //                 <a
    //                   key={item.name}
    //                   href={item.href}
    //                   className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
    //                 >
    //                   {item.name}
    //                 </a>
    //               ))}
    //             </div>
    //             <div className="mt-6 px-5">
    //               <a
    //                 href="#"
    //                 className="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
    //               >
    //                 Start free trial
    //               </a>
    //             </div>
    //             <div className="mt-6 px-5">
    //               <p className="text-center text-base font-medium text-gray-500">
    //                 Existing customer?{" "}
    //                 <a href="#" className="text-gray-900 hover:underline">
    //                   Login
    //                 </a>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </Popover.Panel>
    //     </Transition>
    //   </Popover>
    //   <main>
    //     <div className="max-w-4xl mx-auto text-center py-20 px-4 sm:py-40 sm:px-6 lg:px-8">

    //       {/* <motion.div
    //         initial={{ opacity: 0, y: -20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 0.6, duration: 1 }}
    //       >
    //         <a
    //           href="#_"
    //           class="px-5 py-3 mt-10 relative rounded-full group text-base font-medium text-white inline-block"
    //         >
    //           <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-lg from-purple-600 to-blue-500"></span>
    //           <span class="absolute inset-0 w-full h-full transition duration-200 ease-in-out rounded-full bg-gradient-to-br to-purple-600 from-blue-500"></span>
    //           <span class="relative ">Get started {`>`}</span>
    //         </a>
    //       </motion.div> */}
    //     </div>

    //     {/* <motion.div
    //       className="max-w-7xl mx-auto px-4 sm:px-6 mb-24"
    //       initial={{ opacity: 0, y: 40 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ delay: 0.8, duration: 1 }}
    //       viewport={{ once: true }}
    //     >
    //       <img
    //         className="relative rounded-lg shadow-2xl shadow-fuchsia-800"
    //         src="https://themes.getbootstrap.com/wp-content/uploads/2018/08/bb_bdp_thumbnail.jpg"
    //         alt="App screenshot"
    //       />
    //     </motion.div> */}
    //   </main>

    //   {/*<footer className="" aria-labelledby="footer-heading">
    //     <h2 id="footer-heading" className="sr-only">
    //       Footer
    //     </h2>
    //     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    //        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
    //         <div className="space-y-8 xl:col-span-1">
    //           <img
    //             className="h-10"
    //             src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg"
    //             alt="Company name"
    //           />
    //           <p className="text-gray-500 text-base">
    //             Making the world a better place through constructing elegant
    //             hierarchies.
    //           </p>
    //           <div className="flex space-x-6">
    //             {footernavigation.social.map((item) => (
    //               <a
    //                 key={item.name}
    //                 href={item.href}
    //                 className="text-gray-400 hover:text-gray-500"
    //               >
    //                 <span className="sr-only">{item.name}</span>
    //                 <item.icon className="h-6 w-6" aria-hidden="true" />
    //               </a>
    //             ))}
    //           </div>
    //         </div>
    //         <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
    //           <div className="md:grid md:grid-cols-2 md:gap-8">
    //             <div>
    //               <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
    //                 Solutions
    //               </h3>
    //               <ul role="list" className="mt-4 space-y-4">
    //                 {footernavigation.solutions.map((item) => (
    //                   <li key={item.name}>
    //                     <a
    //                       href={item.href}
    //                       className="text-sm text-gray-400 hover:text-gray-500"
    //                     >
    //                       {item.name}
    //                     </a>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //             <div className="mt-12 md:mt-0">
    //               <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
    //                 Support
    //               </h3>
    //               <ul role="list" className="mt-4 space-y-4">
    //                 {footernavigation.support.map((item) => (
    //                   <li key={item.name}>
    //                     <a
    //                       href={item.href}
    //                       className="text-sm text-gray-400 hover:text-gray-500"
    //                     >
    //                       {item.name}
    //                     </a>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //           </div>
    //           <div className="md:grid md:grid-cols-2 md:gap-8">
    //             <div>
    //               <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
    //                 Company
    //               </h3>
    //               <ul role="list" className="mt-4 space-y-4">
    //                 {footernavigation.company.map((item) => (
    //                   <li key={item.name}>
    //                     <a
    //                       href={item.href}
    //                       className="text-sm text-gray-400 hover:text-gray-500"
    //                     >
    //                       {item.name}
    //                     </a>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //             <div className="mt-12 md:mt-0">
    //               <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
    //                 Legal
    //               </h3>
    //               <ul role="list" className="mt-4 space-y-4">
    //                 {footernavigation.legal.map((item) => (
    //                   <li key={item.name}>
    //                     <a
    //                       href={item.href}
    //                       className="text-sm text-gray-400 hover:text-gray-500"
    //                     >
    //                       {item.name}
    //                     </a>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //        <div className="mt-12 border-t  border-gray-500 pt-8">

    //       </div>
    //     </div>
    //   </footer> */}
    // </div>
  );
}
