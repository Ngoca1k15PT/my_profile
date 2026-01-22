"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "vi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "vi")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
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
    // Header
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.experience": "Kinh nghiệm",
    "nav.projects": "Dự án",
    "nav.contact": "Liên hệ",
    "nav.hire": "Thuê tôi",
    
    // Hero
    "hero.available": "Sẵn sàng cho cơ hội mới",
    "hero.title": "Lập trình viên Mobile",
    "hero.subtitle": "Chuyên gia React Native",
    "hero.description": "Xây dựng các ứng dụng di động chất lượng cao với {performance}, {scalability} và {ux} trong tâm trí. Gần 6 năm tạo ra các trải nghiệm mobile thực tế.",
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
    "about.p1.mobile": "Lập trình viên Mobile",
    "about.p2": "Trong 5 năm qua, tôi tập trung vào {rn} vì nó cho phép tôi xây dựng các ứng dụng đẹp, hiệu suất cao cho cả iOS và Android mà không cần thỏa hiệp.",
    "about.p2.rn": "React Native",
    "about.p3": "Điều gì thúc đẩy tôi? {key} Tôi quan tâm sâu sắc đến trải nghiệm người dùng cuối và tự hào về việc viết code không chỉ hoạt động mà còn dễ bảo trì và mở rộng về lâu dài.",
    "about.p3.key": "Tạo ra những sản phẩm có ý nghĩa.",
    "about.p4": "Khi không code, bạn sẽ thấy tôi khám phá các công nghệ mới, đóng góp cho mã nguồn mở, hoặc thưởng thức một tách cà phê ngon trong khi suy nghĩ về dự án tiếp theo.",
    "about.passion.product": "Tư duy sản phẩm",
    "about.passion.product.desc": "Tôi xây dựng các ứng dụng mà mọi người thực sự muốn sử dụng — không chỉ là code hoạt động.",
    "about.passion.problem": "Giải quyết vấn đề",
    "about.passion.problem.desc": "Những thách thức phức tạp làm tôi hứng thú. Tôi thích tìm các giải pháp thanh lịch cho các vấn đề mobile khó.",
    "about.passion.quality": "Chất lượng tối ưu",
    "about.passion.quality.desc": "Hiệu suất, UX và khả năng bảo trì không phải là suy nghĩ sau — chúng được xây dựng ngay từ ngày đầu tiên.",
    "about.passion.learner": "Học hỏi liên tục",
    "about.passion.learner.desc": "Lĩnh vực mobile phát triển nhanh. Tôi luôn tò mò và giữ cho kỹ năng của mình sắc bén.",
    
    // Skills
    "skills.label": "Tôi làm gì",
    "skills.title": "Kỹ năng & Chuyên môn",
    "skills.description": "Bộ công cụ toàn diện được tinh chỉnh qua nhiều năm xây dựng các ứng dụng mobile thực tế",
    "skills.mobile": "Phát triển Mobile",
    "skills.architecture": "Quản lý trạng thái & Kiến trúc",
    "skills.backend": "Thời gian thực & Backend",
    "skills.devops": "DevOps & Công cụ",
    "skills.expert": "Chuyên gia",
    "skills.advanced": "Nâng cao",
    "skills.intermediate": "Trung bình",
    "skills.years": "năm",
    "skills.year": "năm",
    
    // Experience
    "experience.label": "Hành trình của tôi",
    "experience.title": "Kinh nghiệm & Nền tảng",
    "experience.description": "Từ sinh viên tốt nghiệp đại học đến lập trình viên mobile dày dạn kinh nghiệm — một hành trình học hỏi và phát triển không ngừng",
    "experience.highlight.code": "Code sạch",
    "experience.highlight.code.desc": "Viết code dễ bảo trì, được tài liệu hóa tốt, đứng vững qua thời gian",
    "experience.highlight.team": "Đồng đội",
    "experience.highlight.team.desc": "Cộng tác hiệu quả với nhà thiết kế, lập trình viên backend và các bên liên quan",
    "experience.highlight.solver": "Giải quyết vấn đề",
    "experience.highlight.solver.desc": "Biến các yêu cầu phức tạp thành trải nghiệm mobile thanh lịch, thân thiện với người dùng",
    
    // Projects
    "projects.label": "Công việc của tôi",
    "projects.title": "Dự án nổi bật",
    "projects.description": "Các ứng dụng mobile thực tế tôi đã xây dựng — tập trung vào hiệu suất, khả năng mở rộng và trải nghiệm người dùng xuất sắc",
    "projects.viewDetails": "Xem chi tiết",
    "projects.github": "GitHub",
    "projects.features": "Tính năng chính",
    "projects.techStack": "Công nghệ sử dụng",
    
    // Contact
    "contact.label": "Liên hệ",
    "contact.title": "Hãy cùng xây dựng điều gì đó tuyệt vời",
    "contact.description": "Có ý tưởng dự án? Đang tìm lập trình viên mobile? Tôi rất muốn nghe từ bạn.",
    "contact.available": "Sẵn sàng cho cơ hội",
    "contact.available.desc": "Tôi hiện đang có sẵn cho các dự án freelance và vị trí full-time. Hãy thảo luận về cách tôi có thể giúp biến ý tưởng ứng dụng mobile của bạn thành hiện thực.",
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
    "footer.tagline": "Lập trình viên Mobile | Chuyên gia React Native",
    "footer.madeWith": "Được tạo bằng",
    "footer.and": "và React Native",
  },
};

