import React, {useState} from 'react'
import style from './RightSideSecondCard.module.css'
import RightSideSecondCardButton from '../../../Atom/RightSIdeSecondCardButton/RightSideSecondCardButton'


function RightSideSecondCard() {
    const SecondCard=[
        {
            Card:<RightSideSecondCardButton/>
        },
        {
            Card:<RightSideSecondCardButton/>
        },
        {
            Card:<RightSideSecondCardButton/>
        },
        {
            Card:<RightSideSecondCardButton/>
      },
   
    ]
    const [card, setCard] = useState(SecondCard.slice(2))
    const [isAskedforAllData , setIsAskedforAllData] = useState(false)

    // 
    function hanldeClickShowMore () {
        setIsAskedforAllData(!isAskedforAllData)
        if(isAskedforAllData){
            return setCard(SecondCard.slice(0,2))
        }
        setCard(SecondCard)
    }

  return (
    <div className={style.main}>
      <h2 >Who to Follow</h2>
      {
        card.map((card)=>
        <div className={style.card}>{card.Card}</div>
        )
      }
      <p 
                onClick={hanldeClickShowMore}
                className = {style.ShowMoreText}
                > 
                {isAskedforAllData ? 'Show less':'Show more'}
            </p>
    </div>
  )
}

export default RightSideSecondCard
