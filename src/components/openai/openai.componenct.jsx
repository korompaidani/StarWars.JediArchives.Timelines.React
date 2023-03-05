import React, { useState } from 'react';

function OpenAi() {
    const [input, setInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
          setChatHistory([...chatHistory, { sender: 'user', message: input }]);
      
          const response = await fetch(`https://api.openai.com/v1/engines/text-davinci-003/completions`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
              prompt: input,
              max_tokens: 150,
              n: 1,
              stop: '\n',
            }),
          });
      
          const responseText = await response.text();
          const answer = responseText.split('\n')[0].trim();
      
          setChatHistory([...chatHistory, { sender: 'bot', message: answer }]);
          setInput('');
        }
      };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <h1>Chat with ChatGPT</h1>
            <div className="chat-history">
                {chatHistory.map((chat, index) => (
                    <div key={index} className={chat.sender}>
                        {chat.sender === 'bot' ? (
                            <p>
                                <strong>ChatGPT: </strong>
                                {chat.message}
                            </p>
                        ) : (
                            <p>
                                <strong>You: </strong>
                                {chat.message}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleChange} />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default OpenAi;
