import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Calendar } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            Available for work
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                            안녕하세요! 👋
                            <br />
                            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                개발자 기순
                            </span>
                            입니다
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                            풀스택 개발자로서 사용자 중심의 웹 애플리케이션을
                            만들고 있습니다. 최신 기술을 활용하여 혁신적인
                            디지털 경험을 제공하는 것을 목표로 합니다.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button size="lg" variant="outline">
                                <FaGithub className="mr-2 h-4 w-4" />
                                GitHub
                            </Button>
                            <Button size="lg" variant="outline">
                                <FaLinkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>Seoul, Korea</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>3+ Years Experience</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full blur-xl animate-pulse"></div>
                            <Avatar className="h-64 w-64 border-4 border-background shadow-2xl relative z-10">
                                <AvatarImage
                                    src="/profile.jpg"
                                    alt="Developer Profile"
                                />
                                <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
                                    기순
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
