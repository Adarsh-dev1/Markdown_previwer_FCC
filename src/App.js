import { selectOptions } from "@testing-library/user-event/dist/select-options";
import { useState } from "react";
import styles from "./App.css";

// marked.selectOptions({
//   breaks: true,
// });

// const renderer = new marked.Renderer();

function App() {
  const [text, setText] = useState("");

  return (
    <div className="text-center px-4">
      <h1 className="p-4">hai</h1>
      <textarea
        name="text"
        id="editor"
        onChange={(e) => setText(e.target.value)}
        rows="10"
      ></textarea>
      <h3 className="pt-3" id="preview">
        output
      </h3>
      {/* <Preview markdown={text} /> */}
    </div>
  );
}

// function Preview({ markdown }) {
//   return (
//     <div>
//       dangerouslySetInnerHTML=
//       {{
//         __html: marked(markdown, { renderer: renderer }),
//       }}
//       id="Preview"
//     </div>
//   );
// }

export default App;
