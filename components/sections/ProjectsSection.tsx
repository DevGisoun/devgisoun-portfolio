'use client';

import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';
import { useState } from 'react';
import { ProjectDetailModal } from '@/components/modals/ProjectDetailModal';
import { projects, type Project } from '@/data';

export function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            className="group flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-0 gap-0"
                        >
                            <div className="relative">
                                <img
                                    src={project.thumbnail}
                                    alt={`${project.title} thumbnail`}
                                    className="object-cover w-full h-auto aspect-video"
                                    onError={(e) => {
                                        (
                                            e.target as HTMLImageElement
                                        ).src = `https://placehold.co/600x400/e2e8f0/64748b?text=Image+Not+Found`;
                                    }}
                                />
                                <div className="absolute inset-0 z-10 bg-white/0 group-hover:bg-white/20 transition-colors duration-300 flex items-center justify-center">
                                    <Button
                                        className="bg-black text-white rounded-md px-6 py-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-20"
                                        onClick={() =>
                                            handleProjectClick(project)
                                        }
                                    >
                                        자세히 보기
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 p-6">
                                <CardTitle className="mb-2 text-xl font-semibold">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="flex-1 mb-4">
                                    {project.description}
                                </CardDescription>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.slice(0, 3).map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="text-xs font-medium"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <Badge
                                            variant="outline"
                                            className="text-xs font-medium"
                                        >
                                            +{project.tech.length - 3}
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* 프로젝트 상세 모달 */}
            {selectedProject && (
                <ProjectDetailModal
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                />
            )}
        </section>
    );
}
