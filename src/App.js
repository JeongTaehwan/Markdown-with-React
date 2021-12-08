import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

function App() {
  return (
    ReactDom.render(<ReactMarkdown># Hello, *world*!</ReactMarkdown>, document.body)
  );
}

export default App;
