import { useEffect, useMemo, useState } from "react";

export default function TextType({
  text,
  texts,
  tag: Tag = "span",
  className = "",
  typingSpeed = 75,
  pauseDuration = 1500,
  deletingSpeed = 50,
  showCursor = true,
  cursorCharacter = "_",
  cursorBlinkDuration = 0.5,
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  startDelay = 0,
}) {
  const sourceTexts = useMemo(() => {
    const value = texts?.length ? texts : text;
    if (Array.isArray(value)) return value.filter(Boolean);
    return value ? [value] : [""];
  }, [text, texts]);

  const [textIndex, setTextIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(startDelay === 0);

  useEffect(() => {
    if (startDelay === 0) {
      setHasStarted(true);
      return undefined;
    }

    const timer = window.setTimeout(() => setHasStarted(true), startDelay);
    return () => window.clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!hasStarted) return undefined;

    const current = sourceTexts[textIndex] ?? "";
    const isComplete = visibleText === current;
    const isEmpty = visibleText.length === 0;
    const shouldLoop = sourceTexts.length > 1;

    if (!shouldLoop && isComplete) return undefined;

    let delay = isDeleting ? deletingSpeed : typingSpeed;
    if (!isDeleting && variableSpeedEnabled) {
      delay = variableSpeedMin + Math.random() * (variableSpeedMax - variableSpeedMin);
    }

    if (isComplete && shouldLoop) {
      delay = pauseDuration;
    }

    const timer = window.setTimeout(() => {
      if (isComplete && shouldLoop) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setTextIndex((index) => (index + 1) % sourceTexts.length);
        return;
      }

      setVisibleText((value) => {
        if (isDeleting) return current.slice(0, Math.max(0, value.length - 1));
        return current.slice(0, value.length + 1);
      });
    }, delay);

    return () => window.clearTimeout(timer);
  }, [
    deletingSpeed,
    hasStarted,
    isDeleting,
    pauseDuration,
    sourceTexts,
    textIndex,
    typingSpeed,
    variableSpeedEnabled,
    variableSpeedMax,
    variableSpeedMin,
    visibleText,
  ]);

  return (
    <Tag className={`text-type ${className}`} style={{ "--cursor-blink-duration": `${cursorBlinkDuration}s` }}>
      <span>{visibleText}</span>
      {showCursor && <span className="text-type-cursor">{cursorCharacter}</span>}
    </Tag>
  );
}
