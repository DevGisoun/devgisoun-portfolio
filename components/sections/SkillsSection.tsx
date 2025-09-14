import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "JavaScript",
    "TailwindCSS",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
];

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                        <Code className="h-8 w-8 text-primary" />
                        기술 스택
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        다양한 기술을 활용하여 확장 가능하고 효율적인 솔루션을
                        구축합니다.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer transform hover:scale-105"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                animation: "fadeInUp 0.6s ease forwards",
                            }}
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    );
}
