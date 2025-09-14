"use client";

import { Button } from "@/components/ui/button";

export function Header() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* 좌측: 닉네임 */}
                    <div className="font-bold text-xl text-foreground">
                        DevGisoun
                    </div>

                    {/* 우측: 네비게이션 버튼들 */}
                    <nav className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            className="text-neutral-600 font-medium hover:text-black hover:bg-transparent transition-colors rounded-none cursor-pointer"
                            onClick={() => scrollToSection("skills")}
                        >
                            기술 스택
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-neutral-600 font-medium hover:text-black hover:bg-transparent transition-colors rounded-none cursor-pointer"
                            onClick={() => scrollToSection("projects")}
                        >
                            프로젝트
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-neutral-600 font-medium hover:text-black hover:bg-transparent transition-colors rounded-none cursor-pointer"
                            onClick={() => scrollToSection("experience")}
                        >
                            경력
                        </Button>
                        <Button
                            className="bg-foreground text-background hover:bg-neutral-700 transition-colors rounded-md ml-4"
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact Me
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
