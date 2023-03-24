import { Phrase } from "./Phrase";
import { useState } from "react";
import getRandomArray from '../utils/getRandomArray'
import getRandomBackground from "../utils/getRandomBackground";

export const Button = ({phrase, phrases}) => {

  const [sentence, setSentence] =  useState(phrase)
  
  function sentenceRandom(){
    const newPhrase = getRandomArray(phrases)
    const background = getRandomBackground()
    setSentence(newPhrase)
    document.body.style.backgroundImage = "url('./fondo2.png')";

  }

  return (
    <>
      <button onClick={sentenceRandom} className="button__luck">Probar mi suerte</button>
      <Phrase phrase={sentence}/>
    </>
  );
};


