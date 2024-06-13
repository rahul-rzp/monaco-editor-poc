import { useEffect, useState } from "react";
import JsonEditor from "./JsonEditor"
import DiffPreview from "./DiffPreview";
import { initialJSON } from "./data/data";

const KEY = 'editor__code';

function App() {
  const [isEditor, setIsEditor] = useState(true);
  const [code, setCode] = useState('');

  useEffect(() => {
    const persistedCode = localStorage.getItem(KEY);
      setCode(persistedCode || initialJSON);
  }, []);

  const modifyCode = (newCode) => {
    setCode(newCode);
    localStorage.setItem(KEY, newCode)
  }

  const onToggleEditor = () => {
    setIsEditor(prev => !prev);
  }
  return (
      <div>
        <h1>Monaco Editor</h1>
        <button onClick={onToggleEditor}>Toggle Editor</button>
        {isEditor ? <JsonEditor code={code} setCode={modifyCode}/> : <DiffPreview code={code} setCode={modifyCode}/>}
      </div>
  )
}

export default App
