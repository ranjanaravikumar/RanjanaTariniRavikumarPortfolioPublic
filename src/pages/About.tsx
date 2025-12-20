import { useState } from "react"
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { X, User, FileText, Briefcase, Lightbulb, Award, Code, Download, ExternalLink, Calendar, MapPin, Github, Eye, Camera, Music, BookOpen, Gamepad2 } from "lucide-react"
import backgroundImage from "@/assets/background.jpg"
import { Link } from "react-router-dom";
import wallEdited from "@/assets/walledited.jpg"      // Slow Social & Close Circles
import deepWorkDrink from "@/assets/drink-1.jpg"      // Deep Work & Little Rituals
import joyPhoto from "@/assets/pic-2.jpg"             // Capturing Everyday Joy
import craft1 from "@/assets/IMG_0103.jpg"
import craft2 from "@/assets/IMG_0104.jpg"
import craft3 from "@/assets/IMG_0105.jpg"
import craft4 from "@/assets/IMG_0106.jpg"
import craft5 from "@/assets/IMG_0107.jpg"


type FlashcardProps = {
  title: string
  subtitle: string
  description: string
  image: string
  accent: string
}

const Flashcard = ({ title, subtitle, description, image, accent }: FlashcardProps) => (
  <div
    className="group relative min-w-[260px] md:min-w-[320px] h-56 rounded-2xl overflow-hidden snap-center
               bg-white/5 border border-white/15 cursor-pointer
               transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40">
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
   
    <div
      className="absolute left-0 top-0 h-1 w-full"
      style={{ background: accent }}/>
    <div className="relative h-full flex flex-col justify-between p-4">
      <div>
        <p className="text-[10px] uppercase tracking-wide text-white/70">
          {subtitle}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-white">
          {title}
        </h3>
      </div>
      <p className="text-xs text-white/85 leading-relaxed line-clamp-3 md:line-clamp-4 transition-all duration-300 group-hover:line-clamp-none">
        {description}
      </p>
    </div>
  </div>
)



const About = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const sections = [
    { id: 'intro', label: 'Intro', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'interests', label: 'Interests', icon: Lightbulb },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ]



  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Introduction</h2>
            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                Hello! I'm Ranjana Tarini Ravikumar, someone who loves asking "why," not just "how." At the heart of everything I do is a simple belief: every problem is a design opportunity, not a roadblock. Whether it's a bug in a project or a completely new idea, I enjoy breaking it down, understanding the moving pieces, and slowly shaping it into something that actually works and helps people, with the optimism that there's always a better version waiting to be built.
              </p>
              <p>
                I'm a very detail‑oriented thinker, but I don't like overcomplicating things just to sound "technical." I like keeping things clear and honest, and I enjoy the process of steadily improving something, one small decision at a time.
              </p>
              <p>
                My default mode is calm, curious, and persistent, and I tend to approach challenges with the mindset that they're figure‑out‑able. I enjoy balancing structure and flexibility, planning thoughtfully, but staying open to better ideas as I learn more and I try to bring a hopeful, forward‑looking attitude into every project and collaboration.
              </p>
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
                  href="https://drive.google.com/uc?export=download&id=1B-E9BtnUjTACgkaoEn0KaD-n0SjHi8Zx"
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
                src="https://drive.google.com/file/d/1B-E9BtnUjTACgkaoEn0KaD-n0SjHi8Zx/preview"
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
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Beyond the Code</h2>
            <p className="text-white/70 text-sm">
              The little things that make up who I am.
            </p>

            {/* HORIZONTAL FLASHCARD STRIP */}
            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
              <Flashcard
                title="Crafting & Thoughtful Details"
                subtitle="Handmade things"
                description="Enjoy creating handmade crafts and small personal projects, and value the effort and intention behind thoughtful, handcrafted gifts more than the object itself."
                image={craft1}
                accent="linear-gradient(90deg,#f97316,#facc15)"
              />
              <Flashcard
                title="Capturing Everyday Joy"
                subtitle="Photo diary"
                description="Treat social media like a personal photo diary, sharing happy moments and little wins to document growth, gratitude, and the people who matter."
                image={joyPhoto}
                accent="linear-gradient(90deg,#22c55e,#a3e635)"
              />
              <Flashcard
                title="Slow Social & Close Circles"
                subtitle="People first"
                description="An ambivert who enjoys unhurried hangouts, late-night conversations, and spending time with a close circle of friends more than big crowds."
                image={wallEdited}
                accent="linear-gradient(90deg,#6366f1,#a855f7)"
              />
              <Flashcard
                title="Deep Work & Little Rituals"
                subtitle="Focus mode"
                description="Loves long focus sessions with a can of energy drink nearby, getting immersed in building, debugging, and slowly improving things one intentional decision at a time."
                image={deepWorkDrink}
                accent="linear-gradient(90deg,#0ea5e9,#22d3ee)"
              />
            </div>
          </div>
        )


      case 'certifications':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
            <div className="space-y-6">
              {/* Certification 1 */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">AWS Certified Solutions Architect</h3>
                      <p className="text-white/80">Amazon Web Services</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-white/70 text-sm mb-2">
                      <Calendar className="h-4 w-4" />
                      2023
                    </div>
                    <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                      <Eye className="h-4 w-4 mr-2" />
                      View Credential
                    </GlassButton>
                  </div>
                </div>
                <p className="text-white/80">Comprehensive certification covering cloud architecture and AWS services.</p>
              </div>

              {/* Certification 2 */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">Google Data Analytics Certificate</h3>
                      <p className="text-white/80">Google</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-white/70 text-sm mb-2">
                      <Calendar className="h-4 w-4" />
                      2022
                    </div>
                    <GlassButton variant="ghost" size="sm" className="hover:bg-white/20 hover:text-white border-white/20">
                      <Eye className="h-4 w-4 mr-2" />
                      View Credential
                    </GlassButton>
                  </div>
                </div>
                <p className="text-white/80">Professional certificate program covering data analysis tools and techniques.</p>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ranjana Tarini Ravikumar
            </h1>
            <p className="text-white/70 text-lg">
              Explore my professional journey
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
              <GlassCard className="w-full max-w-4xl max-h-[90vh] overflow-y-auto border-white/20 shadow-2xl relative z-10">
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
          <div className="text-center mt-8">
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
    </div>
  )
}

export default About