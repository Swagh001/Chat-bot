import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GMINI_API_KEY);

  const handleRun = async () => {
    try {
      const model = await genAI.getGenerativeModel({ model: 'gemini-pro' });
      const result = await model.generateContent(prompt);
      const text = result.response.text;
      setResponse(text);
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt..."
      />
      <button onClick={handleRun}>Generate Text</button>
      <br />
      {response && <p>{response}</p>}
    </div>
  );
}

export default App;
