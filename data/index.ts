// 모든 데이터를 중앙 관리

export { projects } from './projects';
export { experiences } from './experiences';
export {
    skills,
    getSkillsByCategory,
    getSkillsByLevel,
    getSkillNames,
} from './skills';
export { personalInfo, contactInfo, socialLinks } from './personal';

// 타입들도 함께 내보내기
export type * from '../types';
