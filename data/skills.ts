import { Skill } from '@/types';

export const skills: Skill[] = [
    // Frontend
    {
        name: 'Flutter',
        category: 'frontend',
        level: 'advanced',
    },
    {
        name: 'React',
        category: 'frontend',
        level: 'advanced',
    },
    {
        name: 'jQuery',
        category: 'frontend',
        level: 'advanced',
    },

    // Backend
    {
        name: 'Spring Boot',
        category: 'backend',
        level: 'advanced',
    },
    {
        name: 'Nest.js',
        category: 'backend',
        level: 'advanced',
    },
    {
        name: 'FastAPI',
        category: 'backend',
        level: 'advanced',
    },

    // Database
    {
        name: 'MySQL',
        category: 'database',
        level: 'advanced',
    },
    {
        name: 'MariaDB',
        category: 'database',
        level: 'advanced',
    },
    {
        name: 'InfluxDB',
        category: 'database',
        level: 'advanced',
    },
    {
        name: 'Firebase',
        category: 'database',
        level: 'advanced',
    },

    // Language
    {
        name: 'Java',
        category: 'language',
        level: 'advanced',
    },
    {
        name: 'TypeScript',
        category: 'language',
        level: 'advanced',
    },
    {
        name: 'JavaScript',
        category: 'language',
        level: 'advanced',
    },
    {
        name: 'Python',
        category: 'language',
        level: 'advanced',
    },

    // DevOps & Tools
    {
        name: 'RabbitMQ',
        category: 'tools',
        level: 'advanced',
    },
    {
        name: 'AWS',
        category: 'devops',
        level: 'advanced',
    },
    {
        name: 'Docker',
        category: 'devops',
        level: 'advanced',
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
