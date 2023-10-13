import './App.scss';

//Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/plugins/save.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";

import { useState } from 'react';

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const [model, setModel] = useState(() => {
    return localStorage.getItem("savedHtml" || "")
  })

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <section className={`main ${isDark ? 'dark' : 'light'}`}>

      <article className='header'>
        <h1 className='header__h1'>Text editor with local storage and dark / light mode</h1>
        <button
          onClick={toggleTheme}
          className="globalBtn"
        >{isDark ? "Light mode" : "Dark mode"}
        </button>
      </article>

      <article className="text-editor">
        <FroalaEditorComponent
          tag="textarea"
          model={model}
          onModelChange={e => setModel(e)}
          config={{
            saveInterval: 1000,
            events: {
              "save.before": function (html) {
                localStorage.setItem("savedHtml", html)
              }
            }
          }}
        />
        <button
          onClick={() => alert("NO FUNCTIONALITY TO THIS BUTTON")}
          className="globalBtn"
        >Submit</button>
      </article>
    </section>
  );
}
