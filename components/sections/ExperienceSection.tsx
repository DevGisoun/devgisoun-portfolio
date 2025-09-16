import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';
import { experiences } from '@/data';

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
                            key={`${exp.company}-${exp.position}`}
                            className="hover:shadow-md transition-shadow duration-300"
                        >
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-foreground mb-2">
                                            {exp.position}
                                        </h3>
                                        <div className="flex items-center gap-2 text-primary font-medium mb-2">
                                            <Briefcase className="h-4 w-4" />
                                            {exp.company}
                                        </div>
                                        {exp.location && (
                                            <div className="flex items-center gap-2 text-muted-foreground mb-3">
                                                <MapPin className="h-4 w-4" />
                                                {exp.location}
                                            </div>
                                        )}
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* 주요 성과 */}
                                        {exp.achievements &&
                                            exp.achievements.length > 0 && (
                                                <div className="mb-4">
                                                    <h4 className="text-sm font-semibold text-foreground mb-2">
                                                        주요 성과
                                                    </h4>
                                                    <ul className="space-y-1">
                                                        {exp.achievements.map(
                                                            (
                                                                achievement,
                                                                index
                                                            ) => (
                                                                <li
                                                                    key={index}
                                                                    className="text-sm text-muted-foreground flex items-start"
                                                                >
                                                                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                                    {
                                                                        achievement
                                                                    }
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )}

                                        {/* 사용 기술 */}
                                        {exp.technologies &&
                                            exp.technologies.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map(
                                                        (tech) => (
                                                            <Badge
                                                                key={tech}
                                                                variant="outline"
                                                                className="text-xs"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                    </div>
                                    <Badge
                                        variant="outline"
                                        className="md:ml-4 whitespace-nowrap self-start"
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
