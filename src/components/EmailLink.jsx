import { useState, useRef, useEffect } from "react";

// A mailto link that never looks dead. A mailto link only works when the computer
// has an email app set up; without one the click did nothing (bugs 054, 055).
// So the click also copies the address and says so, and the email app still
// opens when there is one.
export default function EmailLink({ email, className, children }) {
  const [note, setNote] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const show = (text) => {
    setNote(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setNote(""), 4000);
  };

  const onClick = () => {
    // Show the address at once (copying can be blocked or never answer), then say
    // "copied" if the copy works, so the click is never silent
    show(`Email us at ${email}`);
    navigator.clipboard?.writeText(email)
      .then(() => show(`Email address copied: ${email}`))
      .catch(() => {});
  };

  return (
    <>
      <a href={`mailto:${email}`} className={className} onClick={onClick}>
        {children || email}
      </a>
      <span className={`email-toast${note ? " email-toast--show" : ""}`} role="status" aria-live="polite">
        {note}
      </span>
    </>
  );
}
