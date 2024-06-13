import { DiffEditor } from '@monaco-editor/react'
import { initialJSON } from '../data/data'
export default function DiffPreview({ code, setCode}) {
  return (
    <div>
    <DiffEditor 
      height="100vh"
      theme='vs-dark'
      original={initialJSON}
      modified={code}
      language={'json'}
      options={{
        autoIndent: 'full'
      }}
    />
    </div>
  )
}
