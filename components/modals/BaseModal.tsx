'use client';

import { useEffect, type ReactNode } from 'react';

interface BaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

/**
 * 모달의 기본 레이아웃과 동작(배경 오버레이, 닫기 기능 등)을 제공하는 범용 모달 컴포넌트입니다.
 * @param isOpen - 모달의 열림 상태
 * @param onClose - 모달을 닫는 함수
 * @param children - 모달 내부에 표시될 콘텐츠
 */
export function BaseModal({ isOpen, onClose, children }: BaseModalProps) {
    useEffect(() => {
        // ESC 키를 누르면 모달이 닫히도록 설정
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // 모달이 열려있을 때 배경 스크롤 방지
            document.body.style.overflow = 'hidden';
        }

        // 컴포넌트가 언마운트될 때 이벤트 리스너와 스타일을 정리
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    // 모달 배경 클릭 시 닫히도록 설정
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-[60] overflow-y-auto py-10 px-40 max-md:px-0 max-md:py-0"
            // 오버레이 클릭 이벤트를 위해 div에 직접 핸들러를 연결하지 않고,
            // 내부 배경 div에서 처리하도록 하여 children으로 전달된 콘텐츠의 클릭 이벤트가
            // 버블링되어 모달이 닫히는 것을 방지합니다.
        >
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[59]"
                onClick={handleOverlayClick}
            />
            {children}
        </div>
    );
}
