import { Fragment } from "react";

type FormattedTextProps = {
  children: string;
  className?: string;
};

function parseBoldSegments(text: string) {
  const parts: Array<string | { bold: string }> = [];
  const regex = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match = regex.exec(text);

  while (match !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push({ bold: match[1] });
    lastIndex = regex.lastIndex;
    match = regex.exec(text);
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

export function FormattedText({ children, className }: FormattedTextProps) {
  const segments = parseBoldSegments(children);

  return (
    <span className={className}>
      {segments.map((segment, index) =>
        typeof segment === "string" ? (
          <Fragment key={index}>{segment}</Fragment>
        ) : (
          <strong
            key={index}
            className="font-semibold text-slate-900"
          >
            {segment.bold}
          </strong>
        ),
      )}
    </span>
  );
}
