import React, {useState} from 'react';
// import { GoogleGenerativeAI } from '@google-cloud/dialogflow';
// import Run from './Run';
 
const TextBox=()=> {
    const [msg,setMsg] =useState("");

  const handleSendMessage = async (message) => {
    try {
        // const response = await Run(`Generate appropriate response for the following email. Return only the body :${JSON.stringify(msg)}`);

    }
    catch (error) {
      console.error('Error communicating with Dialogflow:', error);
    }
  };

  return (
    <div>
      <h1>Gemini Chatbot</h1>
      <input type="text" name='inputfield' placeholder='enter text'/>
      
    </div>
  );
};

export default TextBox;
