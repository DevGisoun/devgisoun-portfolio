import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Briefcase } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: 'E-Commerce Platform',
        description:
            'Full-stack e-commerce solution with Next.js, featuring user authentication, payment integration, and admin dashboard.',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
        link: 'https://github.com/devgisoun/ecommerce',
        live: 'https://ecommerce-demo.com',
    },
    {
        title: 'Task Management App',
        description:
            'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        link: 'https://github.com/devgisoun/taskmanager',
        live: 'https://taskmanager-demo.com',
    },
    {
        title: 'AI Chat Assistant',
        description:
            'Intelligent chat assistant powered by OpenAI API with custom knowledge base and conversation memory.',
        tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
        link: 'https://github.com/devgisoun/ai-assistant',
        live: 'https://ai-assistant-demo.com',
    },
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                        <Briefcase className="h-8 w-8 text-primary" />
                        주요 프로젝트
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        다양한 도메인에서 사용자 중심의 애플리케이션을
                        개발했습니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/5 hover:-translate-y-1"
                        >
                            <CardHeader>
                                <CardTitle className="flex items-start justify-between gap-2">
                                    <span className="group-hover:text-primary transition-colors">
                                        {project.title}
                                    </span>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {project.link ? (
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="h-8 w-8"
                                            >
                                                <FaGithub className="h-4 w-4" />
                                            </Button>
                                        ) : (
                                            <div className="h-4 w-4"></div>
                                        )}

                                        {project.live ? (
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="h-8 w-8"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </Button>
                                        ) : (
                                            <div className="h-4 w-4"></div>
                                        )}
                                    </div>
                                </CardTitle>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="outline"
                                            className="text-xs"
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
    );
}
