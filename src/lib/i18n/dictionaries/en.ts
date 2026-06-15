export const en = {
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Education & Experience",
    achievements: "Achievements",
    roadmap: "Roadmap",
    contact: "Contact",
    hireMe: "Hire Me",
  },
  hero: {
    available: "Web & Mobile Developer Intern / Junior Full-Stack Developer",
    titlePart1: "",
    titlePart2: "Web & Mobile Developer Intern",
    titlePart3: "|",
    titlePart4: "Computer Science Student",
    roles: [
      "Computer Science",
      "Cross-platform Systems",
      "Web Developer",
      "Mobile Developer",
    ],
    description: "Packaging logical thinking into practical technology products, centered on user experience and measured by performance optimization.",
    viewProjects: "View Projects",
    downloadResume: "Download Resume",
    scroll: "Scroll down",
  },
  about: {
    title: "About Me",
    subtitle: "Hello! I'm Khanh Van, a final-year Computer Science student. My journey into Information Technology doesn't just stop at theoretical lectures but is driven by the urge to turn everyday ideas into runnable code.\n\nI am particularly interested in building synchronous system architectures (Omnichannel), where Web and Mobile Apps can communicate seamlessly. To me, a good application needs not only an aesthetic interface but, more importantly, secure, fast-responding, and highly scalable backend logic.",
    goalsTitle: "Career Orientation",
    goalsDesc: "Current Goal: Seeking internship and full-time opportunities at professional tech companies, participating in real projects to practice Agile/Scrum software development processes.\n\nCore Value: The combination of Computer Science logical thinking, cross-platform programming skills (Next.js/Flutter), and a careful, data-sensitive approach.",
    profile: {
      name: "Phan Thi Khanh Van",
      dob: "25/05/2004",
      phone: "+84 393 478 397",
      email: "khanhvank05@gmail.com",
      location: "Ho Chi Minh City, Vietnam",
      labels: {
        name: "Name",
        dob: "Date of Birth",
        phone: "Phone",
        email: "Email",
        location: "Location"
      }
    },
    strengthsTitle: "Personal Strengths",
    steps: [
      {
        title: "System Thinking & Problem Solving",
        description: "Approaching problems systematically, thoroughly analyzing and designing systems before coding.",
      },
      {
        title: "Self-Learning & Research",
        description: "Quickly grasping new technologies and flexibly applying them to real-world problems.",
      },
      {
        title: "Detail-Oriented & Meticulous",
        description: "Strong focus on optimal database design and writing clean code.",
      },
      {
        title: "Team Collaboration",
        description: "Adapting well to collaborative environments, proficient in Git/GitHub for source code management.",
      }
    ]
  },
  skills: {
    title: "Skills Matrix",
    subtitle: "A professional skill matrix built on a Computer Science foundation and practical project experience.",
    categories: [
      {
        title: "Mobile Development",
        proficiency: "Advanced",
        stars: 4,
        core: "Flutter, Dart",
        application: "Cross-platform development (iOS/Android), REST API integration, State management, local data flow optimization."
      },
      {
        title: "Web Development",
        proficiency: "Fluent",
        stars: 4,
        core: "JavaScript, TypeScript, ReactJS, Next.js",
        application: "SEO/Performance optimization with SSR/SSG, building Admin Dashboards, Server-side data flow management."
      },
      {
        title: "Backend & Database",
        proficiency: "Solid",
        stars: 3,
        core: "Java, SQL Server, PostgreSQL, REST API, Prisma ORM",
        application: "Relational database design, complex query optimization, handling data integrity and synchronization constraints."
      },
      {
        title: "Tools & DevOps",
        proficiency: "Proficient",
        stars: 4,
        core: "Git, GitHub, VS Code, Xcode",
        application: "Source code management, Branching, Conflict resolution, and product deployment."
      }
    ]
  },
  projects: {
    title: "Featured Projects",
    subtitle: "Real-world Case Studies from problem analysis to technical solutions.",
    preview: "Open Link",
    highlights: "Features & Results",
    metaLabels: {
      type: "Type",
      duration: "Duration",
      role: "Technologies",
      tech: "Role"
    },
    items: [
      {
        title: "Cakewalk App – Omnichannel Sales System",
        description: "",
        problem: "Context & Challenge: F&B/Bakery businesses struggle to sync data between Websites and in-store staff, leading to inventory discrepancies and missed orders.",
        solution: "Solution: Designed an SQL Server DB with strict constraints. Developed a RESTful API system for data sync. Coded a Flutter Mobile App running smoothly on iOS/Android for staff to quickly create orders.",
        highlights: [
          "Automated inventory deduction upon new orders, reducing inventory discrepancy to 0%.",
          "Optimized complex SQL queries, bringing customer history and revenue report load times under 200ms."
        ],
        tags: ["Flutter", "Dart", "SQL Server", "REST API"],
        meta: {
          type: "Mobile Development Project",
          duration: "2025 – 2026",
          tech: "Flutter, Dart, SQL Server, REST API",
          role: "Lead Developer"
        },
        links: { github: "https://github.com/kvan05/App_CakeWalk", live: undefined }
      },
      {
        title: "Cakewalk – E-Commerce Website",
        description: "",
        problem: "Objective: Build a modern online shopping website with a smooth interface and an intuitive admin dashboard tailored for a bakery.",
        solution: "Architecture: Client-side uses SSR/SSG with Next.js to optimize images and SEO. Orders are processed synchronously on the Server to prevent fraud. Admin dashboard has strict role-based access, order tracking, and CRUD operations.",
        highlights: [
          "Used TypeScript to strictly define data types from DB to UI, reducing runtime errors by 90%.",
          "Prisma ORM with PostgreSQL for smooth Migration management, ensuring accurate User-Product-Order relationships."
        ],
        tags: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL"],
        meta: {
          type: "Personal Project",
          duration: "2025 – 2026",
          tech: "Next.js, TypeScript, Prisma, PostgreSQL",
          role: "Full-stack Developer"
        },
        links: { github: "https://github.com/kvan05/Cakewalk", live: "https://github.com/kvan05/Cakewalk" }
      },
      {
        title: "Recipe Search System",
        description: "A foundational project to get familiar with UI/UX design and search algorithms.",
        problem: "",
        solution: "",
        highlights: [
          "UI design focused on user experience across desktop and mobile devices.",
          "Built advanced filters: exact search by dish name and available ingredients.",
          "Relational database design, optimized SQL queries to improve speed.",
          "Deployed directly and source code managed via GitHub Pages."
        ],
        tags: ["Web Standards", "SQL", "Git"],
        meta: {
          type: "Academic Project",
          duration: "2024 – 2025",
          tech: "Basic Web, SQL, Git",
          role: "Developer"
        },
        links: { github: "https://github.com/kvan05/C-M-_Web", live: "https://github.com/kvan05/C-M-_Web" }
      }
    ]
  },
  experience: {
    title: "Education & Experience",
    subtitle: "A solid academic foundation serving as a premise for solving practical problems.",
    items: [
      {
        year: "2022 - Present",
        title: "🎓 Education: Computer Science",
        description: "Final-year IT student in HCMC. Successfully completed core modules: Data Structures & Algorithms, Database Management Systems (DBMS), Advanced Web Development, Advanced Mobile App Development."
      },
      {
        year: "Practical Experience",
        title: "💼 System Analysis & Software Development",
        description: "Proficient in building Work Breakdown Structures (WBS) to manage Agile progress. Designed ERD systems normalizing data up to 3NF before backend coding. Directly transforming ideas into complete applications."
      }
    ]
  },
  achievements: {
    title: "Evidence Gallery",
    subtitle: "Achievements, certifications, and online resources demonstrating practical capabilities.",
    items: [
      {
        title: "GitHub Repository",
        description: "Where all clean source code is stored, complete with detailed installation READMEs.",
        link: "https://github.com/kvan05",
        linkText: "View GitHub Profile"
      },
      {
        title: "Git & Teamwork Certification",
        description: "Proficient in Git/GitHub, effectively applying Git Flow models for teamwork.",
        link: "",
        linkText: "Verified"
      },
      {
        title: "Professional Network",
        description: "Regularly updating project progress, sharing knowledge, and connecting with tech peers.",
        link: "https://linkedin.com/in/van-k-937641397/",
        linkText: "Connect on LinkedIn"
      }
    ]
  },
  roadmap: {
    title: "3-5 Year Roadmap",
    subtitle: "A plan to upgrade myself and contribute value based on my Computer Science foundation.",
    phases: [
      {
        year: "Year 1 – 2",
        title: "Technology Specialization",
        role: "Full-Stack Engineer",
        description: "Transitioning from Intern to Junior/Mid-level. Optimizing Clean Code skills, applying Design Patterns in Flutter/Next.js. Deep diving into Web/Mobile security (JWT, OAuth2) to protect data integrity."
      },
      {
        year: "Year 3 – 4",
        title: "System Architecture",
        role: "System Architect & DevOps",
        description: "Approaching infrastructure and scalable architectures. Obtaining Cloud certifications (AWS/GCP). Implementing CI/CD automation (GitHub Actions, Docker) and exploring Microservices architecture to optimize workflows."
      },
      {
        year: "Year 5",
        title: "Technical Leadership",
        role: "Tech Lead / Product Owner",
        description: "Acting as a bridge between technical and business requirements. Using system analysis thinking combined with practical programming experience to lead the team and make strategic technology decisions that bring the highest value."
      }
    ]
  },
  statistics: {
    projects: "Major Projects",
    frameworks: "Full-stack Frameworks",
    mobile: "Mobile Platforms",
    databases: "Database Systems"
  },
  whyWork: {
    title: "Why Choose Me",
    subtitle: "Beyond writing code, I bring a system-level perspective and efficient problem-solving skills.",
    items: [
      {
        title: "System Thinking",
        description: "Designing architectures that are scalable, maintainable, and aligned with practical goals."
      },
      {
        title: "Fast Learning",
        description: "Adapting to new technologies and applying them effectively to projects."
      },
      {
        title: "Team Collaboration",
        description: "Valuing communication, supporting teammates, and achieving common goals together."
      },
      {
        title: "Detail-Oriented",
        description: "Ensuring quality from the database layer to every pixel on the UI."
      }
    ]
  },
  techSphere: {
    title: "Core Technology",
    subtitle: "The tools and platforms I use to build products."
  },
  contact: {
    title: "Contact & Connect",
    subtitle: "Thank you for taking the time to review my Portfolio. I am always ready for an interview or a deeper discussion about the technical solutions I can contribute to the company's growth.",
    header: "Ready to work On-site and accompany your project.",
    location: "Ho Chi Minh City, Vietnam",
    sayHello: "Send Email Now"
  },
  footer: {
    designedBy: "Designed and Developed by Khanh Van"
  }
};
