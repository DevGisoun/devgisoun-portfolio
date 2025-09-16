import { Skill } from '@/types';

export const skills: Skill[] = [
    // Frontend
    {
        name: 'TypeScript',
        category: 'frontend',
        level: 'advanced',
    },
    {
        name: 'React',
        category: 'frontend',
        level: 'advanced',
    },
    {
        name: 'Next.js',
        category: 'frontend',
        level: 'advanced',
    },
    {
        name: 'JavaScript',
        category: 'frontend',
        level: 'expert',
    },
    {
        name: 'TailwindCSS',
        category: 'frontend',
        level: 'advanced',
    },

    // Backend
    {
        name: 'Node.js',
        category: 'backend',
        level: 'advanced',
    },
    {
        name: 'Python',
        category: 'language',
        level: 'intermediate',
    },

    // Database
    {
        name: 'PostgreSQL',
        category: 'database',
        level: 'intermediate',
    },
    {
        name: 'MongoDB',
        category: 'database',
        level: 'intermediate',
    },

    // DevOps & Tools
    {
        name: 'AWS',
        category: 'devops',
        level: 'intermediate',
    },
    {
        name: 'Docker',
        category: 'devops',
        level: 'intermediate',
    },
    {
        name: 'Git',
        category: 'tools',
        level: 'advanced',
    },
];

// 카테고리별 기술 스택을 반환하는 유틸리티 함수
export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
    return skills.filter((skill) => skill.category === category);
};

// 레벨별 기술 스택을 반환하는 유틸리티 함수
export const getSkillsByLevel = (level: Skill['level']): Skill[] => {
    return skills.filter((skill) => skill.level === level);
};

// 기술 스택 이름만 반환하는 유틸리티 함수 (기존 호환성 유지)
export const getSkillNames = (): string[] => {
    return skills.map((skill) => skill.name);
};
