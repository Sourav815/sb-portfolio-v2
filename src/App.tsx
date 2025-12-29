import { Navbar } from './components/Navbar';
import { SocialSidebar } from './components/SocialSidebar';
import { Hero } from './components/Hero';
import { SectionHeader } from './components/SectionHeader';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import Projects from './components/AllProject';
import Experiences from './components/Experience';
import { AboutMe } from './components/AboutMe';
import Education from './components/Education';
import { AchievementItem } from './components/Achievement';
import { achievements } from './information';

function App() {
  return (
    <div className="min-h-screen bg-[#1c1a25] font-mono text-white selection:bg-primary selection:text-white">
      <Navbar />
      <SocialSidebar />

      <main className="max-w-5xl mx-auto px-6 md:px-0">
        <Hero />

        <AboutMe />
        {/* <Experiences /> */}
        <Experiences />

        {/* <Skills /> */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Projects Section */}
        <Education />


        <section id="contact" className="py-4 mb-4">
          <SectionHeader title="achievements" />
          <div className="space-y-2">
            {achievements.map((achievement, idx) => (
              <AchievementItem key={idx} {...achievement} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-4">
          <SectionHeader title="contacts" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-secondary">
              I’m open to freelance opportunities and collaborations. If you have a project in mind, a question, or just want to connect, feel free to reach out — I’d be happy to hear from you.
            </p>
            <div className="flex justify-start md:justify-end">
              <div className="border border-secondary p-4">
                <h4 className="text-white font-bold mb-4">Message me here</h4>
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/mail.svg" className="w-4 h-4 text-neutral-400 invert" alt="" />
                  sourav.bhunia@vehere.com
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/mail.svg" className="w-4 h-4 text-neutral-400 invert" alt="" />
                  souravbhunia162@gmail.com
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
