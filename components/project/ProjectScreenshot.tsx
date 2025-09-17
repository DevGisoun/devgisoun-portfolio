'use client';

import { useState } from 'react';
import { type Project } from '../../types';
import { ImageDetailModal } from '@/components/modals/ImageDetailModal'; // 경로 수정

interface ProjectScreenshotProps {
    screenshots: NonNullable<Project['screenshots']>;
}

/**
 * 프로젝트 스크린샷들을 그리드 형태로 보여주는 갤러리 컴포넌트입니다.
 * 이미지 클릭 시 ImageDetailModal을 통해 이미지를 확대하여 보여줍니다.
 * @param screenshots - url과 caption을 포함하는 스크린샷 객체 배열
 */
export function ProjectScreenshot({ screenshots }: ProjectScreenshotProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <div className="grid grid-cols-3 gap-3 max-xl:grid-cols-2">
                {screenshots.map((screenshot, index) => (
                    <div
                        key={index}
                        className="cursor-pointer flex flex-col gap-1 items-center hover:opacity-80"
                        onClick={() => handleImageClick(screenshot.url)}
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
                ))}
            </div>

            {/* 이미지 확대 모달 */}
            {selectedImage && (
                <ImageDetailModal
                    isOpen={!!selectedImage}
                    onClose={handleCloseModal}
                    imageUrl={selectedImage}
                    altText="확대된 프로젝트 스크린샷"
                />
            )}
        </>
    );
}
