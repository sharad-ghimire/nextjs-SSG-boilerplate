import React, { useEffect, useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  darcula,
  atomOneLight
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import ThemeContext from "../context/ThemeContext";

const Code = props => {
  const language = props.language || "typescript";
  const showLineNumbers = props.showLineNumbers || false;

  const theme = useContext(ThemeContext);

  return (
    <SyntaxHighlighter
      language={language}
      style={theme ? darcula : atomOneLight}
      showLineNumbers={showLineNumbers}
    >
      {props.value ? props.value : props.children}
    </SyntaxHighlighter>
  );
};

export default Code;
