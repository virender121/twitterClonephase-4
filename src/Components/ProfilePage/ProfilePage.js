import React from 'react'
import style from './ProfilePage.module.css'
import LeftSection from '../../Section/LeftSection/LeftSection'
import RightSection from '../../Section/RightSection/RightSection'
import ProfileSection from '../../Section/ProfileSection/ProfileSection'


function ProfilePage() {
  return (
    <div className={style.main}>
      <LeftSection/>
      <ProfileSection/>
      <RightSection />
    </div>
  )
}

export default  ProfilePage
