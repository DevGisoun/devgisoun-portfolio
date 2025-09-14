'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Award } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: 실제 폼 제출 로직 구현
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
                        <Award className="h-8 w-8 text-white" />
                        함께 일해요!
                    </h2>
                    <p className="text-neutral-300 mb-8 text-lg leading-relaxed">
                        새로운 프로젝트나 흥미로운 기회에 대해 이야기하고
                        싶으시다면 언제든 연락해 주세요. 함께 멋진 것을
                        만들어봅시다!
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-white mb-2"
                                >
                                    이름
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="이름을 입력해주세요"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-slate-800 border-slate-700 text-white placeholder:text-neutral-400 focus:border-slate-600 focus:ring-slate-600"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-white mb-2"
                                >
                                    이메일
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="example@email.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-slate-800 border-slate-700 text-white placeholder:text-neutral-400 focus:border-slate-600 focus:ring-slate-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-white mb-2"
                            >
                                문의 제목
                            </label>
                            <Input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="문의 제목을 입력해주세요"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                                className="bg-slate-800 border-slate-700 text-white placeholder:text-neutral-400 focus:border-slate-600 focus:ring-slate-600"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-white mb-2"
                            >
                                문의 내용
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="문의 내용을 입력해주세요 (최대 500자)"
                                value={formData.message}
                                onChange={handleInputChange}
                                maxLength={500}
                                rows={6}
                                required
                                className="bg-slate-800 border-slate-700 text-white placeholder:text-neutral-400 focus:border-slate-600 focus:ring-slate-600 resize-none"
                            />
                            <div className="text-right text-sm text-neutral-400 mt-1">
                                {formData.message.length}/500
                            </div>
                        </div>

                        <div className="text-center">
                            <Button
                                type="submit"
                                size="lg"
                                className="bg-white text-black hover:bg-neutral-700 hover:text-white transition-colors px-8 py-3"
                            >
                                문의하기
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
