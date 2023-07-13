export const supportServicesCategory = [
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
    name: "Email",
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
];

export const supportServicesData = [
  {
    categoryId: 1,
    servicePlan: [
      {
        plan: "vCPU",
        selfManaged: "2 Cores",
        fullyManaged: "4 Cores",
      },
      {
        plan: "Performance / RAM",
        selfManaged: "1 – 32 GB RAM",
        fullyManaged: "2 – 32 GB RAM",
      },
      {
        plan: "Storage",
        selfManaged: "120 GB SSD",
        fullyManaged: "240 GB SSD",
      },
    ],
  },
  {
    categoryId: 2,
    servicePlan: [
      {
        plan: "Root access",
        selfManaged: true,
        fullyManaged: true,
      },
      {
        plan: "cPanel/WHM",
        selfManaged: "Optional",
        fullyManaged: "Optional",
      },
      {
        plan: "Operating Systems	",
        selfManaged: "CentOS, Ubuntu or Windows Servert",
        fullyManaged: "CentOS or Windows Server",
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
      {
        plan: "Maximum POP/IMAP connections",
        selfManaged: "Unlimited",
        fullyManaged: "Unlimited",
      },
    ],
  },
  {
    categoryId: 4,
    servicePlan: [
      {
        plan: "Centralized DDoS Protection	",
        selfManaged: true,
        fullyManaged: true,
      },
      {
        plan: "Weekly offsite backups	",
        selfManaged: true,
        fullyManaged: true,
      },
      {
        plan: "Create manual backups	",
        selfManaged: true,
        fullyManaged: true,
      },
      {
        plan: "Create scheduled backups	",
        selfManaged: true,
        fullyManaged: true,
      },
    ],
  },
  {
    categoryId: 6,
    servicePlan: [
      {
        plan: "Premium support	",
        selfManaged: true,
        fullyManaged: true,
      },
      {
        plan: "Server monitoring and remediation	",
        selfManaged: true,
        fullyManaged: true,
      },
    ],
  },
  {
    categoryId: 5,
    servicePlan: [
      {
        plan: "Network uptime guarantee	",
        selfManaged: true,
        fullyManaged: true,
      },
      {
        plan: "US-based Data Centers	",
        selfManaged: true,
        fullyManaged: true,
      },
      {
        plan: "Fully redundant network	",
        selfManaged: true,
        fullyManaged: true,
      },
      {
        plan: "Multiple bandwidth providers	",
        selfManaged: "AboveNet, AT&T, Comcast, Global crossing, Level (3), NTT",
        fullyManaged:
          "AboveNet, AT&T, Comcast, Global crossing, Level (3), NTT",
      },
    ],
  },
];
