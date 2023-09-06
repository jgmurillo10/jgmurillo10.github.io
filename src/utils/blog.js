export const getReadingTime = (text, wordsPerMinute = 200) => {
  const words = text.split(' ').length;
  
  return {
    words,
    minutes: Math.ceil(words/wordsPerMinute),
  };
}
