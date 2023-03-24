export const Phrase = ({ phrase }) => {
  return (
    <>
      <div className="card__phrase">
        <article className="phrase">{phrase.phrase}</article>
        <div className="coutpage"></div> 
        {/* <div className="corte"></div> */}
      </div>

      <div className="card__autor">
        <p>Fuente: {phrase.author}</p>
      </div>
    </>
  );
};
