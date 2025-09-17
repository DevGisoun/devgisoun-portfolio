'use client';

import { BaseModal } from '@/components/modals/BaseModal';
import { FloatingActionButton } from '@/components/buttons/FloatingActionButton';

interface ImageDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
    altText: string;
}

/**
 * 이미지를 확대하여 보여주는 전용 모달 컴포넌트입니다.
 * @param isOpen - 모달의 열림 상태
 * @param onClose - 모달을 닫는 함수
 * @param imageUrl - 확대하여 보여줄 이미지의 URL
 * @param altText - 이미지의 대체 텍스트
 */
export function ImageDetailModal({
    isOpen,
    onClose,
    imageUrl,
    altText,
}: ImageDetailModalProps) {
    // ProjectDetailModal보다 높은 z-index 값을 설정 (예: 70)
    const baseZIndex = 70;

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} zIndex={baseZIndex}>
            <FloatingActionButton
                onClose={onClose}
                zIndex={baseZIndex + 2} // 버튼 z-index도 함께 높여줌
            />

            <div className="w-full h-full flex items-center justify-center p-4">
                <img
                    src={imageUrl}
                    alt={altText}
                    className="max-w-full max-h-full object-contain"
                    style={{ zIndex: baseZIndex + 1 }}
                />
            </div>
        </BaseModal>
    );
}
