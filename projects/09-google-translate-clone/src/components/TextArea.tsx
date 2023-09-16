import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";

interface Props {
  type: SectionType;
  loading?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const commonStyles = {
  border: 0,
  height: "200px",
  /* resize: "none", */
};

const getPlacerholder = ({
  type,
  loading,
}: {
  type: SectionType;
  loading?: boolean;
}) => {
  if (type === SectionType.From) return "Introducir Texto.";
  if (loading) return "Cargando...";
  return "Traducción.";
};

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const styles =
    type === SectionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: "#f5f5f5" };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as="textarea" // como que elemento se debe renderizar
      disabled={type === SectionType.To}
      placeholder={getPlacerholder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  );
};
