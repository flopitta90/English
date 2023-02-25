import { Configuration, OpenAIApi } from 'openai';
export class OpenAI {
    constructor(apiKey) {
        // Create the Configuration and OpenAIApi instances
        this.openai = new OpenAIApi(new Configuration({ apiKey }));
    }
    // Asynchronous function to generate text from the OpenAI API
    async generateText(prompt, model, max_tokens, temperature = 0.85) {
        try {
            // Send a request to the OpenAI API to generate text
            const response = await this.openai.createCompletion({
                model,
                prompt,
                max_tokens,
                n: 1,
                temperature,
            });
           
            console.log(`request cost: ${response.data.usage.total_tokens} tokens`);
            console.log(response.data)
               // Return the text of the response
            return response.data.choices[0].text;
        } catch (error) {
            throw error;
        }
    }
}