import { useEffect, useRef, useState } from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import ImageTool from '@editorjs/image'

const LinkTool = require('@editorjs/link')

const EditorComponent = () => {
  const editorRef = useRef<EditorJS | null>(null)
  const [editorData, setEditorData] = useState<any>(null)
  const [isPreview, setIsPreview] = useState<boolean>(false)

  useEffect(() => {
    if (!editorRef.current && !isPreview) {
      editorRef.current = new EditorJS({
        holder: 'editorjs',
        placeholder: 'พิมพ์ข้อความของคุณ....',
        onChange: () => {},
        tools: {
          header: {
            class: Header as unknown as any,
            inlineToolbar: true,
            config: {
              levels: [1, 2, 3, 4, 5, 6],
              defaultLevel: 1,
            },
          },
          list: {
            class: List as unknown as any,
            inlineToolbar: true,
            config: {
              defaultStyle: 'unordered',
            },
          },
          image: {
            class: ImageTool,
            config: {
              uploader: {
                uploadByFile: (file: any) => {
                  const reader = new FileReader()

                  return new Promise((resolve, reject) => {
                    reader.onload = function (event: any) {
                      const fileUrl = event.target.result
                      resolve({
                        success: 1,
                        file: {
                          url: fileUrl,
                        },
                      })
                    }

                    reader.onerror = function (error) {
                      reject('Failed to load the image')
                    }

                    reader.readAsDataURL(file)
                  })
                },
              },
            },
          },
          link: {
            class: LinkTool,
            config: {
              defaultProtocol: 'https://',
              meta: false,
            },
          },
        },
        defaultBlock: 'paragraph',
        autofocus: true,
        data: editorData,
      })
    }

    return () => {
      if (editorRef.current && typeof editorRef.current.destroy === 'function') {
        editorRef.current.destroy()
        editorRef.current = null
      }
    }
  }, [editorData, isPreview])

  const handlePreview = async () => {
    const data = await editorRef.current?.save()
    setEditorData(data)
    setIsPreview(true)
  }

  const handleEdit = () => {
    setIsPreview(false)
    editorRef.current?.render(editorData)
  }

  return (
    <div>
      {isPreview ? (
        <div>
          <button onClick={handleEdit}>Edit</button>
          <div>
            {editorData && (
              <div>
                {editorData.blocks.map((block: any, index: number) => {
                  if (block.type === 'header') {
                    return <h2 key={index}>{block.data.text}</h2>
                  }
                  if (block.type === 'paragraph') {
                    return <p key={index}>{block.data.text}</p>
                  }
                  if (block.type === 'image') {
                    return <img key={index} src={block.data.file.url} alt="image" />
                  }
                  return null
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div id="editorjs"></div> {/* ตรวจสอบว่ามี div นี้ใน DOM */}
          <button onClick={handlePreview}>Preview</button>
        </div>
      )}
    </div>
  )
}

export default EditorComponent
