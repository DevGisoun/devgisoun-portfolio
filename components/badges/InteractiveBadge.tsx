'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface InteractiveBadgeProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

/**
 * 마우스 호버 시 스타일이 변경되는 재사용 가능한 Badge 컴포넌트입니다.
 * SkillsSection의 스타일을 기본으로 사용합니다.
 * @param children - 배지 내부에 표시될 콘텐츠
 * @param className - 추가적인 Tailwind CSS 클래스 (optional)
 */
export function InteractiveBadge({
    children,
    className,
    style,
}: InteractiveBadgeProps) {
    return (
        <Badge
            variant="secondary"
            className={cn(
                'px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer transform hover:scale-105',
                className
            )}
            style={style}
        >
            {children}
        </Badge>
    );
}
