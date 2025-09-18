'use client';

import { Badge } from '@/components/ui/badge';
import { type Project } from '@/data';
import { ExpandableSection } from '@/components/sections/ExpandableSection';
import { BaseModal } from '@/components/modals/BaseModal';
import { DetailSection } from '@/components/sections/DetailSection';
import { FloatingActionButton } from '@/components/buttons/FloatingActionButton';
import { ProjectScreenshot } from '@/components/project/ProjectScreenshot';
import { InteractiveBadge } from '@/components/badges/InteractiveBadge';

interface ProjectDetailModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectDetailModal({
    project,
    isOpen,
    onClose,
}: ProjectDetailModalProps) {
    // 기본 z-index 값을 60으로 설정
    const baseZIndex = 60;

    const renderTroubleShootingDetail = (detail: string) => {
        if (detail.startsWith('[문제점]')) {
            return (
                <>
                    <Badge className="bg-red-500 text-white w-16 justify-center shrink-0">
                        문제점
                    </Badge>
                    <p className="flex-1">
                        {detail.replace('[문제점]', '').trim()}
                    </p>
                </>
            );
        }
        if (detail.startsWith('[해결]')) {
            return (
                <>
                    <Badge className="bg-green-600 text-white w-16 justify-center shrink-0">
                        해결
                    </Badge>
                    <p className="flex-1">
                        {detail.replace('[해결]', '').trim()}
                    </p>
                </>
            );
        }
        return <p>{detail}</p>;
    };

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} zIndex={baseZIndex}>
            <section
                className="relative w-full mx-auto bg-white pb-10 min-h-screen h-auto max-md:h-auto"
                style={{ zIndex: baseZIndex + 1 }} // 콘텐츠 영역 z-index 설정
            >
                <FloatingActionButton
                    onClose={onClose}
                    githubUrl={project.githubUrl}
                    deployUrl={project.deployUrl}
                    zIndex={baseZIndex + 2} // 버튼 z-index 설정
                />

                {/* Project Header */}
                <section className="relative flex flex-col items-center z-10 p-10 after:block after:absolute after:top-0 after:left-0 after:w-full after:h-[70%] after:bg-gradient-to-t after:from-black/30 after:-z-10">
                    {/* 동적 배경색을 위한 div 추가 */}
                    <div
                        className="absolute top-0 left-0 w-full h-[70%] -z-20"
                        style={{ backgroundColor: project.color || '#77D1FD' }}
                    ></div>

                    <div className="flex gap-1 mb-4">
                        {project.category?.map((cat) => (
                            <Badge
                                key={cat}
                                className="flex items-center justify-center text-xs text-white bg-gray-800 px-3 py-1 rounded"
                            >
                                {cat}
                            </Badge>
                        )) || <></>}
                    </div>
                    <h1 className="text-white text-4xl text-center font-bold mt-2 mb-4">
                        {project.title}
                    </h1>
                    <div className="flex gap-5 mb-4">
                        <span className="text-white text-sm">
                            {project.period || ''}
                        </span>
                        <span className="text-white text-sm">
                            {project.teamInfo || ''}
                        </span>
                    </div>
                    <div className="bg-white border-gray-300 border-[0.0625rem] p-3 w-[calc(100vw-60vw)] rounded-[2.125rem] max-md:w-[calc(100vw-10vw)]">
                        <img
                            src={project.thumbnail}
                            alt="프로젝트 대표 이미지"
                            className="w-full rounded-[2.125rem]"
                            onError={(e) => {
                                (
                                    e.target as HTMLImageElement
                                ).src = `https://placehold.co/800x450/f1f5f9/64748b?text=${encodeURIComponent(
                                    project.title
                                )}`;
                            }}
                        />
                    </div>
                </section>

                {/* Content Section */}
                <section className="px-[20%] pb-10 flex flex-col gap-10 text-base max-md:px-[5%]">
                    <div className="text-center border-b border-gray-300 pb-10">
                        <p className="leading-relaxed">
                            {project.detailedDescription || '프로젝트 소개'}
                        </p>
                    </div>

                    <DetailSection title="🔍 주요 기능 및 특징">
                        <ul className="flex flex-col gap-1">
                            {(project.features || []).map((feature, index) => (
                                <li
                                    key={index}
                                    className="pl-2.5 relative before:absolute before:w-1 before:h-1 before:bg-black before:block before:rounded-full before:left-0 before:top-[0.625rem]"
                                >
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </DetailSection>

                    <DetailSection title="🛠️ 사용 기술 및 언어">
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <InteractiveBadge
                                    key={tech}
                                    className="px-3 py-1 text-sm font-medium"
                                >
                                    {tech}
                                </InteractiveBadge>
                            ))}
                        </div>
                    </DetailSection>

                    <DetailSection title="✨ 작업 기여도">
                        <div className="flex flex-col gap-1">
                            {(project.contributions || []).map(
                                (contribution, index) => (
                                    <ExpandableSection
                                        key={index}
                                        title={<p>{contribution.title}</p>}
                                        hasDetails={
                                            !!contribution.details &&
                                            contribution.details.length > 0
                                        }
                                    >
                                        <ul className="flex flex-col gap-3">
                                            {contribution.details?.map(
                                                (detail, detailIndex) => (
                                                    <li
                                                        key={detailIndex}
                                                        className="relative flex gap-1 pl-3 before:absolute before:w-1 before:h-1 before:bg-black before:block before:rounded-full before:left-0 before:top-[0.625rem]"
                                                    >
                                                        <p>{detail}</p>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </ExpandableSection>
                                )
                            )}
                        </div>
                    </DetailSection>

                    <DetailSection title="💫 Trouble Shooting">
                        <div className="flex flex-col gap-1">
                            {(project.troubleShooting || []).map(
                                (trouble, index) => (
                                    <ExpandableSection
                                        key={index}
                                        title={<p>{trouble.title}</p>}
                                        hasDetails={
                                            !!trouble.details &&
                                            trouble.details.length > 0
                                        }
                                    >
                                        <ul className="flex flex-col gap-3">
                                            {trouble.details.map(
                                                (detail, detailIndex) => (
                                                    <li
                                                        key={detailIndex}
                                                        className="flex items-start gap-2"
                                                    >
                                                        {renderTroubleShootingDetail(
                                                            detail
                                                        )}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </ExpandableSection>
                                )
                            )}
                        </div>
                    </DetailSection>

                    {project.screenshots && (
                        <DetailSection
                            title="💻 작업 화면"
                            subtitle={
                                <>
                                    이미지 클릭 시 크게 볼 수 있습니다.
                                    (작업화면이 현재와 다를 수 있습니다.)
                                    <br />* 저작권 이슈가 있는 경우 첨부하지
                                    않았습니다.
                                </>
                            }
                        >
                            <ProjectScreenshot
                                screenshots={project.screenshots}
                            />
                        </DetailSection>
                    )}
                </section>
            </section>
        </BaseModal>
    );
}
