// src/components/ParagraphInput.tsx
import React from 'react';

interface ParagraphInputProps {
  paragraph: string;
  setParagraph: React.Dispatch<React.SetStateAction<string>>;
}

const ParagraphInput: React.FC<ParagraphInputProps> = ({ paragraph, setParagraph }) => {
  return (
    <div>
      <label>Párrafo Grande:</label>
      <textarea
        value={paragraph}
        onChange={(e) => setParagraph(e.target.value)}
        rows={10}
        cols={50}
      />
    </div>
  );
}

export default ParagraphInput;
