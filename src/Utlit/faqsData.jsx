import dollar from "../assets/icons/dollar.png";
import favorite from "../assets/icons/favorite.png";
import lock from "../assets/icons/lock.png";
import planetEarth from "../assets/icons/planet-earth.png";

export const faqsCategory = [
  {
    categoryId: 1,
    icon: planetEarth,
    title: "General inquiries",
    subTitle: "New around here? Start with the basics.",
  },
  {
    categoryId: 2,
    icon: favorite,
    title: "VPS Hosting Features",
    subTitle: "Dive deeper into HostX's servers features.",
  },
  {
    categoryId: 3,
    icon: lock,
    title: "Permissions & Privacy",
    subTitle: "We take security & privacy seriously.",
  },
  {
    categoryId: 4,
    icon: dollar,
    title: "Pricing & Plans",
    subTitle: "Learn about plans, payments, and more.",
  },
];

export const faqsData = [
  {
    categoryId: 1,
    icon: planetEarth,
    title: "General inquiries",
    subTitle: "New around here? Start with the basics.",
    info: [
      {
        name: "What is a Virtual Private Server (VPS)?",
        details:
          "A Virtual Private Server is a server divided into fully separate hosting environments. When you have VPS hosting, one of those environments is completely dedicated to you. That means you don't have to share resources (such as RAM or CPU) with other customers and you're less likely to be impacted by their behavior.",
      },
      {
        name: "What about VPS vs. Dedicated?",
        details:
          "Another great question. A dedicated server is a server that's literally dedicated to you and no one else, which means the world (or in this case, server) is your oyster. Learn more about the benefits of VPS and Dedicated here.",
      },
    ],
  },
  {
    categoryId: 2,
    icon: favorite,
    title: "VPS Hosting Features",
    subTitle: "Dive deeper into HostX's servers features.",
    info: [
      {
        name: "",
        details: "",
      },
    ],
  },
  {
    categoryId: 3,
    icon: lock,
    title: "Permissions & Privacy",
    subTitle: "We take security & privacy seriously.",
    info: [
      {
        name: "",
        details: "",
      },
    ],
  },
  {
    categoryId: 4,
    icon: dollar,
    title: "Pricing & Plans",
    subTitle: "Learn about plans, payments, and more.",
    info: [
      {
        name: "",
        details: "",
      },
    ],
  },
];
