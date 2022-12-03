//Con este comentario no me sale el warning de usar eval
/* eslint no-eval: 0*/ 

//Importacion
import React, {useState} from "react"; //No es necesaria en versiones nuevas
import words from "lodash.words";
import Result from "./components/Result";
import Functions from "./components/Functions";
import MathOperations from "./components/Math-Operations";
import Numbers from "./components/Numbers";
import './App.css'

//Generar función del componmente (arrow)
const App = () => {

    const [text, setText] = useState("");
    const items = words(text, /[^+^-^*^/]+/g)
    const value = items.length > 0 ? items[items.length-1] : '0';

    return ( //Recordar los ()
    <main className="react-calculator">
        <Result value={value}/>        
        <Numbers onClickNumber={num => {
            setText(`${text}${num}`)
        }} />
        <Functions 
            onContentClear={clear => {
                setText('')
            }} 
            onDelete={() => {
                if (0<text.length){
                    const newText = text.substring(0, text.length - 1)
                    setText(`${newText}`)
                }  
            }}
        />
        <MathOperations 
            onClickOperation={operation => {
                setText(`${text}${operation}`)
            }} 
            onClickEqual={equal => {
                setText(eval(text).toString())
            } }
        />
    </main>)
}

//Exportar componente
export default App;