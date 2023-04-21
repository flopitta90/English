export const parseGPT = (text) => {
  const indexWord = text?.text?.indexOf('Meaning')
  const indexMeaning = text?.text?.indexOf('Sentences:')
  const indexSentences = text?.text?.indexOf('1')
  const indexSentence1 = text?.text?.indexOf('2')
  const indexSentence2 = text?.text?.indexOf('3')

  const word = text?.text?.slice(7,indexWord)
  const meaning = text?.text?.slice(indexWord,indexMeaning)
  const sentence1 = text?.text?.slice(indexSentences,indexSentence1)
  const sentence2 = text?.text?.slice(indexSentence1,indexSentence2)
  const sentence3 = text?.text?.slice(indexSentence2)

  return {word,meaning,sentence1,sentence2,sentence3}
}