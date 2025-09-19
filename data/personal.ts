import { PersonalInfo, ContactInfo } from '@/types';

export const personalInfo: PersonalInfo = {
    name: '이해찬',
    nickname: 'DevGisoun',
    title: '기술로 비즈니스 문제를 해결하는 풀스택 개발자',
    bio: '웹과 모바일의 경계를 넘나들며 기술로 비즈니스 문제를 해결하는 풀스택 개발자입니다.\n사용자 경험 개선과 개발 생산성 향상을 위해 능동적으로 시스템을 개선하고 언제나 새로운 기술을 탐색하는 것을 즐깁니다.',
    avatar: '/avatar.jpg',
    totalMonthsOfExperience: 35,
    availability: true,
};

export const contactInfo: ContactInfo = {
    email: 'devgisoun@example.com',
    github: 'https://github.com/devgisoun',
    linkedin: 'https://linkedin.com/in/devgisoun',
    portfolio: 'https://devgisoun.dev',
};

// 소셜 미디어 링크 배열 (컴포넌트에서 반복 처리용)
export const socialLinks = [
    {
        name: 'GitHub',
        url: contactInfo.github,
        icon: 'github',
    },
    {
        name: 'LinkedIn',
        url: contactInfo.linkedin,
        icon: 'linkedin',
    },
] as const;
