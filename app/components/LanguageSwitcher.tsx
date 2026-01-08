"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold"
        >
          <Globe size={16} className="opacity-70" />
          <span>{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={language === "en" ? "bg-secondary" : ""}
        >
          <span className="mr-2">🇬🇧</span>
          English
          {language === "en" && <span className="ml-2 text-primary">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("vi")}
          className={language === "vi" ? "bg-secondary" : ""}
        >
          <span className="mr-2">🇻🇳</span>
          Tiếng Việt
          {language === "vi" && <span className="ml-2 text-primary">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;

