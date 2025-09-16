'use client';

import { Button } from '../ui/button'; // 경로 수정
import { X, Github, ExternalLink } from 'lucide-react';

interface FloatingActionButtonProps {
    onClose: () => void;
    githubUrl?: string;
    deployUrl?: string;
}

/**
 * 모달 우측 상단에 고정되는 닫기, GitHub, 배포 링크 버튼 그룹입니다.
 * @param onClose - 닫기 버튼 클릭 시 호출될 함수
 * @param githubUrl - GitHub 링크 (optional)
 * @param deployUrl - 배포 사이트 링크 (optional)
 */
export function FloatingActionButton({
    onClose,
    githubUrl,
    deployUrl,
}: FloatingActionButtonProps) {
    return (
        <div className="fixed top-10 right-[3rem] flex flex-col items-center gap-5 z-[62] max-md:sticky max-md:flex-row-reverse max-md:justify-between max-md:top-0 max-md:right-0 max-md:bg-white max-md:backdrop-blur-sm max-md:px-3 max-md:py-2 max-md:border-solid max-md:border-b max-md:border-gray-300">
            <Button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-600 p-0"
                variant="ghost"
            >
                <X className="h-5 w-5" />
            </Button>
            <div className="flex flex-col gap-5 max-md:flex-row max-md:gap-4">
                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="relative flex flex-col items-center justify-center gap-1 px-3 w-full group max-md:px-0"
                    >
                        <div className="w-[47px] h-[47px] flex items-center justify-center bg-white border border-gray-300 rounded-full max-md:w-[37px] max-md:h-[37px]">
                            <Github className="h-5 w-5 max-md:h-4 max-md:w-4" />
                        </div>
                        <span className="text-white text-xs font-medium max-md:text-black max-md:hidden">
                            GitHub
                        </span>
                    </a>
                )}
                {deployUrl && (
                    <a
                        href={deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="배포 링크"
                        className="relative flex flex-col items-center justify-center gap-1 px-3 w-full group max-md:px-0"
                    >
                        <div className="w-[47px] h-[47px] flex items-center justify-center bg-white border border-gray-300 rounded-full max-md:w-[37px] max-md:h-[37px]">
                            <ExternalLink className="h-5 w-5 max-md:h-4 max-md:w-4" />
                        </div>
                        <span className="text-white text-xs font-medium max-md:text-black max-md:hidden">
                            배포 링크
                        </span>
                    </a>
                )}
            </div>
        </div>
    );
}
