import React from 'react'

const Result = ({option,selected}) => {
  return (
        <>
        {option==='eng'?<div className="result">
          <h3 className="result_word">{selected.word_eng}</h3>
          <p className="result_definition">{selected.definition_eng}</p>
      </div>:<div className="result">
          <h3 className="result_word">{selected.word_uz}</h3>
          <p className="result_definition">{selected.definition_uz}</p>
      </div>}
      </>
  )
}

export default Result