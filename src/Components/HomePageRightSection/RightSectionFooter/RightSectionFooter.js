import style from './RightSectionFooter.module.css'
import React from 'react'

function RightSectionFooter() {
  return (
    <div className={style.main}>
      
      
      <a href="https://twitter.com/en/tos"> Terms of Services   </a>
      <a href="https://twitter.com/en/privacy">Privacy Policy </a>
      <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">Cookies Policy </a>
      <a href="https://help.twitter.com/en/resources/accessibility">Accessibility </a>
      <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo" >Add info More...</a>
      <p style={{fontSize:"1rem"}}>
       @2023 Twitter,Inc.
      </p>

    </div>
    
  )
}

export default RightSectionFooter
