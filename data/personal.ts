import { PersonalInfo, ContactInfo } from '@/types';

export const personalInfo: PersonalInfo = {
    name: '기순',
    nickname: 'DevGisoun',
    title: '풀스택 개발자',
    bio: '풀스택 개발자로서 사용자 중심의 웹 애플리케이션을 만들고 있습니다. 최신 기술을 활용하여 혁신적인 디지털 경험을 제공하는 것을 목표로 합니다.',
    avatar: '/profile.jpg',
    yearsOfExperience: 3,
    availability: true,
};

export const contactInfo: ContactInfo = {
    email: 'devgisoun@example.com',
    phone: '+82-10-0000-0000',
    location: 'Seoul, Korea',
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
