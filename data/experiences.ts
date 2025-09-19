import { Experience } from '@/types';

export const experiences: Experience[] = [
    {
        company: '(주)플렉스랩',
        position: '사원',
        job: '웹 및 앱 풀스택 개발자',
        period: '20xx - 20xx',
        description:
            '연구개발전담부서 사원으로 재직하며 풀스택 개발자로서 웹 기반 에너지 관리 시스템(EnMS)과 AI 기반 학습 플랫폼 앱(PASS)의 신규 구축 프로젝트에 핵심적인 역할을 수행했습니다.',
        achievements: [
            'React Flow 기반 동적 에너지 계통도 시각화 기능 개발',
            '사용자 맞춤형 실시간 에너지 대시보드 구축 및 eCharts 기반 시각화 성능 최적화',
            '대용량 시계열 데이터 처리를 위한 InfluxDB, RabbitMQ 기반 비동기 파이프라인 구축',
            '백엔드 시스템 안정화 주도 (Spring Boot → Nest.js 마이그레이션)',
            'DKT AI 모델 기반 학습 예측 API 서버 구축',
            'Flutter 기반 하이브리드 앱 전체 기능 개발 및 양대 마켓 출시/운영',
        ],
        technologies: [
            'Spring Boot',
            'Java',
            'RabbitMQ',
            'jQuery',
            'eCharts',
            'React',
            'React Flow',
            'TypeScript',
            'MariaDB',
            'InfluxDB',
            'MyBatis',
            'Flutter',
            'Dart',
            'GetX',
            'Nest.js',
            'TypeORM',
            'FastAPI',
            'Python',
            'PyTorch',
            'Docker',
            'Firebase',
        ],
    },
    {
        company: '(주)파블로항공',
        position: '주임연구원',
        job: '프론트엔드 개발자',
        period: '20xx - 20xx',
        description:
            '플랫폼팀 주임연구원으로 재직하며 다수의 드론을 동시에 관제하는 웹 관제 플랫폼(wGCS)의 프론트엔드 시스템을 개발했습니다.',
        achievements: [
            'CesiumJS 지도 기반 임무 경로(Waypoint) 생성/관리 기능 개발',
            '드론 안전 비행을 위한 지오펜싱(Geofencing) 시스템 구축',
            '다양한 관제 환경을 고려한 반응형 UI/UX 구축 및 개선',
            '코드 품질 및 유지보수성 개선을 위한 리팩토링',
        ],
        technologies: ['Vue.js', 'CesiumJS', 'JavaScript'],
    },
];
