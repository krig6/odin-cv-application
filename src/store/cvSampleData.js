export const getSampleCv = () => ({
  personal: {
    jobTarget: "Global Peacekeeper",
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@starkindustries.dev",
    phone: "+1 555 IRON MAN",
    linkedin: "linkedin.com/in/tonystark",
    github: "github.com/ironman",
    portfolio: "stark-industries.global",
    postalCode: "10001",
    cityState: "New York, Stark Tower",
    country: "United States"
  },

  summary:
    "Engineer specializing in high-risk, high-reliability systems operating under global scale pressure. Experience includes autonomous systems design, rapid response infrastructure, and real-time control interfaces used in critical defense scenarios.",

  skills: [
    {
      id: crypto.randomUUID(),
      category: "Global Threat Response Systems",
      entries: [
        { id: crypto.randomUUID(), name: "Neutralized extraterrestrial invasion in urban environment" },
        { id: crypto.randomUUID(), name: "Designed multi-suit deployment architecture for global defense operations" },
        { id: crypto.randomUUID(), name: "Coordinated distributed systems during planetary scale conflict events" }
      ]
    },
    {
      id: crypto.randomUUID(),
      category: "Autonomous Intelligence Systems",
      entries: [
        { id: crypto.randomUUID(), name: "Engineered AI systems for real time strategic analysis" },
        { id: crypto.randomUUID(), name: "Deployed adaptive decision engines under combat conditions" },
        { id: crypto.randomUUID(), name: "Maintained system integrity during high volatility events" }
      ]
    },
  ],

  projects: [
    {
      id: crypto.randomUUID(),
      name: "Arc Reactor Control System",
      techStack: "React, Real Time Systems, High Energy Interfaces",
      live: "classified",
      repo: "restricted access",
      descriptions: [
        {
          id: crypto.randomUUID(),
          text: "Developed interface for stabilizing high output energy core systems"
        },
        {
          id: crypto.randomUUID(),
          text: "Implemented safeguards for continuous operation under extreme load conditions"
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      name: "Global Defense Coordination Network",
      techStack: "Distributed Systems, Real Time Communication, React",
      live: "earth-defense-network.global",
      repo: "shield clearance required",
      descriptions: [
        {
          id: crypto.randomUUID(),
          text: "Built coordination platform for synchronized global defense operations"
        },
        {
          id: crypto.randomUUID(),
          text: "Enabled real time multi unit response across multiple continents"
        }
      ]
    }
  ],

  work: [
    {
      id: crypto.randomUUID(),
      company: "Stark Industries",
      position: "Chief Systems Architect",
      period: "2008 - 2012",
      descriptions: [
        {
          id: crypto.randomUUID(),
          text: "Led development of advanced defense systems deployed in global conflict scenarios"
        },
        {
          id: crypto.randomUUID(),
          text: "Engineered autonomous response technologies for large scale threat mitigation"
        }
      ]
    }
  ],

  education: [
    {
      id: crypto.randomUUID(),
      university: "Independent Engineering Research",
      degree: "Advanced Systems Engineering and Applied Physics",
      period: "2008 - Present",
      descriptions: [
        {
          id: crypto.randomUUID(),
          text: "Specialized in high energy systems, autonomous robotics, and complex system design"
        },
        {
          id: crypto.randomUUID(),
          text: "Applied engineering principles in real world high pressure environments"
        }
      ]
    }
  ]
});
