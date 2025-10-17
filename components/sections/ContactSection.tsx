'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog'; // AlertDialog import 추가
import { Award, HardHatIcon } from 'lucide-react';
import { useState } from 'react';
import { sectionHeadings } from '../../data'; // 경로 수정

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    // Alert Dialog의 열림/닫힘 상태를 관리하기 위한 state
    const [isAlertOpen, setIsAlertOpen] = useState(false);

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
        // 실제 폼 제출 로직 대신 Alert Dialog를 열도록 설정
        setIsAlertOpen(true);
    };

    return (
        <section id="contact" className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
                        <Award className="h-8 w-8 text-white" />
                        {sectionHeadings.contact.title}
                    </h2>
                    <p className="text-neutral-300 mb-8 text-lg leading-relaxed">
                        {sectionHeadings.contact.subtitle}
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <Card className="bg-gray-800/50 border-slate-700">
                        <CardContent className="p-8">
                            {/* 구현 후 제거 필요 - START */}
                            <div className="flex flex-col items-center justify-center gap-2 text-center">
                                <HardHatIcon className="h-8 w-8 text-red-300" />
                                <label
                                    htmlFor="name"
                                    className="block text-lg font-medium text-red-400 mb-4"
                                >
                                    준비 중인 기능입니다.
                                </label>
                            </div>
                            {/* 구현 후 제거 필요 - END */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Input fields... (생략) */}
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
                                            // required
                                            className="bg-slate-700 border-slate-600 text-white placeholder:text-neutral-400 focus:border-slate-500 focus:ring-slate-500"
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
                                            // required
                                            className="bg-slate-700 border-slate-600 text-white placeholder:text-neutral-400 focus:border-slate-500 focus:ring-slate-500"
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
                                        // required
                                        className="bg-slate-700 border-slate-600 text-white placeholder:text-neutral-400 focus:border-slate-500 focus:ring-slate-500"
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
                                        rows={8}
                                        // required
                                        className="bg-slate-700 border-slate-600 text-white placeholder:text-neutral-400 focus:border-slate-500 focus:ring-slate-500"
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
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* "준비 중" 알림을 위한 Alert Dialog */}
            <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>알림</AlertDialogTitle>
                        <AlertDialogDescription>
                            준비 중인 기능입니다.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        {/* AlertDialogAction은 기본적으로 다이얼로그를 닫습니다. */}
                        <AlertDialogAction className="bg-black text-white hover:bg-black/90">
                            확인
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </section>
    );
}
