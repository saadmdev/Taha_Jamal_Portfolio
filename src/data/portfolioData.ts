export interface ExperienceItem {
  id: string;
  seq: string;
  company: string;
  location: string;
  role: string;
  period: string;
  type: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
  role: string;
  badge: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  status: string;
  description: string;
  location?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  organization: string;
  date: string;
  details: string;
}

export const PERSONAL_INFO = {
  name: "Muhammad Taha Jamal Malik",
  firstName: "Muhammad Taha",
  lastName: "Jamal Malik",
  shortName: "Taha Malik",
  eyebrow: "BUSINESS DEVELOPMENT · MARKETING · DESIGN",
  heroIntro:
    "Business graduate with experience across business development, e-commerce branding, and visual design.",
  heroSupporting:
    "I bring together clear communication, thoughtful design, and an understanding of business needs.",
  availability: "Available for new opportunities",
  email: "mavicpro1243@gmail.com",
  phone: "+92 333 5729199",
  location: "Rawalpindi, Pakistan",
  portraitPath: "/taha-portrait.jpg",
  linkedinUrl: "https://www.linkedin.com/in/m-taha-jamal-229908310/",
  aboutLead:
    "Business and creativity have always been two sides of the same interest for me. My experience spans business development in hospitality and visual branding for e-commerce businesses, where I have worked on understanding people, communicating ideas, and creating work that feels consistent with a brand's identity.",
  aboutExtended:
    "Graduating with a BBA from Foundation University (2026), I combine structured business thinking with hands-on graphic design. Whether coordinating client relationships or creating brand assets, my focus is on clarity, dependable execution, and genuine commercial value.",
  pillars: [
    {
      title: "Business Development",
      description:
        "Building professional connections, managing client outreach, and coordinating between departments in corporate hospitality."
    },
    {
      title: "E-Commerce Branding",
      description:
        "Designing marketing visuals, storefront assets, and product catalog layouts using Adobe Photoshop and Illustrator."
    },
    {
      title: "Communication & Coordination",
      description:
        "Applying BBA fundamentals to customer dealing, project time management, and active collaboration."
    }
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "signature-rotana",
    seq: "01",
    company: "Signature Rotana Hotels",
    location: "Islamabad, Pakistan",
    role: "Business Development Intern",
    period: "June 2026 – August 2026",
    type: "Internship",
    summary:
      "Supported senior management with business development activities, institutional networking, and guest relations in luxury hospitality.",
    responsibilities: [
      "Supported business development and market outreach for corporate client accounts.",
      "Built professional connections and represented hotel services in corporate networking forums.",
      "Coordinated cross-departmental communication between sales and operational teams.",
      "Managed time-sensitive project schedules and dependable client follow-ups."
    ],
    skills: ["Business Development", "Networking", "Client Relations", "Time Management", "Project Coordination"]
  },
  {
    id: "al-fateen",
    seq: "02",
    company: "Al Fateen E-Commerce",
    location: "Pakistan",
    role: "Graphic Designer",
    period: "August 2024 – September 2024",
    type: "Design Role",
    summary:
      "Created marketing visuals and brand identity assets for active retail storefronts and promotional campaigns.",
    responsibilities: [
      "Designed marketing visuals, promotional social banners, and digital storefront graphics.",
      "Utilized Adobe Photoshop and Illustrator to produce clean, consistent brand collateral.",
      "Maintained website visual content, digital banners, and product catalog presentations.",
      "Coordinated revisions based on management reviews and customer feedback."
    ],
    skills: ["Adobe Photoshop", "Adobe Illustrator", "E-Commerce Branding", "Website Content", "Layout Design"]
  }
];

export const SELECTED_WORK: ProjectItem[] = [
  {
    id: "pamposh",
    title: "Pamposh",
    category: "E-Commerce Branding & Product Presentation",
    year: "2024",
    tagline: "Product catalog presentation & promotional banners",
    description:
      "Structured product catalog presentation and promotional banners for e-commerce retail, emphasizing crisp typography and clean visual hierarchy.",
    deliverables: ["Product Catalog Layout", "Promotional Banners", "Visual Assets"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    role: "Graphic Designer (via Al Fateen E-Commerce)",
    badge: "Documented Brand Reference"
  },
  {
    id: "lazzaro",
    title: "Lazzaro",
    category: "Digital Marketing & Storefront Design",
    year: "2024",
    tagline: "Storefront header graphics & social media campaign assets",
    description:
      "Storefront header graphics, social media campaign creatives, and digital marketing assets designed for customer engagement and visual consistency.",
    deliverables: ["Storefront Headers", "Social Media Creatives", "Campaign Ads"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    role: "Graphic Designer (via Al Fateen E-Commerce)",
    badge: "Documented Brand Reference"
  },
  {
    id: "dekoro",
    title: "Dekoro",
    category: "Lifestyle E-Commerce & Merchandising",
    year: "2024",
    tagline: "Lifestyle catalog layouts & promotional web banners",
    description:
      "Lifestyle e-commerce catalog layouts and promotional web banners created to establish a clean modern aesthetic and effortless browsing experience.",
    deliverables: ["Digital Catalog Design", "Web Banners", "Visual Layouts"],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
    role: "Graphic Designer (via Al Fateen E-Commerce)",
    badge: "Documented Brand Reference"
  },
  {
    id: "cgk-limited",
    title: "CGK Limited",
    category: "Corporate Collateral & Marketing Materials",
    year: "2024",
    tagline: "Corporate marketing collateral & digital presentations",
    description:
      "Corporate marketing collateral, digital presentation materials, and promotional visual assets developed to reinforce brand communication across touchpoints.",
    deliverables: ["Corporate Collateral", "Digital Presentations", "Marketing Creatives"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    role: "Graphic Designer (via Al Fateen E-Commerce)",
    badge: "Documented Brand Reference"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Foundation University School of Science and Technology",
    degree: "Bachelor of Business Administration (BBA)",
    period: "2022 – 2026",
    status: "Graduated 2026",
    location: "Rawalpindi / Islamabad",
    description:
      "Undergraduate curriculum in strategic business administration, marketing strategy, organizational communication, market analysis, and project management."
  },
  {
    institution: "UNIPLACE",
    degree: "General Equivalency Diploma (GED)",
    period: "June 2023 – August 2023",
    status: "Completed",
    location: "Islamabad",
    description:
      "Standardized secondary certification evaluating analytical thinking, quantitative reasoning, and written communication."
  },
  {
    institution: "Army Public School Ordinance Road",
    degree: "FSc Pre-Engineering",
    period: "2019 – 2021",
    status: "Completed",
    location: "Rawalpindi",
    description:
      "Higher secondary education concentrating on mathematics, physics, and disciplined problem-solving methodologies."
  }
];

export const SKILL_GROUPS: SkillCategory[] = [
  {
    title: "Business & Marketing",
    skills: [
      "Business Development",
      "Networking",
      "Digital Marketing",
      "Social Media Content",
      "Brand Identity",
      "Market Research",
      "Project Coordination",
      "Customer Relationship Management"
    ]
  },
  {
    title: "Design",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Visual Branding",
      "Layout Design"
    ]
  },
  {
    title: "Productivity",
    skills: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Website Content Management",
      "Time Management"
    ]
  },
  {
    title: "Professional",
    skills: [
      "Communication",
      "Customer Dealing",
      "Multitasking",
      "Creativity",
      "Active Listening",
      "Teamwork",
      "Work Efficiency"
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Appreciation Certificate — Graduation Ceremony",
    organization: "Foundation University School of Science and Technology",
    date: "2025 – 2026",
    details:
      "Awarded in official recognition of dedicated logistical coordination and event support during the university graduation ceremony."
  },
  {
    title: "Appreciation Certificate — FYP Ceremony",
    organization: "Foundation University School of Science and Technology",
    date: "2025 – 2026",
    details:
      "Honored by department leadership for event coordination, student liaison support, and assistance during the Final Year Project exhibition."
  },
  {
    title: "Certificate in Graphic Designing",
    organization: "Azad Chaiwala Institute",
    date: "August 2024 – October 2024",
    details:
      "Hands-on professional training program focusing on Adobe Photoshop, Adobe Illustrator, brand collateral, and commercial visual workflows."
  },
  {
    title: "General Equivalency Diploma (GED)",
    organization: "UNIPLACE",
    date: "June 2023 – August 2023",
    details:
      "Standardized secondary completion credential verifying high-level analytical, mathematical, and written communication standards."
  }
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];
