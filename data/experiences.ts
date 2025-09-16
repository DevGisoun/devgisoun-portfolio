import { Experience } from '@/types';

export const experiences: Experience[] = [
    {
        company: 'TechCorp Inc.',
        position: 'Senior Full Stack Developer',
        period: '2022 - Present',
        description:
            'Lead development of web applications serving 100K+ users. Architected microservices and improved system performance by 40%.',
        location: 'Seoul, South Korea',
        achievements: [
            'Led a team of 5 developers in delivering critical features',
            'Reduced application load time by 40% through optimization',
            'Implemented CI/CD pipeline reducing deployment time by 60%',
            'Mentored 3 junior developers and conducted code reviews',
        ],
        technologies: [
            'React',
            'Node.js',
            'TypeScript',
            'AWS',
            'Docker',
            'PostgreSQL',
        ],
    },
    {
        company: 'StartupXYZ',
        position: 'Frontend Developer',
        period: '2020 - 2022',
        description:
            'Built responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UIs.',
        location: 'Seoul, South Korea',
        achievements: [
            'Developed 15+ responsive web applications',
            'Collaborated with UX/UI team to improve user experience',
            'Implemented automated testing reducing bugs by 30%',
            'Participated in agile development processes',
        ],
        technologies: ['React', 'TypeScript', 'SASS', 'Jest', 'Figma', 'Git'],
    },
    {
        company: 'WebDev Agency',
        position: 'Junior Developer',
        period: '2019 - 2020',
        description:
            'Developed client websites using modern web technologies. Learned best practices in code quality and project management.',
        location: 'Seoul, South Korea',
        achievements: [
            'Successfully delivered 10+ client projects',
            'Learned modern web development best practices',
            'Contributed to internal tool development',
            'Participated in client meetings and requirement gathering',
        ],
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'WordPress',
            'PHP',
            'MySQL',
        ],
    },
];
