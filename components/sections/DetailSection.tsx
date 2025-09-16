'use client';

import { type ReactNode } from 'react';

interface DetailSectionProps {
    title: ReactNode;
    subtitle?: ReactNode;
    children: ReactNode;
}

/**
 * 제목과 콘텐츠 영역으로 구성된 범용 상세 정보 섹션 컴포넌트입니다.
 * @param title - 섹션의 주 제목
 * @param subtitle - 섹션의 부가 설명 (optional)
 * @param children - 섹션의 주 콘텐츠
 */
export function DetailSection({
    title,
    subtitle,
    children,
}: DetailSectionProps) {
    return (
        <div>
            <h3 className="text-2xl font-bold mt-2 mb-4">
                {title}
                {subtitle && (
                    <p className="text-sm font-medium text-gray-600">
                        {subtitle}
                    </p>
                )}
            </h3>
            {children}
        </div>
    );
}
