// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import ParagraphInput from './components/ParagraphInput';

const App: React.FC = () => {
  const [word, setWord] = useState<string>("");
  const [paragraph, setParagraph] = useState<string>("");
  const [lineNumber, setLineNumber] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  //busqueda
  const binarySearch = (arr: string[], word: string): number => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === word) {
        return mid; 
      } else if (arr[mid] < word) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1; 
  };

  
  const handleSearch = () => {
    const lines = paragraph.split("\n"); 
    let found = false;
    let lineFound = -1;
    
    
    // Recorrer 
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim(); 
      const words = line.split(" "); 

    
      const index = binarySearch(words, word);

      if (index !== -1) {
        lineFound = i + 1; 
        found = true;
        break; 
      }
    }

    if (found) {
      setMessage(`La palabra  existe esta en la linea ${lineFound}`);
    } else {
      setMessage(`La palabra no existe`);
    }

    setLineNumber(found ? lineFound : null);
  };

  return (
    <div className="App">
      <SearchInput word={word} setWord={setWord} />
      <ParagraphInput paragraph={paragraph} setParagraph={setParagraph} />
      <button onClick={handleSearch}>Buscar</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
