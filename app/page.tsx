import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="pt-16">
                <HeroSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <ContactSection />
                <Footer />
            </div>
        </div>
    );
}
