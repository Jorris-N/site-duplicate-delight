import { useState, useEffect } from 'react';

export const useTypewriter = (
  words: string[],
  typingSpeed: number = 100,
  deletingSpeed: number = 50,
  delayBetweenWords: number = 2000
) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let delayTimeout: ReturnType<typeof setTimeout> | undefined;
    
    if (isDeleting) {
      // Deleting characters
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      // Typing characters
      if (currentText === currentWord) {
        delayTimeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return currentText;
};