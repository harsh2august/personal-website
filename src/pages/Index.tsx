import { Link } from "react-router-dom";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileType,
  Calendar,
  Clock,
  Twitter,
  Play,
} from "lucide-react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiNginx } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import FeaturedVideo from "@/components/FeaturedVideo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileNav } from "@/components/MobileNav";

const Index = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <FileType /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Next.js", icon: <RiNextjsFill /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Nginx", icon: <SiNginx /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "SEO", icon: <TbSeo /> },
  ];

  const projects = [
    {
      title: "Marriage Biodata Maker",
      description:
        "Make marriage biodata in 5 minutes. Currently it is getting a monthly organic traffic of 15,000.",
      tech: [
        "React",
        "Javscript",
        "Node.js",
        "MongoDB",
        "Chakra Ui",
        "Gemini LLM",
      ],
      image:
        "https://res.cloudinary.com/dwtyvkubj/image/upload/v1749330737/marriage-biodata-og_ltnqup.png",
      github: "#",
      live: "https://www.marriagebiodataonline.com/",
    },
    {
      title: "PDF Bazaar",
      description:
        "One-stop solution for selling notes, PDF and digital assets.",
      tech: ["React", "JavaScript", "NodeMailer", "Node JS", "Cloudinary"],
      image:
        "https://res.cloudinary.com/dwtyvkubj/image/upload/v1749331156/og-img-pdf_vbp5eo.png",
      github: "#",
      live: "https://pdfbazaar.indiandevelopers.org/",
    },
    {
      title: "Kanban Task board",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React JS", "Socket.io", "Javscript", "react-draggable"],
      image:
        "https://res.cloudinary.com/dwtyvkubj/image/upload/v1749331344/og-3_x9r3q3.png",
      github: "#",
      live: "#",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dwtyvkubj/image/upload/v1749327779/photo-5_vqj8ne.jpg",
      alt: "Technology and circuits",
      title: "Workshop on Git and GitHub",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dwtyvkubj/image/upload/v1749327783/photo-15_yipqb5.jpg",
      alt: "Development environment",
      title: "How to sell your cloths online.",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dwtyvkubj/image/upload/v1749327781/photo-9_or02ie.jpg",
      alt: "GeeksforGeeks",
      title: "A day in the life at GeeksforGeeks",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dwtyvkubj/image/upload/v1749327785/photo-17_cfkn6g.jpg",
      alt: "Coding workspace",
      title: "A day at Youth Summit, Begusarai",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dwtyvkubj/image/upload/v1749327781/photo-10_a9u2cn.jpg",
      alt: "GeeksforGekks",
      title: "Average day at GeeksforGeeks",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dwtyvkubj/image/upload/v1749327780/photo-2_u7wsjn.jpg",
      alt: "Digital innovation",
      title: "A day at Govt. Purnea College of Engineering",
    },
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Not Your Idea LLP",
      period: "March 2025 - Present",
      location: "Mumbai, India",
      link: "https://notyouridea.com/",
      icon: "https://notyouridea.com/logo-white-bg.svg",
      description: "Make Engineering ideas for effective solutions.",
      achievements: [
        "Intgrated Umami for detailed analytics of a CMS built in Next JS and Payload CMS",
        "Implemented custom TOC with effiecient dom manipulation",
        "Summary Generation with Gemini LLM Flash model api",
        "Improved build time by optimising server side data fetching",
        "Integrated auto web indexing api with manual status checking of url",
        "Integrated lexcical table generator and created custom seoPlugin for authors",
        "Implemented best SEO practices with dynamic article schema and metaData",
        "Improved engagement by implementing Server side rendering and best web accesiblity practices",
      ],
      tech: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Payload CMS",
        "SEO",
        "JavaScript",
        "AWS",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Creators Mind",
      period: "July 2024 - Feb 2025",
      location: "Patna, India",
      icon: "https://www.creatorsmind.co.in/favicon.png",
      link: "https://www.creatorsmind.co.in/",
      description: "One stop solution for Educators & Creators.",
      achievements: [
        "Worked on PDF Bazaar students and admin panel from scratch ensuring smooth purchase experience and management for educator and student",
        "Worked on LMS Admin panel from scratch with course creation, lecture management, analytics ensuring smooth learning experience",
        "Worked on Payment Gateway Integration, Order management, Coupon management and Notification module",
      ],
      tech: [
        "React",
        "JavaScript",
        "Next JS",
        "CSS3",
        "Redux",
        "Hostinger VPS",
        "Nginx",
      ],
    },
    {
      title: "Frontend Developer",
      company: "GeeksForGeeks",
      period: "July 2023 - June 2024",
      location: "Noida, India",
      icon: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
      link: "https://www.geeksforgeeks.org/",
      description:
        "My first company that given me space to break and learn. Got a chance to interact with some brilliant minds.",
      achievements: ["No acheivements but the pure learnings and experience."],
      tech: ["React JS", "SEO"],
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt:
        "Learn the best practices for building large-scale React applications that can grow with your team and user base.",
      date: "2024-05-15",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop",
      category: "React",
    },
    {
      id: 2,
      title: "The Future of Frontend Development",
      excerpt:
        "Exploring emerging trends and technologies that are shaping the future of frontend development in 2024 and beyond.",
      date: "2024-05-08",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop",
      category: "Technology",
    },
    {
      id: 3,
      title: "Mastering CSS Grid and Flexbox",
      excerpt:
        "A comprehensive guide to modern CSS layout techniques that every frontend developer should master.",
      date: "2024-04-28",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      category: "CSS",
    },
    {
      id: 4,
      title: "TypeScript Best Practices",
      excerpt:
        "Essential TypeScript patterns and practices that will make your code more maintainable and bug-free.",
      date: "2024-04-20",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=300&fit=crop",
      category: "TypeScript",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="hidden md:flex space-x-8 items-center">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
              <ThemeToggle />
            </div>
            <MobileNav scrollToSection={scrollToSection} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                I am Harsh Kumar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              I have strong technical skills in Frontend, React JS, Product
              Development & SEO. I love building tech products that solves a
              problem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Link
                to={"https://calendly.com/harsh2august/30min"}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                  onClick={() => scrollToSection("contact")}
                >
                  Book a Google Meet
                </Button>
              </Link>
            </div>
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div>
              <img
                src="https://res.cloudinary.com/dwtyvkubj/image/upload/v1749327788/photo-22_wohkhr.jpg"
                alt="Developer"
                className="rounded-2xl shadow-2xl w-full max-w-xs md:max-w-md mx-auto"
              />
            </div>

            {/* Text Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100 text-center md:text-left">
                Passionate about creating exceptional web experiences
              </h3>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-justify">
                As a passionate and results-driven Frontend Developer, I
                specialize in building performant, scalable, and user-friendly
                web applications using modern JavaScript technologies like
                React.js, Next.js, and TypeScript. With a solid foundation in
                software engineering and real-world experience across startups
                and tech platforms, I bring a blend of design thinking, SEO and
                performance optimization, and problem-solving to every project.
              </p>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-justify">
                I am not just into experiencing tech, but I also feel goosebumps
                playing Cricket, listening to music and having chats. Let’s
                connect and collaborate on building something together.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link
                  to="https://github.com/harsh2august"
                  target="_blank"
                  className="flex items-center border px-4 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
                <Link
                  to="https://www.linkedin.com/in/harsh2august/"
                  target="_blank"
                  className="flex items-center border px-4 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <Github className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
                <Link
                  to="https://x.com/harsh2august"
                  target="_blank"
                  className="flex items-center border px-4 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <Badge
                  variant="secondary"
                  className="w-full py-4 px-4 text-center bg-white dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-600 flex items-center justify-center gap-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-6 bg-white dark:bg-slate-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              My journey in frontend development with impactful contributions
              across different companies
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card
                key={experience.company}
                className="hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-800 dark:text-slate-100">
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="text-lg flex items-center font-medium text-blue-600 dark:text-blue-400">
                        <img
                          src={experience?.icon}
                          className="w-10 h-10 mr-2 rounded-full border-2 p-1 border-blue-500"
                        />
                        <Link
                          to={experience.link}
                          target="blank"
                          rel="noopener noreferrer nofollow"
                          className="hover:underline"
                        >
                          {experience.company}
                        </Link>
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-600 dark:text-slate-300 font-medium">
                        {experience.period}
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">
                        {experience.location}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {experience.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                      {experience.achievements.map(
                        (achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for
              development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg dark:bg-slate-800 dark:shadow-slate-900/50"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-100">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Link to={project.live} target="_blank">
                      <Button size="lg" className="flex bg-green-500">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Videos Section */}
      <section id="videos" className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              Featured Videos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Watch me explain concepts and demonstrate projects in action
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden dark:bg-slate-800 dark:shadow-slate-900/50">
              <div className="relative">
                <div className="aspect-video bg-slate-100 dark:bg-slate-700 rounded-t-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/Pr3mhq60u_w"
                    title="Building Scalable React Applications - Tutorial"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-red-600 text-white hover:bg-red-700"
                  >
                    <Play className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  अपने Business का SEO कैसे करें ? | Complete Business SEO
                  Course For Beginners
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  In this comprehensive tutorial, I walk through the process of
                  scaling a bussiness through SEO, covering everything from
                  basic to advanced.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Published: Jan 21, 2025
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      21 min watch
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                  >
                    SEO
                  </Badge>
                </div>
                <Link
                  to={"https://youtu.be/Pr3mhq60u_w?si=xwABkqexug7FzX8L"}
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-300 dark:group-hover:bg-blue-900/20 dark:group-hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Watch on YouTube
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-20 px-6 bg-slate-50 dark:bg-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A visual showcase of my development journey and workspace
              inspirations
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image) => (
                <CarouselItem
                  key={image.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-semibold text-lg">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </section>
      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              Latest Blog Posts
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Sharing insights, tutorials, and thoughts on frontend development
              and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden dark:bg-slate-700 dark:shadow-slate-900/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge
                    variant="secondary"
                    className="absolute top-4 left-4 bg-white/90 text-slate-700"
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-300 transition-colors"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 px-8 py-3"
            >
              View All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl mb-12 text-blue-100">
            I'm always interested in new opportunities and exciting projects
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <Link
                to={"mailto:harshj7.net@gmail.com"}
                target="blank"
                className="text-blue-100"
              >
                harshj7.net@gmail.com
              </Link>
            </div>
            <div className="text-center">
              <Github className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <Link
                to={"https://github.com/harsh2august"}
                target="blank"
                className="text-blue-100"
              >
                github.com/harsh2august
              </Link>
            </div>
            <div className="text-center">
              <Linkedin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <Link
                to={"https://www.linkedin.com/in/harsh2august/"}
                target="blank"
                className="text-blue-100"
              >
                www.linkedin.com/in/harsh2august
              </Link>
            </div>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3"
          >
            <Mail className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 dark:bg-slate-950 text-white text-center">
        <p className="text-slate-400 dark:text-slate-500">© 2025 Harsh Kumar</p>
      </footer>
    </div>
  );
};

export default Index;
