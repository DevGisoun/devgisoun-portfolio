export interface Project {
    title: string;
    description: string;
    tech: string[];
    thumbnail: string;
    category?: string[];
    period?: string;
    teamInfo?: string;
    detailedDescription?: string;
    githubUrl?: string;
    deployUrl?: string;
    features?: string[];
    techDetails?: { name: string; description?: string }[];
    contributions?: { title: string; details?: string[] }[];
    troubleShooting?: { title: string; details: string[] }[];
    screenshots?: { url: string; caption: string }[];
}

export interface Experience {
    company: string;
    position: string;
    period: string;
    description: string;
    location?: string;
    achievements?: string[];
    technologies?: string[];
}

export interface Skill {
    name: string;
    category:
        | 'frontend'
        | 'backend'
        | 'database'
        | 'devops'
        | 'tools'
        | 'language';
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    icon?: string;
}

export interface ContactInfo {
    email: string;
    phone?: string;
    location: string;
    github: string;
    linkedin?: string;
    portfolio?: string;
}

export interface PersonalInfo {
    name: string;
    nickname: string;
    title: string;
    bio: string;
    avatar?: string;
    yearsOfExperience: number;
    availability: boolean;
}
