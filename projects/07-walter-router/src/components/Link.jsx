/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { BUTTONS, EVENTS } from "../utils/const";

export function navigate(href) {
  window.history.pushState({}, "", href);
  // crar evento personalizado para avisar a lo que quereamos que hemos cambiado la url.
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.PRIMARY; // primary click
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to); // navegación con SPA (single page application)
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}
