'use client';

import { Button } from '@/components/ui/button';

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
                        DevGisoun
                    </div>

                    {/* 우측: 네비게이션 버튼들 */}
                    <nav className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            className="text-muted-foreground hover:text-foreground hover:bg-transparent transition-colors rounded-none"
                            onClick={() => scrollToSection('skills')}
                        >
                            기술 스택
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-muted-foreground hover:text-foreground hover:bg-transparent transition-colors rounded-none"
                            onClick={() => scrollToSection('projects')}
                        >
                            프로젝트
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-muted-foreground hover:text-foreground hover:bg-transparent transition-colors rounded-none"
                            onClick={() => scrollToSection('experience')}
                        >
                            경력
                        </Button>
                        <Button
                            className="bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-md ml-4"
                            onClick={() => scrollToSection('contact')}
                        >
                            Contact Me
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
