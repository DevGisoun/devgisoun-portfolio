/**
 * 사이트 전반에 사용되는 설정 및 텍스트를 관리합니다.
 */

// 사이트 기본 정보
export const siteConfig = {
    name: 'DevGisoun',
    footerText: `© ${new Date().getFullYear()} DevGisoun. Made with ❤️ using Next.js & Tailwind CSS`,
};

// 헤더 네비게이션 링크 배열
export const navLinks = [
    {
        label: '기술 스택',
        sectionId: 'skills',
    },
    {
        label: '프로젝트',
        sectionId: 'projects',
    },
    {
        label: '경력',
        sectionId: 'experience',
    },
];

// 헤더의 Contact Me 버튼 링크
export const contactLink = {
    label: 'Contact Me',
    sectionId: 'contact',
};
