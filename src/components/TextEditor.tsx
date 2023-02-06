import { useState } from "react";
import { BaseEditor, Descendant, createEditor } from "slate";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

export function TextEditor() {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable />
    </Slate>
  );
}
