export interface SimpleSublink {
  title: string;
  description: string;
  href: string;
}

export interface ProductMegaMenu {
  featuredProduct: {
    name: string;
    description: string;
    href: string;
    images: string[];
  };
  otherProducts: {
    name: string;
    description: string;
    href: string;
  }[];
  footerLink: { name: string; href: string };
}

export interface SolutionCategory {
  name: string;
  href: string;
  description: string;
  isExternal?: boolean;
  content: {
    title: string;
    description: string;
    href: string;
  }[];
}

export interface SolutionMegaMenu {
  categories: SolutionCategory[];
  footerLink: { name: string; href: string };
}

export type NavLinkType = {
  name: string;
  href: string;
  sublinks?: SimpleSublink[];
  megaMenu?: ProductMegaMenu | SolutionMegaMenu;
};

export const navlinks: NavLinkType[] = [
  { name: "About Us", href: "/about", sublinks: [] },
  {
    name: "Products",
    href: "/products",
    megaMenu: {
      featuredProduct: {
        name: "Curiosity",
        description:
          "An autonomous research boat with sensors for water quality detection and real-time data visualization.",
        href: "/products/curiosity",
        images: ["/curiosity-1.jpg", "/curiosity-2.jpg", "/curiosity-3.jpg"],
      },
      otherProducts: [
        {
          name: "Explorer",
          description:
            "An autonomous surveillance robot with obstacle detection and avoidance.",
          href: "/products/explorer",
        },
        {
          name: "Autonomous Mobile Robots",
          description:
            "Line-following and obstacle-avoiding robots designed for warehouse and industrial automation.",
          href: "/products/amr",
        },
      ],
      footerLink: { name: "Learn More", href: "/products" },
    },
  },

  {
    name: "Solutions",
    href: "/solutions",
    megaMenu: {
      categories: [
        {
          name: "Curiosity",
          href: "/projects/curiosity",
          description:
            "An autonomous research boat for industrial and environmental use",
          content: [
            {
              title: "Water Quality Detection",
              description:
                "Equipped with sensors to measure water pH, turbidity, and pollutants",
              href: "/projects/curiosity/water-quality",
            },
            {
              title: "Dashboard Visualization",
              description:
                "Data dashboard for real-time visualization of collected metrics",
              href: "/projects/curiosity/dashboard",
            },
          ],
        },
        {
          name: "Explorer",
          href: "/projects/explorer",
          description: "An autonomous surveillance bot with smart navigation",
          content: [
            {
              title: "Surveillance",
              description:
                "Designed for patrolling and monitoring restricted zones",
              href: "/projects/explorer/surveillance",
            },
            {
              title: "Obstacle Detection & Avoidance",
              description:
                "Equipped with sensors for safe and intelligent navigation",
              href: "/projects/explorer/obstacle-avoidance",
            },
          ],
        },
        {
          name: "Autonomous Mobile Robots",
          href: "/projects/amr",
          description:
            "Line-following and obstacle-avoiding robots for industrial use",
          content: [
            {
              title: "Swarm Navigation",
              description:
                "Multiple robots coordinate on the same map without collision",
              href: "/projects/amr/swarm",
            },
            {
              title: "Warehouse Applications",
              description:
                "Automating transport and logistics within warehouses",
              href: "/projects/amr/warehouse",
            },
          ],
        },
        {
          name: "Robotic Arm",
          href: "/projects/robotic-arm",
          description:
            "Programmable robotic arm for manipulation and automation tasks",
          content: [
            {
              title: "Industrial Applications",
              description:
                "Performing tasks like pick-and-place, assembly, and automation",
              href: "/projects/robotic-arm/industrial",
            },
            {
              title: "Research & Learning",
              description:
                "Used as a platform for robotics education and experimentation",
              href: "/projects/robotic-arm/research",
            },
          ],
        },
        {
          name: "Robotic Head",
          href: "/projects/robotic-head",
          description:
            "An ongoing project to design and build an expressive robotic head",
          content: [
            {
              title: "Human-Robot Interaction",
              description:
                "Developing expressive responses for better communication",
              href: "/projects/robotic-head/hri",
            },
            {
              title: "AI Integration",
              description:
                "Embedding AI for speech, facial recognition, and adaptive behavior",
              href: "/projects/robotic-head/ai",
            },
          ],
        },
      ],
      footerLink: { name: "Explore All Solutions", href: "/solutions" },
    },
  },
  { name: "Blog", href: "/blog" },
];
