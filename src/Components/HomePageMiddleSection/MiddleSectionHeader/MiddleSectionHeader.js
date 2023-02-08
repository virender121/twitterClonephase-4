import React from 'react'
import style from './MiddleSectionHeader.module.css'

function MiddleSectionHeader() {
  return (
    <div className={style.main}>
      <h2>Home</h2>
      <div className={style.button}>
        <button>For you</button>
        <button>Following</button>
      </div>
    </div>
  )
}

export default MiddleSectionHeader
