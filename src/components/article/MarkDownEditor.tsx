import { memo, VFC } from 'react';
import styled from 'styled-components';
import { palette } from '../../variable';
import SimpleMde from 'react-simplemde-editor';
import { marked } from 'marked';
import highlight from 'highlightjs';
import DOMPurify from 'dompurify';
import 'easymde/dist/easymde.min.css';
import 'highlightjs/styles/docco.css';

type props = {
  isEdit: boolean;
  value: string;
  onChange: (value: string) => void;
};

export const MarkDownEditor: VFC<props> = memo((props) => {
  const { isEdit, value, onChange } = props;

  marked.setOptions({
    // 改行
    breaks: true,
    // コードブロック
    highlight: (code, lang) => highlight.highlightAuto(code, [lang.split(':')[0]]).value,
  });

  return (
    <_Markdown>
      {isEdit ? (
        <SimpleMde value={value} onChange={onChange} />
      ) : (
        <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(value)) }} />
      )}
    </_Markdown>
  );
});

const _Markdown = styled.div`
  h1 {
    font-size: 34px;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 26px;
  }
  h4 {
    font-size: 22px;
  }
  h5 {
    font-size: 18px;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
  }
  h1,
  h2 {
    padding-bottom: 0.1em;
    border-bottom: 1px solid ${palette.border};
  }
  hr {
    border-top: 1px solid ${palette.border};
  }
  ul {
    > li {
      &::before {
        content: '⚫︎';
      }
      > ul {
        > li {
          &::before {
            content: '⚪︎';
          }
          > ul {
            > li::before {
              content: '◼️';
            }
          }
        }
      }
    }
  }
  ol {
    counter-reset: num;
    > li {
      counter-increment: num;
      &::before {
        content: counter(num) '.';
        font-size: 16px;
      }
    }
  }
  li {
    position: relative;
    min-height: 24px;
    padding-left: 1em;
    > ul {
      padding-left: 20px;
    }
    &::before {
      position: absolute;
      top: 5px;
      left: 0;
      margin-right: 4px;
      font-size: 10px;
    }
  }
  blockquote {
    margin: 1.5em 0;
    padding: 1em 0 1em 1em;
    color: ${palette.gray[1]};
    border-left: 5px solid ${palette.gray[0]};
  }
  a {
    color: ${palette.blue};
  }
  pre,
  code {
    background: ${palette.gray[0]};
  }
  pre {
    margin: 20px 0;
    padding: 20px;
  }
  code {
    padding: 0 4px;
  }
  // ツールアイコン削除
  .editor-toolbar {
    > .image,
    > .guide {
      display: none;
    }
  }
`;
