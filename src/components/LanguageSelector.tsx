import { useEffect, useState } from "react";
import i18n from "../i18n/config";
import "/src/LanguageSelector.css";
import couple from '/src/assets/language/couple.jpg';
interface LanguageSelectorProps {
  onLanguageSelect: (language: string) => void;
}

export default function LanguageSelector({
  onLanguageSelect,
}: LanguageSelectorProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLanguageSelect = (language: "ru" | "kz") => {
    i18n.changeLanguage(language);
    // Add a small delay to allow animation before switching to main content
    setTimeout(() => {
      onLanguageSelect(language);
    }, 300);
  };

  return (
    <div className={`language-selector ${isVisible ? "visible" : ""}`}>
      <img
        className="language-selector__background"
        src={couple}
        alt="Couple"
      />
      <div className="language-selector__overlay" />

      <div className="language-selector__content">
        <div className="language-selector__card">
          <h1 className="language-selector__title">
            Доверьтесь профессионалам
          </h1>
          
          <p className="language-selector__phone">+7 778 810 09 00</p>
          
          <p className="language-selector__subtitle">
            Бесплатный прием и консультация
          </p>

          <div className="language-selector__buttons">
            <button
              className="language-selector__button"
              onClick={() => handleLanguageSelect("ru")}
            >
              <span className="language-selector__text">Русский язык</span>
            </button>

            <button
              className="language-selector__button"
              onClick={() => handleLanguageSelect("kz")}
            >
              <span className="language-selector__text">Қазақ тілі</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
