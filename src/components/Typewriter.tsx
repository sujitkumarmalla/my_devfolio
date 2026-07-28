import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const currentFullWord = words[currentWordIndex];

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Typing character
      timer = setTimeout(() => {
        setCurrentText((prev) => currentFullWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // Word completed, wait before deleting
    if (!isDeleting && currentText === currentFullWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    }

    // Word fully deleted, move to the next word
    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="inline-block min-h-[1.2em]">
      {currentText}
      <span className="ml-1 inline-block w-[3px] h-[1em] bg-primary animate-pulse relative top-[0.1em]" />
    </span>
  );
};
