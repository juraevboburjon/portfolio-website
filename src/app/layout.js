import "./globals.css";

export const metadata = {
  title: "주라에브 무함마드버부르",
  description:
    "React를 사용하여 반응형 및 인터랙티브 웹 애플리케이션을 직접 구축한 경험이 있는 동기 부여형 프론트엔드 개발자.",
  keywords: "프론트엔드,프론트엔드 개발자,프론트엔드 개발자 포트폴리오",
  openGraph: {
    title: "주라에브 무함마드버부르",
    description:
      "React를 사용하여 반응형 및 인터랙티브 웹 애플리케이션을 직접 구축한 경험이 있는 동기 부여형 프론트엔드 개발자.",
    // url: "https://example.com",
    // siteName: "Название сайта",
    images: [
      {
        url: "/public/home_img4.jpg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
}
