import { Form } from "react-bootstrap";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constans";
import { FromLanguage, Language, SectionType } from "../types.d";

type Props =
  | {
      type: SectionType.From;
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | {
      type: SectionType.To;
      value: Language;
      onChange: (language: Language) => void;
    };

export const LanguageSelector = ({ onChange, type, value }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    onChange(e.target.value as Language);
  };

  return (
    <Form.Select
      aria-label="Selecciona el idioma"
      onChange={handleChange}
      value={value}
    >
      {type === SectionType.From && (
        <option value={AUTO_LANGUAGE}>Detectar idioma</option>
      )}

      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  );
};
