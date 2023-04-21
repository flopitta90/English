import { parseGPTResponse } from "../parseGPT";


describe('Parse the information coming from GPT API',()=>{
  test('should parse the info correctly', ()=>{
   const text = {text: "\n\nWord: Enmity \nMeaning: Hostility or ill will\nSentences: 1: There was a deep enmity between the two nations. 2: The feud between the two families was born out of enmity. 3: The enmity between the two companies had lasted for years."}
   const {word,meaning,sentence1,sentence2,sentence3} = parseGPTResponse(text)
   expect(word).toEqual(' Enmity \n')
   expect(meaning).toEqual('Meaning: Hostility or ill will\n')
   expect(sentence1).toEqual('1: There was a deep enmity between the two nations. ')
   expect(sentence2).toEqual('2: The feud between the two families was born out of enmity. ')
   expect(sentence3).toEqual('3: The enmity between the two companies had lasted for years.')
  })

  test('should parse the word correctly,even without the meaning', ()=>{
    const text = {text: "\n\nWord: Enmity \n"}
    const {word} = parseGPTResponse(text)
    expect(word).toMatch(' Enmity ')
   })

   test('should not parse the info if text incomplete', ()=>{
    const text = {text: "\n\nWord: Enmity \nMeaning: Hostility or ill will\nSentences: "}
    const {word,meaning,sentence1,sentence2,sentence3} = parseGPTResponse(text)
    expect(word).toEqual(' Enmity \n')
    expect(meaning).toEqual('Meaning: Hostility or ill will\n')
    expect(sentence1).toBeFalsy()
    expect(sentence2).toBeFalsy()
  })
  
  
})
