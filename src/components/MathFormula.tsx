import React, { useMemo } from 'react';
import katex from 'katex';

interface MathFormulaProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const MathFormula: React.FC<MathFormulaProps> = ({
  math,
  block = false,
  className = '',
}) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
        strict: false,
      });
    } catch {
      return math;
    }
  }, [math, block]);

  return (
    <span
      className={`${block ? 'block my-2 overflow-x-auto py-1' : 'inline'} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

/**
 * Renders prose text that may contain inline LaTeX commands or math expressions
 */
export const MathProse: React.FC<{ text: string; className?: string }> = ({
  text,
  className = '',
}) => {
  // Split on common LaTeX patterns or $...$ if present, or render inline math tokens
  const renderedHtml = useMemo(() => {
    // Check if string has LaTeX backslashes
    if (!text.includes('\\') && !text.includes('^') && !text.includes('_')) {
      return null;
    }
    // Replace known LaTeX math segments with rendered KaTeX
    const regex = /(\\[a-zA-Z]+(?:\{[^}]*\})*(?:\^\{?[^}\s]+\}?)?(?:_\{?[^}\s]+\}?)?|[a-zA-Z0-9_()[\]+-]+\^[a-zA-Z0-9_{}()+-]+|[a-zA-Z]_[0-9a-zA-Z+-]+)/g;
    const parts = text.split(regex);
    return parts.map((part, idx) => {
      if (regex.test(part) || part.startsWith('\\')) {
        try {
          const h = katex.renderToString(part, {
            displayMode: false,
            throwOnError: false,
          });
          return <span key={idx} dangerouslySetInnerHTML={{ __html: h }} />;
        } catch {
          return <span key={idx}>{part}</span>;
        }
      }
      return <span key={idx}>{part}</span>;
    });
  }, [text]);

  if (!renderedHtml) {
    return <span className={className}>{text}</span>;
  }

  return <span className={className}>{renderedHtml}</span>;
};
