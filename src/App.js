import './App.scss';
  
//Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";

export default function  App() {
  

  
   return ( 
    
    
    
    <div className="app">

    <article className='header'>
      <h1>Text editor with local storage and dark / light mode</h1>
      <button 
      onClick={() => alert("NO FUNCTIONALITY TO THIS BTN")}
      className="editor-container__btn"
      >Submit</button>
    </article>
    
    <article className="editor-container">
      <FroalaEditorComponent 
      tag="textarea"
      />
      <button 
      onClick={() => alert("NO FUNCTIONALITY TO THIS BTN")}
      className="editor-container__btn"
      >Submit</button>
      </article>
    </div>
      );
    }
