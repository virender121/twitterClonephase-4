import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import style  from './DialogBox.module.css'
import Image from '../../../Assest/Image/Profile.png'
import { useState ,useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { IspostAtom } from '../../../RecoilState/RecoilAtom';

import CollectionsIcon from '@mui/icons-material/Collections';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useRef  } from 'react';
import { BsCheckLg } from 'react-icons/bs';




const Transition = React.forwardRef(function Transition(props, ref ) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox() {

  const [image,setImage] = useState('')
    const inputRef = useRef(null)
    let initialValues
    if(localStorage.getItem("userTweets") == null){
      initialValues=[]
    }else{
        initialValues=JSON.parse(localStorage.getItem("userTweets"))
    }


  const [data, setData] = useState("")
  const [tweet, setTweet] = useState(initialValues)
  const [open, setOpen] = React.useState(false);
  // const [tweetData,setTweetData] = useState( postData )
  // console.log(tweet)


  const iconList = [
    {
        icon : <CollectionsIcon
        className={style.icon}
        />,
        action : 'pickImage'

    },
    {
        icon : <GifBoxOutlinedIcon
        className={style.icon}
        />,

    },
    {
        icon : <ListOutlinedIcon
        className={style.icon}
        />,
    },
    {
        icon : <EmojiEmotionsOutlinedIcon
        className={style.icon}
        />,
    },
    {
        icon :  <LocationOnOutlinedIcon
        className={style.icon}
        />
    }  
]


function handleOnClickIcon (action) {
    if(action === 'pickImage'){       
        inputRef.current.click()
    }
}


function handleOnSelectImage (e) {
    let reader = new FileReader();
    reader.onload = (e) => {
        setImage(e.target.result);
        // inputRef.current = null 
    };
    reader.readAsDataURL(e.target.files[0]);
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const newData=JSON.parse(localStorage.getItem("userData"))


  function handleSummit(){
   
    
    const newTweet =  {
      id: 10,
      name  : newData[0].Name,
      handlerName : newData[0].Email ,
      organization : "",
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022',
      tweets : [
          {
              tweetText : data,
              tweetPic : image,
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },

              ]
          },
        
      ],
    }

setTweet([newTweet, ...tweet])

    setOpen(false);
    setImage(" ")
    setData(" ")
    inputRef.current.value=""
 
  }
useEffect(()=>{
localStorage.setItem("userTweets",JSON.stringify(tweet))

},[tweet])


   
  

 
  return (
    <div>
      <button className={style.button1}  onClick={handleClickOpen}>
        Tweet
      </button>
      <Dialog open={open} >
     
      <button className={style.button} onClick={handleClose}>x</button>
      <img className={style.image} src={Image} alt="Profile"/>
      <div className={style.dialogBox}>
       <input className={style.input}  onChange={(e)=> setData(e.target.value)} value={data} placeholder="What's happening?"></input>
      </div>
      <div>
     
      </div>
      <div >
         

           { 
            image &&  
            <div className={style.imageWrapper}>
                <img
                    src={image}
                    height = '40%'
                    width = '40%'
                />
                </div>
            }
           {/* tweet btn and icon container */}

            <div className={style.tweetFooterWrapper}>

                <div className={style.icons}>
                    {iconList.map(({icon,action},index) => (
                        <div 
                            onClick={
                                () => handleOnClickIcon(action)
                            }
                        >{icon}</div>
                    ))}
                </div>

            </div>
            <input
                type = 'file'
                hidden
                ref={inputRef}
                onChange = {handleOnSelectImage}
                name = 'tweetPic'
            />

        </div>
      <button onClick={handleSummit}   className={style.tweet} >Tweet</button>
       </Dialog>
      
    </div>
  );
}








