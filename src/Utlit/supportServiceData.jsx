export const supportServicesCategory= [
  {
    categoryId: 1,
    name: "Hardware",
  },
  {
    categoryId: 2,
    name: "VPS Features",
  },
  {
    categoryId: 3,
    name: "email",
  },
  {
    categoryId: 4,
    name: "Security",
  },
  {
    categoryId: 5,
    name: "Network",
  },
  {
    categoryId: 6,
    name: "Support",
  },
]

export const supportServicesData = [
  {
    categoryId: 1,
    servicePlan: [
      {
        plan: "vCPU",
        selfManaged: "2 Cores",
        fullyManaged: "4 Cores",
      },
    ],
  },
  {
    categoryId: 2,
    servicePlan: [
      {
        plan: "Root access",
        selfManaged: true,
        fullyManaged: "4 Cores",
      },
    ],
  },
  {
    categoryId: 3,
    servicePlan: [
      {
        plan: "Maximum outgoing emails",
        selfManaged: "Unlimited",
        fullyManaged: "Unlimited",
      },
    ],
  },
];
