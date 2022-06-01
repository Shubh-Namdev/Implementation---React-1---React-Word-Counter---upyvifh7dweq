import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
 const [charSize, changeCharSize] = useState(24);
 const [wordLimit, changeWordLimit] = useState(50);
 const [charCount, changeCharCount] = useState("");

 const wordNumber=(word) => {
   if(word.length == 0){
     return 0;
   }
   const wordCount = word.split(" ").length;
   return wordCount;
 }

  return (
    <div id="main">
      <form>
        <input type="range" min="16" max="32" value={charSize} onChange={(e) => {
          changeCharSize(e.target.value);
          console.log(charSize)
        }}/>

        <div style={{marginBottom:'1rem'}}>
          <h6>Word Limit</h6>
          <input value={wordLimit} onChange={(e) => {
            changeWordLimit(e.target.value);
          }}/>
        </div>

        <textarea style={{fontSize:`${charSize}px`}} value={charCount} onChange={(e) => {
          if(charCount.length < wordLimit){
            changeCharCount(e.target.value);
          }
        }}></textarea>

        <div>Total number of words are {wordNumber(charCount)}</div>
        <div>Total number of charachers are {charCount.length}</div>
      </form>
    </div>
  )
}


export default App;
