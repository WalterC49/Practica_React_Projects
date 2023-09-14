/* eslint-disable react/prop-types */
import { Link } from "../components/Link";

const i18n = {
  es: {
    title: "Sobre nosotros",
    button: "Ir al home.",
    description:
      "¡Hola!, me llamo Walter y estoy creando un clon de React Router.",
  },
  en: {
    title: "About us",
    button: "Go to home page.",
    description:
      "Hi!, My name is Walter and I am creating a clone of React Router.",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "es");

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src="https://t2.ea.ltmcdn.com/es/posts/6/4/5/donde_viven_los_lobos_24546_orig.jpg"
          alt="Foto de Walter"
        />
        <p>{i18n.description}</p>
      </div>
      <Link to="/">{i18n.button}</Link>
    </>
  );
}
