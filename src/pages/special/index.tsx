import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

import MarkdownFile from 'assets/data/special.md';
import './style.css';

export const SpecialPage = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(MarkdownFile)
      .then(response => response.text())
      .then(text => {
        setText(() => text);
      });
  }, []);

  return (
    <div>
      <ReactMarkdown className='md' children={text} />
    </div>
  );
};
