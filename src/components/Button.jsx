import { Phrase } from "./Phrase";
import { useState } from "react";
import getRandomArray from '../utils/getRandomArray'
import getRandomBackground from "../utils/getRandomBackground";

export const Button = ({phrase, phrases}) => {

  const [sentence, setSentence] =  useState(phrase)
  
  function sentenceRandom(){
    const newPhrase = getRandomArray(phrases)
    const background = getRandomBackground()
    /* console.log(background); */
    setSentence(newPhrase)
    document.body.style.backgroundImage = "url('/public/images/fondo" + background + ".png')";

  }

  return (
    <>
      <button onClick={sentenceRandom} className="button__luck">Probar mi suerte</button>
      <Phrase phrase={sentence}/>
    </>
  );
};


