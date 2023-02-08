import React, { useEffect, useState } from 'react'
import style from './RightSideCard.module.css'
import TrendOption from '../TrendOption/TrendOption'
import RightSideTrendOption from '../RightSideTrendOption/RightSideTrendOption'
import {data} from "../../Const/Const"

function RightSideCard() {
 const [newData, setNewData]=useState(data.slice(2))
 const [isShowingAllTrendings , setIsShowingAllTrendings] = useState(false)

  //  console.table(data)
  // localStorage.setItem("trendData",JSON.stringify(data)) 
  function handleRequestSeeAll () {
    setIsShowingAllTrendings(!isShowingAllTrendings)
    if(isShowingAllTrendings) {
       return setNewData(data.slice(0,2))
    }
    setNewData(data)
}

   const removeData=(id)=>{

    setNewData((data)=>data.filter((trend)=>trend.id !==id))
    localStorage.setItem("trendData",JSON.stringify(data)) 

  }

useEffect(()=>{
 const TrendData=JSON.parse(localStorage.getItem('trendData'))

 if(TrendData === null || TrendData.length === 0){
   setNewData(data);
  }else{
    setNewData(TrendData)
  }
},[data])

  return (
    <div className={style.container}>
       <h2>What's happening </h2>
      {
        newData?.map((elem, id) =>
        <> 
        <div key={id}  className={style.main}>
          <div>     
                          <div className={style.para}>{elem.name}</div>
                        <div className={style.trends}>{elem.trends}</div>
                        <div className={style.para}>{elem.Link}</div>    
          </div>
                        <div className={style.option}>{elem.option}</div>     
                        <div><TrendOption  handleClicked={()=>removeData(elem.id)} /> </div>
                        {/* <RightSideTrendOption/> */}
                         
        </div>

        
        </>
        )
      }
            { 
                data.length && 
                <p className={style.seeAll} 
                    onClick = {handleRequestSeeAll}
                >
                    {isShowingAllTrendings ? 'Show Less' : 'Show More'} 
                </p>
            }
    </div>
  )
}

export default RightSideCard

