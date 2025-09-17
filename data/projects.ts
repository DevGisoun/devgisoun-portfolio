import { Project } from '@/types';

export const projects: Project[] = [
    {
        title: '하루메이트 - 당일 일정 등록 서비스',
        description:
            '당일 일정을 쉽고 간편하게 만들고 친구들과 공유할 수 있는 서비스',
        tech: [
            'Vite',
            'React',
            'JavaScript',
            'Styled-Components',
            'Kakao Map API',
        ],
        thumbnail: '1.png',
        color: '#77D1FD',
        category: ['팀', '반응형', '사이드'],
        period: '2023.07 - 2023.08',
        teamInfo: '6인 (프론트엔드 3명, 백엔드 3명)',
        detailedDescription: `당일 일정에서 하루,친구의 mate를 합쳐서 서비스명을 "하루메이트"로 짓게 되었습니다. 하루메이트는 당일 일정을 만들고 친구에게 손쉽게 공유 할 수 있는 서비스입니다. 친구와 놀러가기 위해서 계획을 짤 때 일정을 편리하게 공유하면 좋겠다는 생각으로 부터 시작되었습니다. 일정 생성 과정이 지나치게 복잡한 서비스들이 대부분입니다. 저희의 목표는 사용자들이 더욱 쉽고 간편하게 일정을 만들고 공유 할 수 있는 서비스를 제공하는 것입니다. *현재 로그인이 이루어지지 않아 주요 기능을 할 수 없는 상태입니다.`,
        githubUrl: 'https://github.com/codestates-seb/seb44_main_006',
        deployUrl: 'https://harumate.netlify.app/',
        features: [
            '카카오 맵 API를 활용해 장소 표시 및 검색',
            '일정 등록 및 수정',
            '마이페이지에서 등록한 일정과 즐겨찾기한 일정 확인하기',
            '친구에게 일정 공유하기(링크, 카카오톡 링크)',
            '다른 사람들이 공유한 일정 확인하고 즐겨찾기 추가하기',
        ],
        contributions: [
            {
                title: '프로젝트 아이디어 도출 및 기획 구성',
                details: [
                    '쉽고 간단하게 일정을 만들고 공유할 수 있는 서비스를 제작하고자 Figjam을 활용해 팀원들과 flow chart를 만들고 벤치마킹을 통해 아이디어를 구체화',
                ],
            },
            { title: '공통 컴포넌트 작업' },
            { title: '웹 표준 / 접근성 고려하며 컴포넌트 작업' },
            {
                title: '공통으로 사용하는 header 로그인 유/무에 따른 화면 구성, footer 작업',
                details: [
                    'header는 스크롤 여부에 따라 스타일이 변하도록 구현하고, 로그인 후 유저 프로필 사진 클릭 시 메뉴가 나오도록 작업',
                    'footer에는 팀원 이름 마우스 호버 시 팀원의 역할이 표시되는 재미있는 요소를 추가하고, 클릭 시 팀원의 Github 페이지로 이동할 수 있도록 작업',
                ],
            },
        ],
        troubleShooting: [
            {
                title: '메인 페이지의 커서 커스터마이징으로 인한 사용자 경험 이슈',
                details: [
                    '[문제점] 메인 화면의 커서는 초반에 이미지 요소를 고려했으나 마우스 호버시 뚝뚝 끊긴 느낌을 받아 사용자 경험에 부정적인 영향을 줄 것으로 판단했습니다.',
                    '[해결] useRef를 통해 마우스 커서 컴포넌트를 저장하고, 스크롤 시에도 이를 유지하고 최적화하기 위해 requestAnimationFrame 메서드를 활용해 마우스 동작을 최적화했습니다. 사용자가 버튼에 호버할 때 자연스럽고 부드러운 커서 경험을 제공하여 많은 긍정적 피드백을 받을 수 있었습니다.',
                ],
            },
        ],
        screenshots: [
            {
                url: 'https://user-images.githubusercontent.com/77836614/255490884-6341a0f3-e248-4af3-9733-4846c1ae7c51.png',
                caption: '메인 페이지',
            },
            {
                url: 'https://user-images.githubusercontent.com/77836614/255491184-93dca001-e946-4665-8093-c50dcdb6aad0.png',
                caption: '일정등록 페이지',
            },
            {
                url: 'https://user-images.githubusercontent.com/77836614/255491417-fef65d05-d4b6-4462-9239-86b715b3789b.png',
                caption: '커뮤니티 페이지',
            },
        ],
    },
    {
        title: '사용자 관리 시스템 (ORM)',
        description:
            'Sequelize ORM을 통한 사용자 관리 시스템 (with. 한컴 AI 아카데미)',
        tech: ['Node.js', 'MySQL', 'Sequelize', 'AWS', 'EC2'],
        thumbnail: '2.png',
        color: '#D8B4FE',
        category: ['웹', '백엔드', '개인'],
        period: '2023.05 - 2023.06',
        teamInfo: '4인 (백엔드 2명, 프론트엔드 2명)',
        detailedDescription: `Sequelize ORM을 활용하여 구축한 효율적인 사용자 관리 시스템입니다. 데이터베이스 스키마 관리와 마이그레이션을 체계적으로 처리할 수 있도록 설계되었습니다. 객체 관계 매핑(ORM)을 통해 SQL 쿼리 작성의 복잡성을 줄이고, 코드의 가독성과 유지보수성을 크게 향상시켰습니다.`,
        githubUrl: 'https://github.com/example/user-management-orm',
        features: [
            'Sequelize ORM을 통한 데이터베이스 관리',
            '사용자 등록, 수정, 삭제 기능',
            '마이그레이션 및 시드 데이터 관리',
            'RESTful API 설계',
            'JWT 기반 인증 시스템',
        ],
        contributions: [
            { title: 'ORM 모델 설계 및 구현' },
            { title: 'API 엔드포인트 개발' },
            { title: '데이터베이스 마이그레이션 관리' },
        ],
    },
    {
        title: '사용자 관리 시스템 (MongoDB)',
        description:
            'MongoDB를 통한 NoSQL 기반 사용자 관리 시스템 (with. 한컴 AI 아카데미)',
        tech: ['Node.js', 'MongoDB', 'Mongoose', 'AWS', 'EC2'],
        thumbnail: '3.png',
        color: '#A7F3D0',
        category: ['웹', '백엔드', 'NoSQL'],
        period: '2023.03 - 2023.04',
        teamInfo: '3인 (풀스택 개발자)',
        detailedDescription: `MongoDB를 활용한 NoSQL 기반 사용자 관리 시스템입니다. 유연한 스키마 구조를 통해 다양한 사용자 데이터를 효율적으로 저장하고 관리합니다. MongoDB의 강력한 쿼리 기능과 인덱싱을 활용하여 높은 성능을 구현했으며, 확장 가능한 아키텍처로 설계하여 향후 기능 확장에 용이하도록 구성했습니다.`,
        githubUrl: 'https://github.com/example/user-management-mongodb',
        features: [
            'MongoDB를 통한 NoSQL 데이터베이스 구축',
            'Mongoose ODM을 활용한 스키마 관리',
            '유연한 데이터 구조 지원',
            '집계 파이프라인을 통한 복잡한 쿼리 처리',
            '인덱싱을 통한 성능 최적화',
        ],
        contributions: [
            { title: 'MongoDB 스키마 설계' },
            { title: '집계 파이프라인 구현' },
            { title: '성능 최적화 및 인덱싱' },
        ],
    },
];
