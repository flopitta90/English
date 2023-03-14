
import { OpenAI } from "./open.js";
import dotenv from 'dotenv';
dotenv.config();
// Creating a new instance of the OpenAI class and passing in the OPENAI_KEY environment variable
const openAI = new OpenAI(process.env.OPENAI_KEY);
const model = 'text-davinci-003';
// Function to generate the prompt for the OpenAI API 
// In the future, it will be moved to a helper class in the next code review
const generatePrompt = () => {
    return 'Write a random english word, with the meaning and 3 sentences as example using the word, following this structure Word: [word] Meaning: [meaning] Sentences: 1:[sentence1] 2:[sentence2] 3:[sentence3]'
};
// Use the generateText method to generate text from the OpenAI API and passing the generated prompt, the model and max token value
export const reqOpenAi = async() => {
   const text = await openAI.generateText(generatePrompt(), model, 350)
    .then(text => {
        // Logging the generated text to the console
        // In the future, this will be replaced to upload the returned blog text to a WordPress site using the WordPress REST API
    
        return text
    })
    .catch(error => {
        console.error(error);
    });
    return text
}

    