import { selectOptions } from "@testing-library/user-event/dist/select-options";
import { useState } from "react";
import styles from "./App.css";
import { marked } from "marked";
// let marked = require("marked");
// const marked = require("marked");
marked.setOptions({
  breaks: true,
});
const renderer = new marked.Renderer();

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1 className="p-4">hai</h1>
      <textarea
        name="text"
        id="editor"
        value={text}
        className="textarea"
        onChange={(e) => setText(e.target.value)}
        rows="10"
      ></textarea>
      <h3 className="pt-3" id="preview">
        output
      </h3>
      <Preview markdown={text} />
      {/* <textarea
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(marked, { renderer: renderer }),
        }}
      />
      {/* dangerouslySetInnerHTML=
      {{
        __html: marked(this.state.markdown),
      }} */}{" "}
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div
      // dangerouslySetInnerHTML={{
      //   __html: marked(markdown, { renderer: renderer }),
      //   // __html: marked(this.props.text),
      // }}

      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
      id="Preview"
    ></div>
  );
}

export default App;
