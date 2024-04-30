"use client"
import { useEffect, useState } from "react";

interface Language {
  label: string;
  value: string;
}

const languages: Language[] = [
  { label: 'Urdu', value: 'ur' },
  { label: 'English', value: 'en' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Pashto', value: 'ps' },
];

const includedLanguages = languages.map(lang => lang.value).join(",");

function googleTranslateElementInit() {
  new (window as any).google.translate.TranslateElement(
    {
      pageLanguage: "ur", // Set default language to Urdu ('ur')
      includedLanguages
    },
    "google_translate_element"
  );
}

export function GoogleTranslate({ prefLangCookie }: { prefLangCookie?: string }) {
  const [langCookie, setLangCookie] = useState<string>(decodeURIComponent(prefLangCookie || "ur"));

  useEffect(() => {
    document.body.style.textAlign = 'right';
    (window as any).googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const onChange = (value: string) => {
    const lang = "/" + value;
    setLangCookie(lang);
    // Dispatch change event to Google Translate widget
    const element = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (element) {
      element.value = value;
      element.dispatchEvent(new Event("change"));
    }
    if (value === 'en') {
      document.body.style.textAlign = 'left';
    } else {
      document.body.style.textAlign = 'right';
    }
  };

  return (
    <div>
      <div id="google_translate_element" style={{ visibility: "hidden", width: "1px", height: "1px" }}></div>
      <LanguageSelector onChange={onChange} value={langCookie} />
    </div>
  );
}

function LanguageSelector({ onChange, value }: { onChange: (value: string) => void, value: string }) {
  const langCookie = value.split("/")[2];

  return (
    <div className="language-selector form position-fixed  overflow-hidden" style={{ top: "100px" }}>
      <label htmlFor="langPicker" className="visually-hidden">Select Language:</label>
      <select
        onChange={(e) => onChange(e.target.value)}
        value={langCookie}
        className="form-select form-control px-2 py-2 rounded text-blue-700 font-bold"
        style={{ width: '120px' }} // This style could be replaced by a Bootstrap class or removed
      >
        {languages.map((it: Language) => (
          <option className="font-bold rounded text-blue-700 notranslate" value={it.value} key={it.value}>
            {it.label}
          </option>
        ))}
      </select>
    </div>
  );
}
