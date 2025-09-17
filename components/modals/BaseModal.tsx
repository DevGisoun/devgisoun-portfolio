'use client';

import { useEffect, type ReactNode } from 'react';

interface BaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    /**
     * 모달의 z-index 값을 직접 설정할 수 있도록 prop 추가
     * 기본값은 60으로 설정
     */
    zIndex?: number;
}

/**
 * 모달의 기본 레이아웃과 동작(배경 오버레이, 닫기 기능 등)을 제공하는 범용 모달 컴포넌트입니다.
 * @param isOpen - 모달의 열림 상태
 * @param onClose - 모달을 닫는 함수
 * @param children - 모달 내부에 표시될 콘텐츠
 * @param zIndex - 모달의 z-index 값 (optional)
 */
export function BaseModal({
    isOpen,
    onClose,
    children,
    zIndex = 60, // 기본 z-index
}: BaseModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            // 이벤트 전파를 막아 다른 모달이 닫히지 않도록 함
            e.stopPropagation();
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            // 모든 모달이 닫혔을 때만 스크롤을 복구하기 위해,
            // 이 로직은 최상위 컴포넌트에서 관리하는 것이 더 좋을 수 있으나,
            // 현재 구조에서는 그대로 둡니다.
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 overflow-y-auto py-10 px-40 max-md:px-0 max-md:py-0"
            style={{ zIndex }} // z-index를 동적으로 설정
        >
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                onClick={handleOverlayClick}
                style={{ zIndex: zIndex - 1 }} // 오버레이는 모달보다 한 단계 아래에 위치
            />
            {children}
        </div>
    );
}
