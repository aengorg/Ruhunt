import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { RUHUNT_FORM_RIVALS_1 } from '../../constants';

import MarkdownFile from './text.md';
import './style.css';

export const TurPage = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(MarkdownFile)
      .then(response => response.text())
      .then(text => {
        setText(() => text);
      });
  }, []);

  return (
    <div className='rivals-content'>
      <a
        href={RUHUNT_FORM_RIVALS_1}
        className='ruhunt-link-form-rivals'
        target='_blank'
        rel='noopener noreferrer'
      >
        Подать заявку на участие
      </a>
      <ReactMarkdown className='md' children={text} />
    </div>
  );
};
