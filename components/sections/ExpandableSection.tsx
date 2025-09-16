'use client';

import { useState, type ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface ExpandableSectionProps {
    title: ReactNode;
    children: ReactNode;
    // 콘텐츠가 없으면 확장 기능을 비활성화하기 위한 optional prop
    hasDetails?: boolean;
}

/**
 * 클릭 시 콘텐츠를 확장/축소하는 아코디언 UI 컴포넌트입니다.
 * 자체적으로 열림/닫힘 상태를 관리합니다.
 * @param title - 항상 표시되는 제목 영역의 ReactNode
 * @param children - 확장 시 표시될 콘텐츠 영역의 ReactNode
 * @param hasDetails - 콘텐츠가 있을 경우에만 확장 기능을 활성화 (기본값: true)
 */
export function ExpandableSection({
    title,
    children,
    hasDetails = true,
}: ExpandableSectionProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        // 상세 내용이 있을 경우에만 상태 변경
        if (hasDetails) {
            setIsOpen((prev) => !prev);
        }
    };

    return (
        <div className="flex flex-col">
            <div
                className={`flex gap-2 items-center bg-gray-100 py-2 px-3 font-medium transition-all hover:bg-gray-200 ${
                    hasDetails ? 'cursor-pointer' : 'cursor-default'
                }`}
                onClick={handleToggle}
            >
                {/* 아이콘 공간 유지를 위해 항상 렌더링하고 opacity로 제어 */}
                <ChevronRight
                    className={`transition-all h-4 w-4 ${
                        isOpen ? 'rotate-90' : ''
                    } ${hasDetails ? 'opacity-100' : 'opacity-0'}`}
                    strokeWidth={2.5}
                />
                <div className="text-base flex-1">{title}</div>
            </div>
            {isOpen && hasDetails && (
                <div className="py-2 px-3 bg-gray-50">{children}</div>
            )}
        </div>
    );
}
