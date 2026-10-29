export interface MiniCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: "blue" | "red" | "yellow" | "green";
  badge: string;
}

export interface SkillItem {
  name: string;
  category: string;
  status: "Exploring" | "Building With" | "Core Interest" | "Practicing";
  description: string;
  iconName: string;
  color: "blue" | "red" | "yellow" | "green";
  levelNote: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  color: "blue" | "red" | "yellow" | "green";
  githubUrl: string;
  demoUrl: string;
  isPlaceholder: boolean;
  statusText: string;
}

export interface EducationItem {
  heading: string;
  subheading: string;
  institution: string;
  role: string;
  focusArea: string;
  description: string;
  highlights: string[];
  note: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  isEditable: boolean;
  color: "blue" | "red" | "yellow" | "green";
}

export const PORTFOLIO_DATA = {
  hero: {
    greeting: "Hey, I'm Chaitanya! 👋",
    name: "Chaitanya Salunke",
    subtitle: "Student at Newton School of Technology | Aspiring Developer | Curious Mind",
    shortBio: "I love exploring technology, solving problems, building cool things, and turning ideas into reality.",
    statusLabel: "Currently learning, building & experimenting.",
    ctaPrimary: "Explore My Work",
    ctaSecondary: "Let's Connect",
  },
  about: {
    heading: "A Little About Me",
    subheading: "Curiosity first, code second — always eager to explore what's possible.",
    paragraphs: [
      "I am an enthusiastic technology student at Newton School of Technology who loves diving into how software, algorithms, and systems work under the hood.",
      "My journey is driven by an insatiable curiosity: learning foundational programming, experimenting with modern developer tools, exploring the frontiers of Artificial Intelligence, and turning concepts into functional software.",
      "I believe the best way to grow is by rolling up my sleeves—building practical projects, brainstorming with fellow students, asking questions, and collaborating in team environments like hackathons and open-source communities.",
    ],
    miniCards: [
      {
        id: "curious-learner",
        title: "Curious Learner",
        description: "Always excited to pick up new technologies, explore frameworks, and understand core computer science concepts.",
        icon: "Sparkles",
        color: "blue",
        badge: "Growth Mindset",
      },
      {
        id: "problem-solver",
        title: "Problem Solver",
        description: "Approaching challenges methodically with logic, analytical thinking, and continuous iteration until it clicks.",
        icon: "Cpu",
        color: "red",
        badge: "Logic & Code",
      },
      {
        id: "creative-builder",
        title: "Creative Builder",
        description: "Transforming thoughts and doodle sketches into interactive, clean, and user-centric digital experiences.",
        icon: "Palette",
        color: "yellow",
        badge: "Craft & Design",
      },
      {
        id: "team-player",
        title: "Team Player",
        description: "Thriving in collaborative settings, sharing insights, pair-programming, and learning alongside peers.",
        icon: "Users",
        color: "green",
        badge: "Collaboration",
      },
    ] as MiniCard[],
  },
  skills: {
    heading: "Skills & Learning Journey",
    subheading: "Technologies and areas I am actively learning, practicing, and experimenting with.",
    note: "Honest progression: Represented as ongoing learning interests and hands-on explorations.",
    items: [
      {
        name: "Python",
        category: "Programming Language",
        status: "Core Interest",
        description: "Learning syntax, data structures, scripting, and problem-solving through clean Pythonic code.",
        iconName: "Terminal",
        color: "blue",
        levelNote: "Active learning & scripting",
      },
      {
        name: "Problem Solving",
        category: "Foundations",
        status: "Practicing",
        description: "Strengthening logical deduction, algorithmic thinking, and breaking complex problems into simple steps.",
        iconName: "BrainCircuit",
        color: "red",
        levelNote: "Continuous practice & puzzles",
      },
      {
        name: "HTML & CSS",
        category: "Web Development",
        status: "Building With",
        description: "Crafting structured, accessible web pages, responsive layouts, Flexbox/Grid, and modern styling.",
        iconName: "Layout",
        color: "yellow",
        levelNote: "Layouts & modern UI design",
      },
      {
        name: "JavaScript",
        category: "Frontend Development",
        status: "Building With",
        description: "Exploring DOM manipulation, asynchronous programming, modern ES6+ features, and interactive UI behavior.",
        iconName: "Code2",
        color: "green",
        levelNote: "Interactive logic & web apps",
      },
      {
        name: "Git & GitHub",
        category: "Developer Workflow",
        status: "Practicing",
        description: "Version control fundamentals: branching, commits, pull requests, and collaborative repository management.",
        iconName: "GitBranch",
        color: "blue",
        levelNote: "Version control & collaboration",
      },
      {
        name: "Artificial Intelligence",
        category: "Exploration & Emerging Tech",
        status: "Exploring",
        description: "Fascinated by AI concepts, prompt engineering, generative models, and how intelligent agents shape the future.",
        iconName: "Bot",
        color: "red",
        levelNote: "Foundations & experimental tools",
      },
    ] as SkillItem[],
  },
  projects: {
    heading: "Featured Projects",
    subheading: "A showcase of concepts, prototypes, and applications. (Ready to be populated with your own creations!)",
    items: [
      {
        id: "project-1",
        title: "Smart Task & Study Planner",
        tagline: "An interactive productivity companion for students",
        description: "A responsive web application concept built to help students organize academic tasks, track study streaks, and prioritize daily objectives with a playful, clean UI.",
        tags: ["JavaScript", "HTML/CSS", "Local Storage", "Responsive UI"],
        color: "blue",
        githubUrl: "https://github.com/your-username/smart-study-planner",
        demoUrl: "https://example.com/demo-placeholder-1",
        isPlaceholder: true,
        statusText: "Ready for your project repository",
      },
      {
        id: "project-2",
        title: "Python Problem Solver & Visualizer",
        tagline: "Algorithm playground and interactive script collection",
        description: "A collection of Python scripts and interactive algorithm visualizations exploring classic computer science problems, sorting methods, and logic exercises.",
        tags: ["Python", "Algorithms", "Data Structures", "Visualizer"],
        color: "green",
        githubUrl: "https://github.com/your-username/python-algo-lab",
        demoUrl: "https://example.com/demo-placeholder-2",
        isPlaceholder: true,
        statusText: "Ready for your project repository",
      },
      {
        id: "project-3",
        title: "AI Prompt Playground & Helper",
        tagline: "Mini experimentation app exploring generative AI prompts",
        description: "A lightweight web prototype exploring AI integration, testing creative prompt templates, and generating study flashcards from lecture notes.",
        tags: ["AI Exploration", "Modern Web", "API Integration", "Creative Dev"],
        color: "yellow",
        githubUrl: "https://github.com/your-username/ai-study-helper",
        demoUrl: "https://example.com/demo-placeholder-3",
        isPlaceholder: true,
        statusText: "Ready for your project repository",
      },
    ] as ProjectItem[],
  },
  education: {
    heading: "Education",
    subheading: "Academic foundation and continuous tech learning.",
    institution: "Newton School of Technology",
    role: "Student",
    focusArea: "Technology and Computer Science",
    description: "Immersed in practical computing principles, real-world development paradigms, collaborative peer learning, and hands-on software engineering courses.",
    highlights: [
      "Hands-on programming & computer science curriculum",
      "Active participant in campus tech events & hackathons",
      "Collaborative software development and peer code reviews",
      "Focus on practical, industry-aligned engineering skills",
    ],
    note: "Currently pursuing studies at Newton School of Technology.",
  } as EducationItem,
  contact: {
    heading: "Got an Idea? Let's Build Something!",
    subheading: "Whether you want to discuss a project, collaborate on a hackathon, or just say hello—I'd love to hear from you!",
    emailPlaceholder: "chaitanya.salunke@example.com",
    socialLinks: [
      {
        platform: "GitHub",
        label: "github.com/your-username",
        url: "https://github.com/your-username-placeholder",
        isEditable: true,
        color: "blue",
      },
      {
        platform: "LinkedIn",
        label: "linkedin.com/in/your-profile",
        url: "https://linkedin.com/in/your-profile-placeholder",
        isEditable: true,
        color: "red",
      },
      {
        platform: "Email",
        label: "chaitanya.salunke@example.com",
        url: "mailto:chaitanya.salunke@example.com",
        isEditable: true,
        color: "green",
      },
    ] as SocialLink[],
  },
};
