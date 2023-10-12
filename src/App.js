import './App.scss';

//Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";

import { useState } from 'react';

export default function App() {
  const [isDark, setIsDark] = useState(true)

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
        />
        <button
          onClick={() => alert("NO FUNCTIONALITY TO THIS BTN")}
          className="globalBtn"
        >Submit</button>
      </article>
    </section>
  );
}
