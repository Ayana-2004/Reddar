// Keeps hyphenated words ("State-by-State", "O-negative") on one line so text
// never wraps as "State-by-" / "State". Plain text in, same text out.
export default function NoBreakHyphens({ children }) {
  if (typeof children !== "string") return children;
  return children.split(/(\S*-\S*)/).map((part, i) =>
    part.includes("-") ? (
      <span key={i} style={{ whiteSpace: "nowrap" }}>{part}</span>
    ) : (
      part
    )
  );
}
