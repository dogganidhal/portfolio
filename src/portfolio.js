/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nidhal's Portfolio",
  description:
    "Full stack developer, with a special attention to software architecture and distributed systems. Likes to participate throughout the full project life cycle, from ideas to live products. Heavily invested in containerization with Docker and Kubernetes, ArgoCD...",
  og: {
    title: "Nidhal Dogga's Portfolio",
    type: "website",
    url: "https://ndogga.com",
  },
};

//Home Page
const greeting = {
  title: "Nidhal Dogga",
  logo_name: "NDogga",
  subTitle:
    "Full stack developer, with a special attention to software architecture and distributed systems. Likes to participate throughout the full project life cycle, from ideas to live products. Heavily invested in containerization with Docker and Kubernetes, ArgoCD...",
  resumeLink: "/static/resume.pdf",
  portfolio_repository: "https://github.com/dogganidhal/portfolio",
  githubProfile: "https://github.com/dogganidhal",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/dogganidhal",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dogganidhal/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:dogga.nidhal@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/DoggaNidhal",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Backend & APIs",
      fileName: "BackendBuildingBlocksImg",
      skills: [
        "⚡ Build simple monolithic and complexe microservices backends",
        "⚡ Build REST and GraphQL APIs",
        "⚡ Establish sync and async communications between web components",
        "⚡ Write integration, end 2 end and non regression tests",
      ],
      softwareSkills: [
        {
          skillName: "Spring",
          fontAwesomeClassname: "logos:spring-icon",
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos:kotlin-icon",
        },
        {
          skillName: "REST API",
          fontAwesomeClassname: "eos-icons:api",
          style: {
            color: "#333333",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "logos:graphql",
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "logos:rabbitmq-icon",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs",
        },
        {
          skillName: "Nest.js",
          fontAwesomeClassname: "logos:nestjs",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "vscode-icons:file-type-mongo",
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "logos:hibernate",
        },
      ],
    },
    {
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux and Next.js",
        "⚡ Developing mobile applications using Flutter, React Native or native mobile apps",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "logos:sass",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "logos:react",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "logos:angular-icon",
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "logos:nextjs-icon",
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "logos:typescript-icon",
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos:flutter",
        },
        {
          skillName: "iOS Swift",
          fontAwesomeClassname: "logos:swift",
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "flat-color-icons:android-os",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Pipeline automation and customization with Jenkins and/or Github Actions",
        "⚡ Container orchestration with Kubernetes, Helm and ArgoCD",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
        },
        {
          skillName: "Helm",
          fontAwesomeClassname: "logos:helm",
        },
        {
          skillName: "Argo",
          fontAwesomeClassname: "logos:argo",
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
        },
        {
          skillName: "Github & Github actions",
          fontAwesomeClassname: "logos:github-icon",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitk.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Apprenticeship and internship",
  description:
    "I have worked with different types of projects as Full-stack developer, with a special attention to software architecture and automation. Trying to get into open source world as well",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Full-Stack developer",
      company: "Bridge",
      company_url: "https://bridgeapi.io",
      logo_path: "bridge_logo.png",
      duration: "June 2020 - PRESENT",
      location: "Paris, France",
      description: `
        <ul>
          <li>Migrate existing services to Java 17</li>
          <li>Develop and maintain payment solution backend with Java et Spring Boot</li>
          <li>Remaking aging frontends with React.js</li>
          <li>Monitoring using SumoLogic and alerting using OpsGenie</li>
          <li>Iterate in agile with ShapeUp</li>
        </ul>
      `,
      color: "#041c2c",
    },
    {
      title: "CTO & Co-Founderr",
      company: "Chiro",
      company_url: "https://chiro-app.com",
      logo_path: "chiro_logo.png",
      duration: "Oct 2019 - PRESENT",
      location: "Paris, France",
      description: `
        <ul>
          <li>Validate app concept with a prototype using Firebase and Flutter</li>
          <li>Implement final solution with microservices, GraphQL, Kotlin and Spring boot</li>
          <li>Deployed on AWS EKS with Helm and ArgoCD</li>
          <li>Implement custom Jenkins pipeline with Groovy</li>
          <li>Async messaging and CQRS using RabbitMQ</li>
          <li>Integration tests using RestAssured, JUnit5 and SpringBootTest</li>
        </ul>
      `,
      color: "#fd4574",
    },
    {
      title: "Backend Developer",
      company: "BNP Paribas",
      company_url: "https://bnpparibas.com",
      logo_path: "bnpparibas_logo.png",
      duration: "Sep 2019 - Aug 2021",
      location: "Paris, France",
      description: `
        <ul>
          <li>Study migrating legacy monoliths to microservices</li>
          <li>Automate delivery with Jenkins and Ansible</li>
          <li>Implement non regression tests using Netty</li>
          <li>Evaluate workflow engines (Camunda, Conductor, Agro workflow ...)</li>
        </ul>
      `,
      color: "#fc1f20",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "nidhal_avatar.png",
    description:
      "Always available to discuss new adventures, or software engineering in general. Have an idea on how can we collaborate together ? Feel free to say hi.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Sharing my personal opinions and feedback on different subjects around software development in general.",
    link: "https://blog.ndogga.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
