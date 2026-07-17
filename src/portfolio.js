/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rohan Kondlapudi",
  title: "Hey There, I'm Rohan",
  subTitle: emoji(
    "CS student at UMass Amherst working across quantum computing, computer vision, graphics, and GPU programming. Currently a Google Summer of Code contributor."
  ),
  resumeLink: "", // TODO: add a shareable link to your resume (e.g. Google Drive/GitHub) — set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/brohan-byte",
  linkedin: "https://linkedin.com/in/sai-rohan-reddy-kondlapudi-0373032a2",
  gmail: "sairohanredd@umass.edu",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CS STUDENT FOCUSED ON COMPUTER VISION, GRAPHICS, AND SYSTEMS PROGRAMMING",
  skills: [
    emoji(
      "⚡ Build computer vision and graphics pipelines — monocular SLAM, 3D Gaussian Splatting, and real-time CUDA rasterization"
    ),
    emoji(
      "⚡ Develop scientific computing tooling in Julia for quantum error correction and noise simulation"
    ),
    emoji(
      "⚡ Design distributed, cloud-native backend systems with microservices, gRPC, and Kafka"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Massachusetts Amherst",
      // logo: require("./assets/images/umassLogo.png"), // TODO: add a UMass logo image at this path
      subHeader: "B.S. in Computer Science, GPA 3.98",
      duration: "Expected May 2028",
      desc: "Coursework and research spanning quantum computing, computer vision, systems, and algorithms. Serving as a Supplemental Instruction Leader for a large Data Structures course.",
      descBullets: [
        "Research Assistant in the Krastanov Lab, contributing to QuantumClifford.jl",
        "Google Summer of Code contributor with The Julia Language"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Computer Vision / Graphics", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Systems / Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Scientific Computing (Julia)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "Krastanov Lab, UMass Amherst",
      companylogo: require("./assets/images/umass.png"), // TODO: add a UMass logo image at this path
      date: "September 2025 – Present",
      desc: "Building and advancing quantum noise simulation and error-correction tooling in the Julia ecosystem, used by researchers at the NSF Engineering Research Center for Quantum Networks."
    },
    {
      role: "Google Summer of Code Contributor",
      company: "The Julia Language",
      companylogo: require("./assets/images/gsoc.png"),
      date: "May 2026 – Present",
      desc: "Building a Julia framework to discover optimal entanglement purification protocols for Quantum Communication Networks."
    },
    {
      role: "Supplemental Instruction Leader",
      company: "Learning Resource Center, UMass Amherst",
      companylogo: require("./assets/images/lrc.jpg"),
      date: "January 2026 – Present",
      desc: "Lead weekly review sessions and serve as academic support for a large Data Structures course."
    },
    {
      role: "Web Development Intern",
      company: "Techouts",
      companylogo: require("./assets/images/techout.png"),
      date: "May 2023 – July 2023",
      desc: "Built a full-stack e-commerce platform with Spring Boot, React, and MySQL, including authentication and payment integration."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  title: "Open Source",
  subtitle:
    "Contributions to quantum computing and scientific software in the Julia ecosystem.",

  contributions: [
    {
      title: "Google Summer of Code 2026",
      organization: "The Julia Language",
      description:
        "Selected as a Google Summer of Code contributor to develop optimization algorithms for discovering high-fidelity Bell-state distillation protocols under realistic quantum hardware constraints.",

      
    },

    {
      title: "QuantumClifford.jl",
      organization: "QuantumSavory",
      description:
        "Developed extensible circuit-noise infrastructure, including gate, measurement, reset, and idle-noise simulation APIs for efficient stabilizer circuit simulation.",

      links: [
        {
          name: "View Repository",
          url: "https://github.com/QuantumSavory/QuantumClifford.jl"
        }
      ]
    },

    {
      title: "BPGates.jl",
      organization: "QuantumSavory",
      description:
        "Implemented Bell-preserving noise models and simulation infrastructure for scalable entanglement purification and quantum network simulations.",

      links: [
        {
          name: "View Repository",
          url: "https://github.com/QuantumSavory/BPGates.jl"
        }
      ]
    },

    {
      title: "QEPOptimize.jl",
      organization: "QuantumSavory",
      description:
        "Built an optimization framework that searches the space of Bell-distillation circuits while evaluating protocol performance under configurable quantum noise models.",

      links: [
        {
          name: "View Repository",
          url: "https://github.com/QuantumSavory/QEPOptimize.jl"
        }
      ]
    }
  ],

  display: true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle:
    "Selected projects spanning computer vision, graphics, systems programming, and emulation.",

  projects: [
    {
      image: require("./shots/splat.png"),
      projectName: "CUDA Gaussian Splatting Renderer",

      projectDesc:
        "A real-time 3D Gaussian Splatting renderer written in C++ and CUDA, with custom GPU kernels for projection, sorting, and compositing.",

      tech: ["C++", "CUDA", "CUB", "CMake"],

      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/brohan-byte"
        }
      ]
    },

    {
      image: require("./shots/grooply.png"),
      projectName: "Neural Digital Twin System",

      projectDesc:
        "Turns a phone video into an explorable 3D scene — a custom SLAM pipeline recovers camera motion, then Gaussian Splatting rebuilds the space for viewing in the browser via WebXR.",

      tech: ["Python", "C++", "OpenCV", "NumPy"],

      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/brohan-byte"
        }
      ]
    },

    {
      image: require("./shots/nerf.png"),
      projectName: "NeRF From Scratch",

      projectDesc:
        "A Neural Radiance Field built from scratch in PyTorch, trained to synthesize new photorealistic viewpoints of real-world scenes.",

      tech: ["Python", "PyTorch"],

      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/brohan-byte"
        }
      ]
    },

    {
      image: require("./shots/pong.png"),
      projectName: "CHIP-8 Emulator",

      projectDesc:
        "A cycle-accurate CHIP-8 emulator in C++, complete with a full CPU, memory, timers, and graphics — runs classic CHIP-8 ROMs.",

      tech: ["C++"],

      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/brohan-byte"
        }
      ]
    },

    {
      image: require("./shots/api.png"),
      projectName: "Distributed Patient Management System",

      projectDesc:
        "A microservices-based healthcare platform (auth, billing, analytics) built with Spring Boot, Docker, Kafka, and gRPC behind an API gateway.",

      tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],

      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/brohan-byte"
        }
      ]
    }
  ],

  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements and program participation",

  achievementsCards: [
    {
      title: "Google Summer of Code Contributor",
      subtitle:
        "Selected to contribute to The Julia Language organization, building Bell distillation optimization tooling for quantum communication networks.",
      // image: require("./assets/images/gsocLogo.png"), // TODO: add a GSoC logo image at this path
      imageAlt: "Google Summer of Code Logo",
      footerLink: [
        {
          name: "The Julia Language",
          url: "https://julialang.org/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};



// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
// const resumeSection = {
//   title: "Resume",
//   subtitle:
//     "Download my resume for a complete overview of my education, research, technical experience, and projects.",

//   resumeLink:
//     "https://github.com/brohan-byte/brohan-byte/raw/main/Sai_Rohan_Reddy_Kondlapudi_Resume.pdf",

//   display: true
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in computer vision, graphics, or quantum computing? My inbox is open for all.",
  number: "", // TODO: add a phone number if you'd like it displayed
  email_address: "sairohanredd@umass.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", // TODO: replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  // resumeSection
};