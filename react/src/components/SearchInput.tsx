// src/components/SearchInput.tsx
import React from 'react';

interface SearchInputProps {
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ word, setWord }) => {
  return (
    <div>
      <label>Palabra a Buscar:</label>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
