import { Button } from "@/components/ui/button";
import { Mail, Award } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export function ContactSection() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center gap-3">
                        <Award className="h-8 w-8 text-primary" />
                        함께 일해요!
                    </h2>
                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                        새로운 프로젝트나 흥미로운 기회에 대해 이야기하고
                        싶으시다면 언제든 연락해 주세요. 함께 멋진 것을
                        만들어봅시다!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg">
                            <Mail className="mr-2 h-4 w-4" />
                            gisoun.dev@gmail.com
                        </Button>
                        <Button size="lg" variant="outline">
                            <FaLinkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
