import React from 'react'
import { Editor } from '@monaco-editor/react';
import { initialJSON } from '../data/data';

export default function JsonEditor({ code, setCode }) {
   function handleEditorChange(value, event) {
    console.log("onChange", { value, event })
    setCode && setCode(value);
    // here is the current value
  }

  function handleEditorDidMount(editor, monaco) {
    console.log('onMount: the editor instance:', editor);
    console.log('onMount: the monaco instance:', monaco);
  }

  function handleEditorWillMount(monaco) {
    console.log('beforeMount: the monaco instance:', monaco);
  }

  function handleEditorValidation(markers) {
    // model markers
    // markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  return (
    <div>
      <h3>Json Editor</h3>
      <Editor theme='vs-dark'height='100vh'
          defaultLanguage={'json'}
          value={code}
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          beforeMount={handleEditorWillMount}
          onValidate={handleEditorValidation}
          // defaultValue={examples[selectedLanguageId] || ''}
          // options={options}
          // beforeMount={handleEditorWillMount} 
          />
    </div>
  )
}
