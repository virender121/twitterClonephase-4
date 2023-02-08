import style from './CardDetail.module.css'
import CommentDialogBox from '../../Atom/CommentDialogBox/CommentDialogBox'
import LikeButton from '../../Atom/LikeButton/LikeButton'
import RetweetButton  from '../../Atom/RetweetButton/RetweetButton'
import Image from '../../Assest/Image/Profile.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FcLike } from 'react-icons/fc'
import { BsSuitHeart } from 'react-icons/bs'








export default function CardDetail() {
  const likes=JSON.parse(localStorage.getItem("userTweets"))
 
  const [isShow, setShow] = useState(false)
  const [count,setCount] =useState(10)




function Counter(id){

   const newData=likes.filter((item)=>item.id ===id)
    newData[0].tweets[0].likesCount=count

  console.log(newData)

  setShow(!isShow)
  
  if(isShow==true){
    setCount(count-1)
  }else{
    setCount(count+1)
  }
 
}
    const [data, setData] = useState([])
    console.log(data)


    function getData(){
      const items = JSON.parse(localStorage.getItem('userTweets'));
      setData(items);
    }

       useEffect(() => {
       getData()
      },[]);

      console.log(data)
    return(
             
                 <div className={style.ImageWrapper}>
                     {data.map((item,id)=>
                     <>
                         <div key={id} className={style.heading}>
                                <Link to={`/ProfilePage/${item?.id}`}> <img className={style.img} src={Image} alt="Profile"/></Link>   
                                
                               
                                <h2>{item?.name}</h2>
                                <br/>
                                 <h5>{item?.handlerName}</h5>
                        </div>
                        <p>{item?.tweets[0]?.tweetText}</p>
                     <img
                       className={style.image}
                         src = {item?.tweets[0]?.tweetPic}    
                     />

                     

                <div className={style.bottomSection}>
                    <CommentDialogBox/>
                    <RetweetButton/>
                     <LikeButton   handleClicked={()=>Counter(item.id)}/>
                  </div>

                     </>
                     )}

               
                 </div>
                
    )
}



