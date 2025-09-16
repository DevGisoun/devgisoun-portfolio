import { siteConfig } from '../../data'; // 경로 수정

export function Footer() {
    return (
        <footer className="bg-black py-8">
            <div className="container mx-auto px-4">
                <div className="text-center text-white">
                    <p>{siteConfig.footerText}</p>
                </div>
            </div>
        </footer>
    );
}
