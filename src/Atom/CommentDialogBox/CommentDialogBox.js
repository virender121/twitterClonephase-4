import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import style  from './CommentDialogBox.module.css'
import Image from '../../Assest/Image/Profile.png'
import { useState } from 'react';
import {BiMessageRounded} from 'react-icons/bi';
import { useRecoilState } from 'recoil';
import { IspostAtom } from '../../RecoilState/RecoilAtom';

const Transition = React.forwardRef(function Transition(props, ref ) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CommentDialogBox() {
  const [tweet, setTweet] = useRecoilState(IspostAtom)
    const [count ,setCount] = useState(0)
  const [data, setData] = useState("")
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
   
  };

  const handleClose = () => {
    setOpen(false);
  };
  const userData= JSON.parse(localStorage.getItem("userData"))
// console.log(newdata)
  function handleSummit(){
    const obj= {
      name : userData.Name,
      handlerName : userData.Email,
      tweetReplyText : data,
  } 

  // setTweet([obj, ...tweet[0].tweets[0].TweetReplies])
  // console.log([obj, ...tweet[0].tweets[0].TweetReplies])
   setData(data)
   setData('')
   setCount(count +1)
  }

  return (
    <div>
      <button className={style.button1}  onClick={handleClickOpen}>
      <BiMessageRounded/> {count}
      </button>
      <Dialog open={open} >
     
      <button className={style.button} onClick={handleClose}>x</button>
      <img className={style.image} src={Image} alt="Profile"/>
      <div className={style.dialogBox}>
       <input className={style.input}  onChange={(e)=> setData(e.target.value)} value={data} placeholder="Tweet Your Reply"></input>
      </div>
      <button onClick={handleSummit}   className={style.tweet}>Reply</button>
       </Dialog>
      
    </div>
  );
}
