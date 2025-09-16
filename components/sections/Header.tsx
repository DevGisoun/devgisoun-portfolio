'use client';

import { Button } from '../ui/button'; // 경로 수정
import { personalInfo, navLinks, contactLink } from '../../data'; // 경로 수정

export function Header() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex items-center justify-between h-16">
                    {/* 좌측: 닉네임 */}
                    <div className="font-bold text-xl text-foreground">
                        {personalInfo.nickname}
                    </div>

                    {/* 우측: 네비게이션 버튼들 (데이터 기반으로 렌더링) */}
                    <nav className="flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Button
                                key={link.sectionId}
                                variant="ghost"
                                className="text-muted-foreground hover:text-foreground hover:bg-transparent transition-colors rounded-none"
                                onClick={() => scrollToSection(link.sectionId)}
                            >
                                {link.label}
                            </Button>
                        ))}
                        <Button
                            className="bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-md ml-4"
                            onClick={() =>
                                scrollToSection(contactLink.sectionId)
                            }
                        >
                            {contactLink.label}
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
