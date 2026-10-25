"use client";

import { createContext, useContext, useSyncExternalStore, useEffect, ReactNode } from "react";

export type Language = "en" | "vi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

let currentLanguage: Language = "en";
const languageChangeEvent = "language-change";

function getLanguageSnapshot(): Language {
  try {
    const saved = localStorage.getItem("language");
    return saved === "vi" || saved === "en" ? saved : currentLanguage;
  } catch {
    return currentLanguage;
  }
}

function subscribeToLanguageChange(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(languageChangeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(languageChangeEvent, onChange);
  };
}

function getServerLanguage(): Language {
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguageChange,
    getLanguageSnapshot,
    getServerLanguage,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    currentLanguage = lang;
    try {
      localStorage.setItem("language", lang);
    } catch {
      // Language switching also works when browser storage is unavailable.
    }
    window.dispatchEvent(new Event(languageChangeEvent));
  };

  const t = (key: string): string => {
    const translations = translationsMap[language];
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Translation maps
const translationsMap = {
  en: {
    "nav.openMenu": "Open navigation menu",
    "nav.closeMenu": "Close navigation menu",
    "language.select": "Select language",
    "hero.illustration": "Mobile developer illustration",
    "projects.problem": "Problem",
    "projects.solution": "Solution",
    "projects.solo": "Sole app developer",
    "projects.solo.description": "I independently developed the entire mobile application for iOS and Android.",
    "projects.cuupaw.subtitle": "Animal Rescue Posting App",
    "projects.cuupaw.description": "A mobile application that allows users to post and discover animal rescue requests, share information about animals in need, and connect volunteers and rescue groups in real time",
    "projects.cuupaw.problem": "Animal rescue information was scattered across social platforms, making it difficult for volunteers and rescue teams to respond quickly.",
    "projects.cuupaw.solution": "Built a centralized platform for posting rescue cases with real-time updates and notifications to help volunteers coordinate and respond faster.",
    "projects.cuupaw.feature.0": "Real-time messaging",
    "projects.cuupaw.feature.1": "Push notifications",
    "projects.cuupaw.feature.2": "Rescue post creation",
    "projects.cuupaw.feature.3": "User interaction and comments",
    "projects.133ch.subtitle": "Live Streaming & Music App",
    "projects.133ch.description": "A real-time live streaming and music application allowing users to watch livestreams, listen to music, interact with streamers, and enjoy high-quality audio/video with low latency.",
    "projects.133ch.problem": "High latency and poor interaction reduced user engagement during livestreams",
    "projects.133ch.solution": "Optimized real-time streaming with low-latency playback, stable sockets, and interactive features",
    "projects.133ch.feature.0": "Live streaming",
    "projects.133ch.feature.1": "Music streaming",
    "projects.133ch.feature.2": "Real-time chat",
    "projects.133ch.feature.3": "Streamer interaction",
    "projects.133ch.feature.4": "Favorites & follow system",
    "projects.133ch.feature.5": "Payment system",
    "projects.133chStreamer.subtitle": "Live Streaming & Music Upload App",
    "projects.133chStreamer.description": "A real-time live streaming app that lets creators go live, interact with audiences, and upload music for on-demand listening. Built for smooth playback, low latency, and creator-friendly workflows.",
    "projects.133chStreamer.problem": "Creators struggled with unstable streaming and a complicated process to publish audio content",
    "projects.133chStreamer.solution": "Optimized low-latency streaming with reliable real-time chat, plus a simple upload-to-publish flow for music with fast processing",
    "projects.133chStreamer.feature.0": "Go live (low-latency streaming)",
    "projects.133chStreamer.feature.1": "Real-time chat & interactions",
    "projects.133chStreamer.feature.2": "Upload music & manage library",
    "projects.133chStreamer.feature.3": "Playback queue & favorites",
    "projects.133chStreamer.feature.4": "Creator profile & followers",
    "projects.gacharin.subtitle": "Bicycle Parking & Rewards App",
    "projects.gacharin.description": "A community app in Kyoto that encourages proper bicycle parking. Users find participating parking areas, submit photos of parked bicycles, and earn points after their reports are approved.",
    "projects.gacharin.problem": "Residents need a convenient way to find participating bicycle parking areas and contribute to better parking habits.",
    "projects.gacharin.solution": "Developed a mobile app that brings together parking maps, QR code scanning, photo reports, points, and notifications in one flow.",
    "projects.gacharin.feature.0": "Nearby parking map",
    "projects.gacharin.feature.1": "QR code scanning",
    "projects.gacharin.feature.2": "Photo reports",
    "projects.gacharin.feature.3": "Points & rewards",
    "projects.gacharin.feature.4": "Report status notifications",
    "experience.item.5.year": "2020 - 2021",
    "experience.item.5.title": "Game Tester (Part-time)",
    "experience.item.5.company": "Game Startup",
    "experience.item.5.description": "Worked as a part-time game tester at a startup company, responsible for testing gameplay features, identifying and reporting bugs, and contributing to improving game quality and user experience.",
    "experience.item.4.year": "2022",
    "experience.item.4.title": "Mobile Developer Intern (React Native)",
    "experience.item.4.company": "Tech Startup / Software Company",
    "experience.item.4.description": "Interned as a Mobile Developer (React Native), building cross-platform mobile applications, integrating APIs, optimizing UI/UX, and gaining hands-on experience in real-world software development.",
    "experience.item.3.year": "2018 - 2022",
    "experience.item.3.title": "University of Technology and Education",
    "experience.item.3.company": "The University of Danang (UTE)",
    "experience.item.3.description": "Graduated as an Information Technology Engineer, building a strong foundation in computer science and software development principles.",
    "experience.item.2.year": "2022",
    "experience.item.2.title": "Fresher Mobile Developer",
    "experience.item.2.company": "FLYDINO TECHNOLOGY",
    "experience.item.2.description": "Started my journey in mobile development, learning React Native fundamentals and best practices.",
    "experience.item.1.year": "2023 - 2024",
    "experience.item.1.title": "Junior Mobile Developer",
    "experience.item.1.company": "FLYDINO TECHNOLOGY",
    "experience.item.1.description": "Developed and shipped mobile applications using React Native, implementing user-facing features, handling state management, and integrating RESTful APIs.",
    "experience.item.0.year": "2025 - Present",
    "experience.item.0.title": "Mid-level Mobile Developer",
    "experience.item.0.company": "FLYDINO TECHNOLOGY",
    "experience.item.0.description": "Developing and maintaining scalable React Native applications, owning features end-to-end, optimizing performance, and collaborating with product and backend teams.",
    "skills.android": "Android Development",
    "skills.ios": "iOS Development",
    "skills.cleanArchitecture": "Clean Architecture",
    "skills.modularCodebase": "Modular Codebase",
    "skills.designPatterns": "Design Patterns",
    "skills.cicd": "CI/CD Pipelines",
    // Header
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.hire": "Hire Me",
    
    // Hero
    "hero.available": "Available for new opportunities",
    "hero.title": "Mobile Developer",
    "hero.subtitle": "React Native Specialist",
    "hero.description": "Building high-quality mobile apps with {performance}, {scalability}, and {ux} in mind. Nearly 6 years of crafting real-world mobile experiences.",
    "hero.performance": "performance",
    "hero.scalability": "scalability",
    "hero.ux": "great UX",
    "hero.viewProjects": "View Projects",
    "hero.contact": "Contact Me",
    "hero.yearsExp": "Years Experience",
    "hero.projectsShipped": "Projects Shipped",
    "hero.platforms": "Platforms",
    
    // About
    "about.title": "About Me",
    "about.heading": "More Than Just Code",
    "about.p1": "I'm a {mobile} who genuinely loves what I do. There's something magical about turning an idea into an app that thousands of people use every day.",
    "about.p1.mobile": "Mobile Developer",
    "about.p2": "Over the past 5 years, I've focused on {rn} because it lets me build beautiful, high-performance apps for both iOS and Android without compromise.",
    "about.p2.rn": "React Native",
    "about.p3": "What drives me? {key} I care deeply about the end-user experience, and I take pride in writing code that's not just functional, but maintainable and scalable for the long term.",
    "about.p3.key": "Shipping products that matter.",
    "about.p4": "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee while brainstorming my next project.",
    "about.passion.product": "Product Mindset",
    "about.passion.product.desc": "I build apps that people actually want to use — not just code that works.",
    "about.passion.problem": "Problem Solver",
    "about.passion.problem.desc": "Complex challenges excite me. I love finding elegant solutions to tricky mobile problems.",
    "about.passion.quality": "Quality Obsessed",
    "about.passion.quality.desc": "Performance, UX, and maintainability aren't afterthoughts — they're built in from day one.",
    "about.passion.learner": "Continuous Learner",
    "about.passion.learner.desc": "The mobile landscape evolves fast. I stay curious and keep my skills sharp.",
    
    // Skills
    "skills.label": "What I Do",
    "skills.title": "Skills & Expertise",
    "skills.description": "A comprehensive toolkit refined through years of building real-world mobile applications",
    "skills.mobile": "Mobile Development",
    "skills.architecture": "State & Architecture",
    "skills.backend": "Real-time & Backend",
    "skills.devops": "DevOps & Tools",
    "skills.expert": "Expert",
    "skills.advanced": "Advanced",
    "skills.intermediate": "Intermediate",
    "skills.years": "years",
    "skills.year": "year",
    
    // Experience
    "experience.label": "My Journey",
    "experience.title": "Experience & Background",
    "experience.description": "From university graduate to seasoned mobile developer — a journey of continuous learning and growth",
    "experience.highlight.code": "Clean Code",
    "experience.highlight.code.desc": "Writing maintainable, well-documented code that stands the test of time",
    "experience.highlight.team": "Team Player",
    "experience.highlight.team.desc": "Collaborating effectively with designers, backend developers, and stakeholders",
    "experience.highlight.solver": "Problem Solver",
    "experience.highlight.solver.desc": "Turning complex requirements into elegant, user-friendly mobile experiences",
    
    // Projects
    "projects.label": "My Work",
    "projects.title": "Featured Projects",
    "projects.description": "Real mobile applications I've built — focusing on performance, scalability, and exceptional user experience",
    "projects.viewDetails": "View Details",
    "projects.github": "GitHub",
    "projects.features": "Key Features",
    "projects.techStack": "Tech Stack",
    
    // Contact
    "contact.label": "Get in Touch",
    "contact.title": "Let's Build Something Great",
    "contact.description": "Have a project in mind? Looking for a mobile developer? I'd love to hear from you.",
    "contact.available": "Open for Opportunities",
    "contact.available.desc": "I'm currently available for freelance projects and full-time positions. Let's discuss how I can help bring your mobile app ideas to life.",
    "contact.location": "Remote / Worldwide",
    "contact.timezone": "GMT+7",
    "contact.email": "Email",
    "contact.name": "Your Name",
    "contact.namePlaceholder": "John Doe",
    "contact.emailPlaceholder": "john@example.com",
    "contact.message": "Your Message",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.send": "Send Message",
    
    // Footer
    "footer.tagline": "Mobile Developer | React Native Specialist",
    "footer.madeWith": "Made with",
    "footer.and": "and React Native",
  },
  vi: {
    "nav.openMenu": "Mở menu điều hướng",
    "nav.closeMenu": "Đóng menu điều hướng",
    "language.select": "Chọn ngôn ngữ",
    "hero.illustration": "Hình minh họa lập trình viên di động",
    "projects.problem": "Vấn đề",
    "projects.solution": "Giải pháp",
    "projects.solo": "Một mình phát triển ứng dụng",
    "projects.solo.description": "Tôi là người duy nhất phát triển toàn bộ ứng dụng di động trên iOS và Android.",
    "projects.cuupaw.subtitle": "Ứng dụng đăng tin cứu hộ động vật",
    "projects.cuupaw.description": "Ứng dụng di động cho phép đăng và tìm kiếm các trường hợp động vật cần cứu hộ, chia sẻ thông tin và kết nối tình nguyện viên với các nhóm cứu hộ theo thời gian thực.",
    "projects.cuupaw.problem": "Thông tin cứu hộ động vật phân tán trên nhiều mạng xã hội, khiến tình nguyện viên và đội cứu hộ khó phản ứng kịp thời.",
    "projects.cuupaw.solution": "Xây dựng nền tảng tập trung để đăng tin cứu hộ, cập nhật và gửi thông báo theo thời gian thực, giúp tình nguyện viên phối hợp và phản ứng nhanh hơn.",
    "projects.cuupaw.feature.0": "Nhắn tin theo thời gian thực",
    "projects.cuupaw.feature.1": "Thông báo đẩy",
    "projects.cuupaw.feature.2": "Đăng tin cứu hộ",
    "projects.cuupaw.feature.3": "Tương tác và bình luận",
    "projects.133ch.subtitle": "Ứng dụng phát trực tiếp và nghe nhạc",
    "projects.133ch.description": "Ứng dụng phát trực tiếp và nghe nhạc cho phép người dùng xem chương trình trực tiếp, nghe nhạc và tương tác với người phát, với chất lượng âm thanh, hình ảnh cao và độ trễ thấp.",
    "projects.133ch.problem": "Độ trễ cao và khả năng tương tác hạn chế làm giảm mức độ gắn kết của người xem trong các buổi phát trực tiếp.",
    "projects.133ch.solution": "Tối ưu phát trực tiếp với độ trễ thấp, kết nối ổn định và các tính năng tương tác theo thời gian thực.",
    "projects.133ch.feature.0": "Phát trực tiếp",
    "projects.133ch.feature.1": "Nghe nhạc trực tuyến",
    "projects.133ch.feature.2": "Trò chuyện theo thời gian thực",
    "projects.133ch.feature.3": "Tương tác với người phát",
    "projects.133ch.feature.4": "Yêu thích và theo dõi",
    "projects.133ch.feature.5": "Thanh toán",
    "projects.133chStreamer.subtitle": "Ứng dụng phát trực tiếp và đăng tải nhạc",
    "projects.133chStreamer.description": "Ứng dụng giúp nhà sáng tạo phát trực tiếp, tương tác với khán giả và đăng tải nhạc để nghe theo yêu cầu. Tập trung vào trải nghiệm phát mượt mà, độ trễ thấp và quy trình sử dụng thuận tiện.",
    "projects.133chStreamer.problem": "Nhà sáng tạo gặp khó khăn do kết nối phát trực tiếp không ổn định và quy trình xuất bản nội dung âm thanh phức tạp.",
    "projects.133chStreamer.solution": "Tối ưu phát trực tiếp với độ trễ thấp và trò chuyện ổn định, đồng thời đơn giản hóa quy trình tải lên và xuất bản nhạc với tốc độ xử lý nhanh.",
    "projects.133chStreamer.feature.0": "Phát trực tiếp với độ trễ thấp",
    "projects.133chStreamer.feature.1": "Trò chuyện và tương tác trực tiếp",
    "projects.133chStreamer.feature.2": "Đăng tải nhạc và quản lý thư viện",
    "projects.133chStreamer.feature.3": "Hàng đợi phát và mục yêu thích",
    "projects.133chStreamer.feature.4": "Hồ sơ nhà sáng tạo và người theo dõi",
    "projects.gacharin.subtitle": "Ứng dụng đỗ xe đạp và tích điểm",
    "projects.gacharin.description": "Ứng dụng cộng đồng tại Kyoto khuyến khích đỗ xe đạp đúng cách. Người dùng tìm bãi đỗ tham gia chương trình, gửi ảnh xe đã đỗ và nhận điểm sau khi báo cáo được duyệt.",
    "projects.gacharin.problem": "Người dân cần cách thuận tiện để tìm bãi đỗ xe đạp tham gia chương trình và góp phần xây dựng thói quen đỗ xe đúng cách.",
    "projects.gacharin.solution": "Phát triển ứng dụng kết hợp bản đồ bãi đỗ, quét mã QR, gửi báo cáo bằng ảnh, tích điểm và thông báo trong một quy trình thuận tiện.",
    "projects.gacharin.feature.0": "Bản đồ bãi đỗ gần đây",
    "projects.gacharin.feature.1": "Quét mã QR",
    "projects.gacharin.feature.2": "Gửi báo cáo bằng ảnh",
    "projects.gacharin.feature.3": "Tích điểm và đổi thưởng",
    "projects.gacharin.feature.4": "Thông báo kết quả báo cáo",
    "experience.item.5.year": "2020 - 2021",
    "experience.item.5.title": "Kiểm thử viên trò chơi (bán thời gian)",
    "experience.item.5.company": "Công ty khởi nghiệp trò chơi",
    "experience.item.5.description": "Kiểm thử trò chơi bán thời gian tại công ty khởi nghiệp, kiểm tra tính năng, phát hiện và báo cáo lỗi, góp phần cải thiện chất lượng trò chơi và trải nghiệm người dùng.",
    "experience.item.4.year": "2022",
    "experience.item.4.title": "Thực tập sinh lập trình di động (React Native)",
    "experience.item.4.company": "Công ty khởi nghiệp / Công ty phần mềm",
    "experience.item.4.description": "Thực tập phát triển ứng dụng di động đa nền tảng bằng React Native, tích hợp API, tối ưu giao diện và trải nghiệm người dùng, tích lũy kinh nghiệm trong các dự án thực tế.",
    "experience.item.3.year": "2018 - 2022",
    "experience.item.3.title": "Trường Đại học Sư phạm Kỹ thuật",
    "experience.item.3.company": "Đại học Đà Nẵng (UTE)",
    "experience.item.3.description": "Tốt nghiệp kỹ sư Công nghệ thông tin, xây dựng nền tảng vững chắc về khoa học máy tính và các nguyên lý phát triển phần mềm.",
    "experience.item.2.year": "2022",
    "experience.item.2.title": "Lập trình viên di động mới vào nghề",
    "experience.item.2.company": "FLYDINO TECHNOLOGY",
    "experience.item.2.description": "Bắt đầu hành trình phát triển ứng dụng di động, học nền tảng React Native và các phương pháp thực hành tốt.",
    "experience.item.1.year": "2023 - 2024",
    "experience.item.1.title": "Lập trình viên di động sơ cấp",
    "experience.item.1.company": "FLYDINO TECHNOLOGY",
    "experience.item.1.description": "Phát triển và phát hành ứng dụng React Native, xây dựng tính năng cho người dùng, quản lý trạng thái và tích hợp API RESTful.",
    "experience.item.0.year": "2025 - Hiện tại",
    "experience.item.0.title": "Lập trình viên di động cấp trung",
    "experience.item.0.company": "FLYDINO TECHNOLOGY",
    "experience.item.0.description": "Phát triển và bảo trì ứng dụng React Native có khả năng mở rộng, phụ trách tính năng từ đầu đến cuối, tối ưu hiệu suất và phối hợp với đội sản phẩm và đội phát triển hệ thống máy chủ.",
    "skills.android": "Phát triển Android",
    "skills.ios": "Phát triển iOS",
    "skills.cleanArchitecture": "Kiến trúc sạch",
    "skills.modularCodebase": "Tổ chức mã nguồn theo mô-đun",
    "skills.designPatterns": "Mẫu thiết kế",
    "skills.cicd": "Quy trình CI/CD",
    // Header
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.experience": "Kinh nghiệm",
    "nav.projects": "Dự án",
    "nav.contact": "Liên hệ",
    "nav.hire": "Thuê tôi",
    
    // Hero
    "hero.available": "Sẵn sàng cho cơ hội mới",
    "hero.title": "Lập trình viên di động",
    "hero.subtitle": "Chuyên gia React Native",
    "hero.description": "Xây dựng ứng dụng di động chất lượng cao, chú trọng {performance}, {scalability} và {ux}. Gần 6 năm tạo ra những trải nghiệm di động thực tế.",
    "hero.performance": "hiệu suất",
    "hero.scalability": "khả năng mở rộng",
    "hero.ux": "trải nghiệm người dùng",
    "hero.viewProjects": "Xem dự án",
    "hero.contact": "Liên hệ",
    "hero.yearsExp": "Năm kinh nghiệm",
    "hero.projectsShipped": "Dự án đã hoàn thành",
    "hero.platforms": "Nền tảng",
    
    // About
    "about.title": "Về tôi",
    "about.heading": "Không chỉ là code",
    "about.p1": "Tôi là một {mobile} thực sự yêu thích công việc của mình. Có điều gì đó kỳ diệu khi biến một ý tưởng thành ứng dụng mà hàng nghìn người sử dụng mỗi ngày.",
    "about.p1.mobile": "Lập trình viên di động",
    "about.p2": "Trong 5 năm qua, tôi tập trung vào {rn} vì nó cho phép tôi xây dựng các ứng dụng đẹp, hiệu suất cao cho cả iOS và Android mà không cần thỏa hiệp.",
    "about.p2.rn": "React Native",
    "about.p3": "Điều gì thúc đẩy tôi? {key} Tôi quan tâm sâu sắc đến trải nghiệm người dùng cuối và tự hào về việc viết code không chỉ hoạt động mà còn dễ bảo trì và mở rộng về lâu dài.",
    "about.p3.key": "Tạo ra những sản phẩm có ý nghĩa.",
    "about.p4": "Khi không code, bạn sẽ thấy tôi khám phá các công nghệ mới, đóng góp cho mã nguồn mở, hoặc thưởng thức một tách cà phê ngon trong khi suy nghĩ về dự án tiếp theo.",
    "about.passion.product": "Tư duy sản phẩm",
    "about.passion.product.desc": "Tôi xây dựng các ứng dụng mà mọi người thực sự muốn sử dụng — không chỉ là code hoạt động.",
    "about.passion.problem": "Giải quyết vấn đề",
    "about.passion.problem.desc": "Những thách thức phức tạp làm tôi hứng thú. Tôi thích tìm giải pháp hiệu quả cho các vấn đề khó trong phát triển ứng dụng di động.",
    "about.passion.quality": "Chất lượng tối ưu",
    "about.passion.quality.desc": "Hiệu suất, trải nghiệm người dùng và khả năng bảo trì được chú trọng ngay từ ngày đầu tiên.",
    "about.passion.learner": "Học hỏi liên tục",
    "about.passion.learner.desc": "Lĩnh vực di động phát triển nhanh. Tôi luôn tìm tòi và trau dồi kỹ năng.",
    
    // Skills
    "skills.label": "Tôi làm gì",
    "skills.title": "Kỹ năng & Chuyên môn",
    "skills.description": "Bộ công cụ toàn diện được trau dồi qua nhiều năm xây dựng ứng dụng di động thực tế",
    "skills.mobile": "Phát triển ứng dụng di động",
    "skills.architecture": "Quản lý trạng thái & Kiến trúc",
    "skills.backend": "Hệ thống thời gian thực & Máy chủ",
    "skills.devops": "DevOps & Công cụ",
    "skills.expert": "Chuyên gia",
    "skills.advanced": "Nâng cao",
    "skills.intermediate": "Trung cấp",
    "skills.years": "năm",
    "skills.year": "năm",
    
    // Experience
    "experience.label": "Hành trình của tôi",
    "experience.title": "Kinh nghiệm & Nền tảng",
    "experience.description": "Từ sinh viên tốt nghiệp đại học đến lập trình viên di động dày dạn kinh nghiệm — một hành trình học hỏi và phát triển không ngừng",
    "experience.highlight.code": "Mã nguồn sạch",
    "experience.highlight.code.desc": "Viết code dễ bảo trì, được tài liệu hóa tốt, đứng vững qua thời gian",
    "experience.highlight.team": "Đồng đội",
    "experience.highlight.team.desc": "Cộng tác hiệu quả với nhà thiết kế, lập trình viên hệ thống máy chủ và các bên liên quan",
    "experience.highlight.solver": "Giải quyết vấn đề",
    "experience.highlight.solver.desc": "Biến yêu cầu phức tạp thành trải nghiệm di động tinh gọn, thân thiện với người dùng",
    
    // Projects
    "projects.label": "Công việc của tôi",
    "projects.title": "Dự án nổi bật",
    "projects.description": "Các ứng dụng di động thực tế tôi đã xây dựng — tập trung vào hiệu suất, khả năng mở rộng và trải nghiệm người dùng xuất sắc",
    "projects.viewDetails": "Xem chi tiết",
    "projects.github": "GitHub",
    "projects.features": "Tính năng chính",
    "projects.techStack": "Công nghệ sử dụng",
    
    // Contact
    "contact.label": "Liên hệ",
    "contact.title": "Hãy cùng xây dựng điều gì đó tuyệt vời",
    "contact.description": "Có ý tưởng dự án? Đang tìm lập trình viên di động? Tôi rất muốn nghe từ bạn.",
    "contact.available": "Sẵn sàng cho cơ hội",
    "contact.available.desc": "Tôi sẵn sàng nhận dự án tự do và công việc toàn thời gian. Hãy trao đổi để cùng biến ý tưởng ứng dụng di động của bạn thành hiện thực.",
    "contact.location": "Làm việc từ xa / Toàn cầu",
    "contact.timezone": "GMT+7",
    "contact.email": "Email",
    "contact.name": "Tên của bạn",
    "contact.namePlaceholder": "Nguyễn Văn A",
    "contact.emailPlaceholder": "nguyenvan@example.com",
    "contact.message": "Tin nhắn của bạn",
    "contact.messagePlaceholder": "Hãy cho tôi biết về dự án của bạn...",
    "contact.send": "Gửi tin nhắn",
    
    // Footer
    "footer.tagline": "Lập trình viên di động | Chuyên gia React Native",
    "footer.madeWith": "Được tạo bằng",
    "footer.and": "và React Native",
  },
};

