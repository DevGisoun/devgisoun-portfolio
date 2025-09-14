import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase } from "lucide-react";

const experiences = [
    {
        company: "TechCorp Inc.",
        position: "Senior Full Stack Developer",
        period: "2022 - Present",
        description:
            "Lead development of web applications serving 100K+ users. Architected microservices and improved system performance by 40%.",
    },
    {
        company: "StartupXYZ",
        position: "Frontend Developer",
        period: "2020 - 2022",
        description:
            "Built responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UIs.",
    },
    {
        company: "WebDev Agency",
        position: "Junior Developer",
        period: "2019 - 2020",
        description:
            "Developed client websites using modern web technologies. Learned best practices in code quality and project management.",
    },
];

export function ExperienceSection() {
    return (
        <section id="experience" className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                        <GraduationCap className="h-8 w-8 text-primary" />
                        경력 사항
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        다양한 환경에서의 개발 경험을 통해 성장해왔습니다.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {experiences.map((exp) => (
                        <Card
                            key={exp.company}
                            className="hover:shadow-md transition-shadow duration-300"
                        >
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-foreground mb-2">
                                            {exp.position}
                                        </h3>
                                        <div className="flex items-center gap-2 text-primary font-medium mb-3">
                                            <Briefcase className="h-4 w-4" />
                                            {exp.company}
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                    <Badge
                                        variant="outline"
                                        className="md:ml-4 whitespace-nowrap"
                                    >
                                        {exp.period}
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
