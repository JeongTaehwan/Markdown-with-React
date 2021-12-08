import React from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function App() {
  const markdown = `Just a link: https://reactjs.com.`
  return (
    ReactDom.render(
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,
      document.body
    )
  );
}

export default App;
