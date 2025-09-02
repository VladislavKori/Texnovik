import { FC } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: FC = () => {
    const { t, i18n } = useTranslation();
    const langs = Array.isArray(i18n.options.supportedLngs) ?
        i18n.options.supportedLngs.filter(el => el !== 'cimode')
        : [];

    return (
        <div>
            {langs.map(language => (
                <button
                    onClick={() => i18n.changeLanguage(language)}
                    key={language}
                >
                    {t(`langs.${language}`)}
                </button>
            ))}
        </div>
    )
}