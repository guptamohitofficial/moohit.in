import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Mohit",
  lastName: "Gupta",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "CEO & Technology Leader",
  avatar: "/images/avatar.png",
  email: "moohitgupta1@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to my Newsletter</>,
  description: (
    <>
      I share insights about technology leadership, startup experiences, and the intersection of
      engineering and product development, focusing on building scalable solutions that make a real impact.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/moohitgupta",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/moohit-gupta/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between technology and business impact</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Learn Place</strong></>,
    href: "/work/learn-place-edtech-platform",
  },
  subline: (
    <>
      I'm a technology leader and entrepreneur with over 4 years of experience in building and scaling
      <br /> successful products, currently leading WorksNet with a flat team structure.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/mohit-worksnet/quick-call",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        With over 4 years of experience as a founding CTO and consultant, I specialize in bringing ideas to market
        using Django, Node.js, React.js, and Next.js. My journey spans founding two startups, leading technology
        teams, and delivering solutions across education and healthcare domains. I believe in creating technology
        that solves real-world problems and makes a positive difference in people's lives.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "WorksNet",
        timeframe: "Apr 2024 - Present",
        role: "CEO",
        achievements: [
          "Leading a flat organization of 5 team members, providing comprehensive consulting services in architecture, management, and development of internal tools, SaaS, and AI products for global clients. Our team specializes in delivering end-to-end solutions that drive business growth and operational efficiency.",
          "Driving innovation in client solutions through strategic technology consulting and hands-on leadership in product development and system architecture. We focus on creating scalable, maintainable, and future-proof solutions that align with business objectives.",
          "Establishing and maintaining strong client relationships through transparent communication and consistent delivery of high-quality solutions. Our approach combines technical expertise with business acumen to ensure maximum value for our clients.",
          "Implementing agile methodologies and best practices across all projects, ensuring efficient project delivery and continuous improvement. We maintain a strong focus on code quality, documentation, and knowledge sharing within the team."
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "WorksNet Consulting",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Learn Place",
        timeframe: "Jan 2024 - Nov 2024",
        role: "Founder - CEO - CTO",
        achievements: [
          "Built and led development, product, and marketing teams from scratch, successfully implementing our technology in 5 major schools, impacting 2,500+ students and 75+ teachers in just 3 months. The platform revolutionized how schools manage their educational content and administrative tasks.",
          "Researched and curated copyright-free content for teachers and developed a Chrome extension that streamlined government compliance tasks from weeks to days. This innovation significantly reduced administrative burden and improved compliance accuracy.",
          "Architected and launched a multi-tenant scalable product for web and mobile platforms with infrastructure supporting 1,000+ schools. The system was designed with future growth in mind, incorporating advanced features like real-time collaboration and analytics.",
          "Implemented a comprehensive content management system that enabled teachers to create, share, and manage educational materials efficiently. The system included features for version control, collaboration, and content distribution.",
          "Developed and executed a successful go-to-market strategy that resulted in rapid adoption by educational institutions. This included creating compelling marketing materials, conducting product demonstrations, and building relationships with key stakeholders."
        ],
        images: [],
      },
      {
        company: "Slooze",
        timeframe: "Feb 2025 - Apr 2025",
        role: "Engineering Manager - Platform",
        achievements: [
          "Led the development and architecture of a scalable supply chain management platform, designing for future microservice detachment and system scalability. The platform was built to handle complex supply chain operations across multiple regions and business units.",
          "Managed cross-functional teams to deliver high-performance solutions while maintaining system reliability and scalability. Implemented best practices in code quality, testing, and deployment processes.",
          "Established and maintained technical standards and best practices across the platform team. This included implementing code review processes, documentation requirements, and performance monitoring systems.",
          "Collaborated with product and business teams to define technical requirements and ensure alignment with business objectives. Led the technical planning and execution of major platform features and improvements."
        ],
        images: [],
      },
      {
        company: "Consulting and Contracting",
        timeframe: "Oct 2020 - Mar 2024",
        role: "Technical Consultant",
        achievements: [
          "Led the optimization of API response time from 60+ sec to under 3 sec, serving 20,000+ daily active users while reducing ETL and Data pipeline costs from $10,000 to $500. This optimization significantly improved user experience and reduced operational costs.",
          "Architected and implemented messaging queues and real-time data communication systems processing over 100K IoT device events daily. The system was designed for high availability and fault tolerance, ensuring reliable data processing and delivery.",
          "Developed desktop apps for comprehensive employee monitoring and reporting, and engineered Google Form-like web forms with analytics services for improved data interaction. These solutions streamlined data collection and analysis processes.",
          "Implemented automated testing and continuous integration pipelines that improved code quality and reduced deployment time. This included setting up automated testing frameworks, code quality checks, and deployment automation.",
          "Provided technical leadership and mentorship to development teams, helping them adopt best practices and improve their technical capabilities. This included conducting code reviews, providing technical guidance, and sharing knowledge through documentation and training sessions."
        ],
        images: [],
      },
      {
        company: "Haki Care",
        timeframe: "Dec 2020 - Aug 2021",
        role: "Co-Founder - CTO",
        achievements: [
          "Founded and launched MVP with Django REST API and React PWA front end, partnering with a leading NGO in eldercare to make healthcare accessible. The platform was designed to connect elderly patients with healthcare providers efficiently.",
          "Developed health data analytics with vital monitoring systems, improving doctor understanding by 2x and enhancing patient care. The system included features for real-time monitoring, data visualization, and automated alerts.",
          "Implemented secure data handling and privacy measures to ensure compliance with healthcare regulations. This included encryption, access controls, and audit logging systems.",
          "Created an intuitive user interface that made it easy for elderly users to access healthcare services. The design focused on accessibility, simplicity, and ease of use."
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Bachelor's Degree in Computer Science Engineering",
        description: <>Truba Institute Of Engineering and Information Technology, Bhopal, MP (2017-2021)</>,
      },
      {
        name: "Technical Education",
        description: <>Self-taught engineer with focus on system architecture and scalable solutions.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Backend Development",
        description: <>Expertise in Python, Django, Node.js, and building scalable microservices architecture.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Backend Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Frontend & Full Stack",
        description: <>Proficient in React.js, Next.js, and building modern web applications with responsive design.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Frontend Development",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cloud & DevOps",
        description: <>Expertise in Docker, Kubernetes, AWS, and Azure for efficient deployment and infrastructure management.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Cloud Infrastructure",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Sharing my journey in technology and leadership...",
  description: `Read about my experiences and insights in technology, entrepreneurship, and product development`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `My technology and leadership projects`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
