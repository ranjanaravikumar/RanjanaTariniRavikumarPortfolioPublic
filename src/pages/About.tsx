import React, { useState } from "react"
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { 
  X, User, FileText, Briefcase, Lightbulb, Award, Code, Download,
  ExternalLink, Calendar, MapPin, Github, Eye, Camera, Scissors,
  Users, Coffee,GraduationCap,BookOpen, Phone, Mail
} from "lucide-react"
import backgroundImage from "@/assets/background.jpg"
import { Link } from "react-router-dom";
import wallEdited from "@/assets/walledited.jpg"
import deepWorkDrink from "@/assets/drink-1.jpg"      
import joyPhoto from "@/assets/pic-2.jpg"             
import myself from "@/assets/me-2.jpeg"
import asuLogo from "@/assets/asu-logo.png"
import vitLogo from "@/assets/vit-logo.png"
import introPhoto from "@/assets/me-hero.jpg"
// import publicationImg from "@/assets/publication.png"
import SkillsMosaic from '@/components/SkillsMosaic'

type FlashcardProps = {
  title: string
  subtitle: string
  description: string
  image: string
  accent: string
  icon: React.ElementType
}

const Flashcard = ({
  title,
  subtitle,
  description,
  image,
  accent,
  icon: Icon,
}: FlashcardProps) => {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <div
      className="relative w-full h-[500px] cursor-pointer"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      onClick={() => setShowDescription((v) => !v)}
    >
      <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
        {/* Image fills everything */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay blur on hover/click */}
        {showDescription && (
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
        )}

        {/* Accent bar
        <div
          className="absolute left-0 top-0 h-1 w-full"
          style={{ background: accent }}
        /> */}

        {/* Content always visible, but text changes on hover */}
        <div className="relative h-full flex flex-col justify-between p-5">
          {/* Top: subtitle + title (always visible) */}
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-white/90 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-white/70 truncate">
                {subtitle}
              </p>
              <h3 className="text-lg font-bold text-white leading-tight">
                {title}
              </h3>
            </div>
          </div>

          {/* Bottom: description or hint */}
          <div>
            {!showDescription ? (
              <p className="text-xs text-white/70 italic">
                Hover or tap to see more
              </p>
            ) : (
              <p className="text-sm text-white/95 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}



const About = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [currentInterest, setCurrentInterest] = useState(0)

  const interestCards = [
    
    {
      title: "Capturing Everyday Joy",
      subtitle: "Photo diary",
      description:
        "Treat social media like a personal photo diary, saving happy moments, little wins, and snapshots with people who matter as a way to remember and reflect.",
      image: myself, 
      accent: "linear-gradient(90deg,#22c55e,#a3e635)",
      icon: Camera,
    },
    {
      title: "Social & Close Circles",
      subtitle: "People first",
      description:
        "An ambivert who enjoys honest conversations, spontaneous plans, and spending time with people, and is always happy to start a conversation.",
      image: joyPhoto, 
      accent: "linear-gradient(90deg,#6366f1,#a855f7)",
      icon: Users,
    },
    {
      title: "Deep Work & Little Rituals",
      subtitle: "Focus mode",
      description:
        "Enjoys long focus sessions with a favorite coffee or energy drink nearby, getting deeply absorbed in building, debugging, and steadily refining things until they feel right.",
      image: deepWorkDrink,
      accent: "linear-gradient(90deg,#0ea5e9,#22d3ee)",
      icon: Coffee,
    },
    {
      title: "Crafting & Thoughtful Details",
      subtitle: "Handmade things",
      description:
        "Enjoy creating handmade crafts and small personal projects, and value the effort and intention behind thoughtful, handcrafted gifts more than the object itself.",
      image: wallEdited, 
      accent: "linear-gradient(90deg,#f97316,#facc15)",
      icon: Scissors,
    },
  ]

  const sections = [
    { id: 'intro', label: 'Intro', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'interests', label: 'Interests', icon: Lightbulb },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'skills', label: 'Skills', icon: Code }, 
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'publications', label: 'Publications', icon: BookOpen },
  ]



  const renderContent = () => {
    switch (activeSection) {
      case "intro":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Introduction</h2>

            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              {/* Photo */}
              <div className="w-full md:w-[36%] flex justify-center md:justify-start">
                <img
                  src={introPhoto}
                  alt="Ranjana Tarini Ravikumar"
                  className="w-72 h-[26rem] md:w-80 md:h-[30rem] rounded-3xl object-cover border-4 border-white/40 shadow-2xl"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-[68%] flex items-center">
                <div className="space-y-4 text-white/90 leading-relaxed text-[15px] md:text-[16px]">
                  <p>
                    Hello! I'm Ranjana Tarini Ravikumar, someone who loves asking "why," not just "how."
                    At the heart of everything I do is a simple belief: every problem is a design
                    opportunity, not a roadblock. Whether it's a bug in a project or a completely new
                    idea, I enjoy breaking it down, understanding the moving pieces, and slowly shaping
                    it into something that actually works and helps people, with the optimism that
                    there's always a better version waiting to be built.
                  </p>
                  <p>
                    I'm a very detail‑oriented thinker, but I don't like overcomplicating things just to
                    sound "technical." I like keeping things clear and honest, and I enjoy the process of
                    steadily improving something, one small decision at a time.
                  </p>
                  <p>
                    My default mode is calm, curious, and persistent, and I tend to approach challenges
                    with the mindset that they're figure‑out‑able. I enjoy balancing structure and
                    flexibility, planning thoughtfully, but staying open to better ideas as I learn more
                    and I try to bring a hopeful, forward‑looking attitude into every project and
                    collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'resume':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">Resume</h2>
              <GlassButton
                variant="ghost"
                className="hover:bg-white/20 hover:text-white border-white/20"
                asChild
              >
                <a 
                  href="https://drive.google.com/uc?export=download&id=1A79c0waIBHY5d9h6F-GbZw39X7-s06at"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </GlassButton>
            </div>
            <div className="bg-white/10 rounded-lg p-6 border border-white/20 max-w-4xl mx-auto">
              <iframe
                src="https://drive.google.com/file/d/1A79c0waIBHY5d9h6F-GbZw39X7-s06at/preview"
                className="w-full h-[650px] md:h-[750px] rounded-xl"
                title="Resume"
              />
            </div>
            <p className="text-white/80 text-sm text-center">
              Click the download button above to save a copy of my resume
            </p>
          </div>
        )
      case 'projects':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Projects</h2>
            <div className="grid gap-6">
              {/* Project 1: SupplementsRx AI */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">SupplementsRx AI – Unified RAG Chatbot</h3>
                <p className="text-white/80 mb-4">AI-powered RAG chatbot with dual-retrieval pipeline for evidence-based supplement recommendations. Achieved 85%+ groundedness accuracy and reduced manual literature review time by 43%.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">FastAPI</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Neo4j</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Sentence Transformers</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">LangChain</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">JavaScript</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">RAG</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">NLP</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Python</span>
                </div>
                <div className="flex gap-3">
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </GlassButton>
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </GlassButton>
                </div>
              </div>

              {/* Project 2: Fruit Defect Detection */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Fruit Defect Detection</h3>
                <p className="text-white/80 mb-4">Real-time YOLO-NAS model for fruit quality control. Optimized training pipeline from 12 hours to 13 minutes per epoch (55x speedup) using GPU acceleration. Automated dataset curation pipeline for 2,000 images across 6 defect classes.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">YOLO-NAS</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">AWS Lambda</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">AWS EC2</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">AWS DynamoDB</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">FastAPI</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Python</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Computer Vision</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">GPU Acceleration</span>
                </div>
                <div className="flex gap-3">
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </GlassButton>
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </GlassButton>
                </div>
              </div>

              {/* Project 3: EduNex */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">EduNex – Learning Management System</h3>
                <p className="text-white/80 mb-4">Full-stack LMS platform with Whisper transcription, GPT-4 summarization, and LLM-based doubt solving. Reduced student note-taking effort by ~80% and improved query resolution time by ~70%.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Node.js</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">React.js</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">MongoDB</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Stripe</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">FastAPI</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Whisper</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">GPT-4</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">LLM Integration</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Python</span>
                </div>
                <div className="flex gap-3">
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </GlassButton>
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </GlassButton>
                </div>
              </div>

              {/* Project 4: Reddito */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Reddito – Social Web Application</h3>
                <p className="text-white/80 mb-4">Full-stack social web app with MERN stack and Next.js server-side rendering. Implemented JWT authentication and REST APIs with optimized page load times under 2 seconds.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">React</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Node.js</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">MongoDB</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Express</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Next.js</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">JWT</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">REST APIs</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Authentication</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">JavaScript</span>
                </div>
                <div className="flex gap-3">
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </GlassButton>
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </GlassButton>
                </div>
              </div>

              {/* Project 5: Image Inpainting with GANs */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Image Inpainting with GANs</h3>
                <p className="text-white/80 mb-4">Comparative study of three GAN architectures (Vanilla GAN, GatedConv, AOT-GAN) for image inpainting. AOT-GAN achieved PSNR 29.0 dB and SSIM 0.88, significantly outperforming foundational approaches through attention mechanisms.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">PyTorch</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">TensorFlow</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Python</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Deep Learning</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">GANs</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Attention Mechanisms</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">CNN</span>
                </div>
                <div className="flex gap-3">
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </GlassButton>
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </GlassButton>
                </div>
              </div>

              {/* Project 6: Banking Data Fraud Detection */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Banking Data Fraud Detection</h3>
                <p className="text-white/80 mb-4">Machine learning fraud detection system using ensemble learning (CatBoost, LightGBM, XGBoost). Achieved 30% faster training with Bayesian Optimization. Created Flask dashboard that reduced fraud response time by 26%.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Python</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Flask</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">CatBoost</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">XGBoost</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">LightGBM</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Bayesian Optimization</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Ensemble Learning</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">ML</span>
                </div>
                <div className="flex gap-3">
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </GlassButton>
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </GlassButton>
                </div>
              </div>

              {/* Project 7: COVID-19 & Pneumonia Detection */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">COVID-19 & Pneumonia Detection</h3>
                <p className="text-white/80 mb-4">3-class medical imaging classifier using DenseNet121 transfer learning on 6,200+ chest X-rays. Achieved 94.88% overall accuracy with 99.76% sensitivity for COVID-19 detection.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Keras</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">TensorFlow</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">DenseNet121</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Python</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Transfer Learning</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Medical Imaging</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">CNN</span>
                </div>
                <div className="flex gap-3">
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </GlassButton>
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </GlassButton>
                </div>
              </div>

              {/* Project 8: Fire & Smoke Detection System */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Fire & Smoke Detection System</h3>
                <p className="text-white/80 mb-4">Real-time detection system using InceptionV3 transfer learning on 3,000+ images. Achieved 93% validation accuracy across fire, smoke, and normal classes with effective false positive minimization.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Keras</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">TensorFlow</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">InceptionV3</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Python</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">CNN</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Transfer Learning</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Computer Vision</span>
                </div>
                <div className="flex gap-3">
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20" asChild>
                    <a href="https://github.com/ranjanaravikumar/Fire-Smoke-Detection" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </GlassButton>
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </GlassButton>
                </div>
              </div>

              {/* Project 9: PharmaZilla */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">PharmaZilla – Online Pharmacy Platform</h3>
                <p className="text-white/80 mb-4">Full-stack e-pharmacy web platform with user authentication, product catalog, shopping cart, and admin dashboard. Integrated health checker API and validated market demand with 6 pharmacy clients.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">HTML</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">CSS</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">JavaScript</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">PHP</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">MySQL</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">AJAX</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Full-Stack Web Development</span>
                </div>
                <div className="flex gap-3">
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </GlassButton>
                  <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </GlassButton>
                </div>
              </div>
            </div>
          </div>
        )
      case 'experience':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Experience</h2>
            <div className="space-y-6">
              {/* Experience 1 */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Research Volunteer</h3>
                    <p className="text-white/80">Fae Labs, Texas, USA</p>
                  </div>
                  <div className="text-right text-white/70 text-sm">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="h-4 w-4" />
                      Apr 2025 – Aug 2025
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Remote
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-white/80">
                  <li>• Optimized YOLO-NAS training from 12 hours to 13 minutes per epoch (55x speedup) using GPU acceleration and mixed precision on 2,000+ fruit images.
                  </li>
                  <li>• Built an automated dataset curation pipeline with Roboflow and Label Studio, standardizing YOLO annotations and eliminating 90%+ malformed label files.
                  </li>
                  <li>• Integrated WhatsApp Cloud API with AWS Lambda, EC2, and DynamoDB to automate image ingestion and metadata storage at scale.
                  </li>
                </ul>
              </div>

              {/* Experience 2: Excelacom */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Python Intern</h3>
                    <p className="text-white/80">Excelacom Technologies, Chennai, India</p>
                  </div>
                  <div className="text-right text-white/70 text-sm">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="h-4 w-4" />
                      Jan 2024 – May 2024
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Chennai, India
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-white/80">
                  <li>
                    • Reverse‑engineered an existing RASA + LangChain chatbot pipeline to understand
                    intent classification and entity extraction flows.
                  </li>
                  <li>
                    • Cleaned and prepared datasets with Python and Pandas for CatBoost experiments,
                    improving model performance by ~15% through feature engineering.
                  </li>
                  <li>
                    • Participated in weekly code reviews, suggesting optimizations that reduced batch
                    preprocessing time by ~12%.
                  </li>
                </ul>
              </div>

              {/* Experience 3: SmartInternz */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Modern Application Development Trainee
                    </h3>
                    <p className="text-white/80">SmartInternz, Hyderabad, India</p>
                  </div>
                  <div className="text-right text-white/70 text-sm">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="h-4 w-4" />
                      May 2023 – Jul 2023
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Hyderabad, India
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-white/80">
                  <li>
                    • Built Spring Boot REST APIs for an e‑commerce app (FOODYS) handling registration,
                    restaurant data, and order workflows using Git for collaboration.
                  </li>
                  <li>
                    • Designed MongoDB schemas and aggregation pipelines for personalized
                    recommendations and real‑time restaurant availability.
                  </li>
                  <li>
                    • Implemented React.js UI and containerized the stack with Docker and Kubernetes,
                    enabling horizontal scaling to 1,000+ concurrent sessions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
    
      case 'interests':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Personal Interests</h2>
            <p className="text-white/70 text-sm">
              The interests and passions that define me.
            </p>

            {/* Wider layout for bigger card */}
            <div className="flex items-center justify-center gap-6 px-2">
              {/* Prev button */}
              <button
                className="h-10 w-10 rounded-full border border-white/30 text-white/80 flex items-center justify-center hover:bg-white/15 transition flex-shrink-0"
                onClick={() =>
                  setCurrentInterest((prev) =>
                    prev === 0 ? interestCards.length - 1 : prev - 1
                  )
                }
              >
                &lt;
              </button>

              {/* Centered flashcard – takes up most space */}
              <div className="flex-1 max-w-4xl flex justify-center"> 
                <Flashcard {...interestCards[currentInterest]} />
              </div>

              {/* Next button */}
              <button
                className="h-10 w-10 rounded-full border border-white/30 text-white/80 flex items-center justify-center hover:bg-white/15 transition flex-shrink-0"
                onClick={() =>
                  setCurrentInterest((prev) =>
                    prev === interestCards.length - 1 ? 0 : prev + 1
                  )
                }
              >
                &gt;
              </button>
            </div>

            {/* Indicator */}
            <p className="text-center text-xs text-white/60">
              {currentInterest + 1} / {interestCards.length}
            </p>
          </div>
        )


      case 'certifications':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
            <div className="space-y-6">
              {/* AWS */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">AWS Certified Cloud Practitioner</h3>
                      <p className="text-white/80">Amazon Web Services</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <GlassButton
                      asChild
                      variant="ghost"
                      size="sm"
                      className="hover:bg-white/20 hover:text-white border-white/20"
                    >
                      <a
                        href="https://drive.google.com/file/d/1KsK3Pyz4V6H49Y2surLvWxvtgWTT30io/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Credential
                      </a>
                    </GlassButton>
                  </div>
                </div>
                <p className="text-white/80">
                  Validates cloud fundamentals, core AWS services, security, and cost management.
                </p>
              </div>

              {/* Machine Learning with Python */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">Machine Learning with Python</h3>
                      <p className="text-white/80">Coursera / IBM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <GlassButton
                      asChild
                      variant="ghost"
                      size="sm"
                      className="hover:bg-white/20 hover:text-white border-white/20"
                    >
                      <a
                        href="https://drive.google.com/file/d/1M1gZiwMiScbyKyLeIpF0lBgB5cXgFohj/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Credential
                      </a>
                    </GlassButton>
                  </div>
                </div>
                <p className="text-white/80">
                  Covers supervised and unsupervised learning, model evaluation, and scikit-learn-based ML workflows.
                </p>
              </div>
            </div>
          </div>
        )

      case 'skills':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Skills & Expertise</h2>
            <SkillsMosaic />
          </div>
        )

      case 'education':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Education</h2>
            
            {/* Universities */}
            <div className="space-y-6">
              {/* ASU MS */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <img src={asuLogo} alt="ASU" className="h-12 w-12 rounded-lg object-contain" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">MS Computer Science</h3>
                      <p className="text-white/80">Arizona State University, Tempe, AZ</p>
                    </div>
                  </div>
                  <div className="text-right text-white/70 text-sm">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="h-4 w-4" />
                      Aug 2024 – May 2026
                    </div>
                    <div className="text-lg font-semibold text-white">GPA: 4.0/4.0</div>
                  </div>
                </div>
                <p className="text-white/80 mb-3">
                  Software Verification • Data Mining • Data Visualization • Statistical Machine Learning
                  ASU's vibrant community and collaborative culture transformed my perspective on work-life balance, 
                  cultural diversity, and the importance of building meaningful connections beyond academics.
                  Volunteered with ICA (Indian Cultural Association), organizing community events and fostering 
                  cultural exchange among graduate students. Engaged in full-stack software development, building 
                  production-ready applications with clean code practices.
                  Advanced expertise in TensorFlow, PyTorch, and conversational AI
                   while discovering my passion for ethical AI. 
                </p>
              </div>

              {/* VIT BTech */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <img src={vitLogo} alt="VIT" className="h-12 w-12 rounded-lg object-contain" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        B.Tech. Computer Science (Information Security)
                      </h3>
                      <p className="text-white/80">Vellore Institute of Technology, Vellore, India</p>
                    </div>
                  </div>
                  <div className="text-right text-white/70 text-sm">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="h-4 w-4" />
                      Sep 2020 – Jul 2024
                    </div>
                    <div className="text-lg font-semibold text-white">GPA: 3.38/4.0</div>
                  </div>
                </div>
                <p className="text-white/80">
                  OOPS • Design & Algorithms • DBMS • AI • Expert Systems • Cyber Security <hr />
                  Coordinated Zero Waste Management Club, scaling campus-wide recycling participation and partnering with local organizations for 
                  sustainable practices. Organized Catalyst Club technical events including noticable the "Kryptonian" challenge, fostering collaborative 
                  problem-solving among 100+ participants.
                  Gained comprehensive computer science fundamentals while discovering my passion and gaining soft skills. 
                </p>
              </div>
            </div>

            {/* Scholarships & Awards Section */}
            <div className="space-y-6 mt-12 pt-8 border-t border-white/10">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Award className="h-7 w-7 text-yellow-400" />
                Scholarships & Awards
              </h3>
              
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Herbold ASU Graduate Engineering Scholarship</h3>
                      <p className="text-white/80 text-sm">Issued by Bob Herbold · Aug 2025</p>
                      <p className="text-white/70 text-xs mt-1">Arizona State University</p>
                    </div>
                  </div>
                  <div className="text-right text-white/70">
                    <div className="text-sm font-medium">Software / Computer Engineering</div>
                    <div className="text-xs">MS students</div>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Awarded for academic excellence and demonstrating exceptional potential in computer science. 
                  Recognizes outstanding achievement and commitment to technical innovation and research.
                </p>
              </div>
            </div>
          </div>
        )

      case 'publications':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Publications</h2>
            <div className="space-y-6">
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-8 w-8 text-white" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-white">Convergence of Blockchain and IoT</h3>
                        <GlassButton
                          asChild
                          variant="ghost"
                          size="sm"
                          className="hover:bg-white/20 hover:text-white border-white/20 text-xs px-3 py-1 h-auto"
                        >
                          <a 
                            href="https://doi.org/10.1007/978-981-97-8031-0_65"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            📄 View Paper
                          </a>
                        </GlassButton>
                      </div>
                      <p className="text-white/80 mb-1">Springer, 5th ICDSMLA Conference</p>
                      <p className="text-white/70 text-sm">Oct 2023 • DOI: 10.1007/978-981-97-8031-0_65</p>
                    </div>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Peer-reviewed work on blockchain–IoT integration architectures, exploring distributed 
                  ledgers and consensus mechanisms for decentralized networks.
                </p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (

    <div
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* Main content + footer all inside */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Content Container */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                Ranjana Tarini Ravikumar
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-4xl mx-auto">
                {/* Graduation */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur border-l-6 border-l-[#e29591]/70">
                  <p className="text-white text-sm">ASU Master's Degree</p>
                  <p className="text-white/60 text-xs">Graduating May 2026</p>
                </div>

                {/* Status */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur border-l-6 border-l-[#e29591]/70">
                  <p className="text-white text-sm">Actively Looking</p>
                  <p className="text-white/60 text-xs">Full-time Roles</p>
                </div>

                {/* Location */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur border-l-6 border-l-[#e29591]/70">
                  <p className="text-white text-sm">Arizona State University</p>
                  <p className="text-white/60 text-xs">Tempe, AZ, USA</p>
                </div>
              </div>

              <p className="text-white/70 text-xs sm:text-xs md:text-sm max-w-4xl mx-auto">
                I'm passionate about building intelligent applications that solve real-world problems through AI and machine learning. 
                Seeking opportunities in software development, AI integration, and data science where I can contribute to meaningful projects.
              </p>
            </div>


            {/* Navigation Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <GlassButton
                    key={section.id}
                    variant="ghost"
                    className="h-20 flex-col gap-2 hover:bg-white/20 hover:text-white transition-all duration-300 border-white/20"
                    onClick={() => setActiveSection(section.id)}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-sm font-medium">{section.label}</span>
                  </GlassButton>
                )
              })}
            </div>

            {/* Content Modal */}
            {activeSection && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                <GlassCard className="w-full max-w-5xl max-h-[90vh] overflow-y-auto border-white/20 shadow-2xl relative z-10">
                  <div className="relative p-6">
                    <GlassButton
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 hover:bg-white/20 hover:text-white z-10"
                      onClick={() => setActiveSection(null)}
                    >
                      <X className="h-4 w-4" />
                    </GlassButton>
                    <GlassCardContent className="pt-6">
                      {renderContent()}
                    </GlassCardContent>
                  </div>
                </GlassCard>
              </div>
            )}

            {/* Back to Home */}
            <div className="text-center mt-8 mb-4">
              <GlassButton
                variant="ghost"
                className="hover:bg-white/20 hover:text-white border-white/20"
                asChild
              >
                <Link to="/">Back to Home</Link>
              </GlassButton>
            </div>
          </div>
        </div>

        {/* Footer inside the z-10 container, so background continues behind */}
        <footer className="w-full border-t border-white/20 bg-black/20 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            {/* Left: label */}
            <div className="flex items-center gap-2 text-white/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Open to work</span>
            </div>

            {/* Right: contact info */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-8 text-white">
              {/* Call */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <Phone className="h-4 w-4 text-white/60" />
                <a
                  href="tel:+14804695292"
                  className="font-mono hover:underline text-white/90"
                >
                  +1 (623) 759-5172
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <Mail className="h-4 w-4 text-white/60" />
                <a
                  href="mailto:rraviku8@asu.edu"
                  className="font-mono hover:underline text-white/90"
                >
                  rraviku8@asu.edu
                </a>
              </div>

              {/* Social */}
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/ranjana-tarini-ravikumar-023842133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-7 w-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20"
                >
                  <span className="text-xs">in</span>
                </a>
                <a
                  href="https://github.com/ranjanaravikumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-7 w-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default About
