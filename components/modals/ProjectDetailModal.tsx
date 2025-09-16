'use client';

import { Badge } from '../ui/badge'; // 경로 수정
import { type Project } from '../../data'; // 경로 수정
import { ExpandableSection } from '../sections/ExpandableSection'; // 경로 수정
import { BaseModal } from './BaseModal'; // 경로 수정
import { DetailSection } from '../sections/DetailSection'; // 경로 수정
import { FloatingActionButton } from '../buttons/FloatingActionButton'; // 경로 수정

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
    return (
        <BaseModal isOpen={isOpen} onClose={onClose}>
            <section className="relative w-full mx-auto bg-white pb-10 min-h-screen h-auto max-md:h-auto z-[61]">
                <FloatingActionButton
                    onClose={onClose}
                    githubUrl={project.githubUrl}
                    deployUrl={project.deployUrl}
                />

                {/* Project Header */}
                <section className="relative flex flex-col items-center z-[1] p-10 before:block before:absolute before:top-0 before:left-0 before:w-full before:bg-[#77D1FD] before:h-[70%] before:z-[-1] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-[70%] after:bg-gradient-to-t after:from-black/30 after:z-[-1]">
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
                        <div className="flex flex-col gap-1">
                            {project.tech.map((tech) => (
                                <ExpandableSection
                                    key={tech}
                                    title={<p>{tech}</p>}
                                >
                                    <p className="text-sm text-gray-600">
                                        {tech}를 활용하여 프로젝트를
                                        구현했습니다.
                                    </p>
                                </ExpandableSection>
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
                            <div className="grid grid-cols-3 gap-3 max-xl:grid-cols-2">
                                {project.screenshots.map(
                                    (screenshot, index) => (
                                        <div
                                            key={index}
                                            className="cursor-pointer flex flex-col gap-1 items-center hover:opacity-80"
                                        >
                                            <img
                                                src={screenshot.url}
                                                alt="프로젝트 구현 화면"
                                                className="border border-gray-300"
                                                onError={(e) => {
                                                    (
                                                        e.target as HTMLImageElement
                                                    ).src = `https://placehold.co/400x300/f1f5f9/64748b?text=Screenshot`;
                                                }}
                                            />
                                            <p className="text-sm text-gray-600 max-md:text-xs">
                                                {screenshot.caption}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        </DetailSection>
                    )}
                </section>
            </section>
        </BaseModal>
    );
}
