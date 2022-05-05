import React from 'react'

const Result = ({option,selected}) => {
    console.log(option,selected)
  return (
        <>
        {option==='eng'?<div className="result">
          <h2 className="result_word">{selected.word_eng}</h2>
          <p className="result_definition">{selected.definition_eng}</p>
      </div>:<div className="result">
          <h2 className="result_word">{selected.word_uz}</h2>
          <p className="result_definition">{selected.definition_uz}</p>
      </div>}
      </>
  )
}

export default Result