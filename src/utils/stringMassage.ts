/**
 *
 * splits up longer strings and combines smaller words
 *
 * @param str "Looking for something extrordinary"
 * @returns ["Looking for", "something", "extrordinary"]
 */
export const splitStringAndCombineSmallerWords = (str: string): string[] => {
  try {
    if (!str || typeof str !== "string" || !str.length) return [];
    const s = str.split(" ");

    return s.reduce((acc: string[], word: string, index: number): string[] => {
      if (word.length < 8) {
        if (index === 0) acc.push(word);
        else acc[index - 1] = `${acc[index - 1]} ${word}`;
        return acc;
      }
      acc.push(word);
      return acc;
    }, []);
  } catch (error) {
    console.error("could not format string", error);
    return [];
  }
};
