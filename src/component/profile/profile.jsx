import React from 'react'
import "./profile.css"


const profile = () => {

  return (
    <div className="profile">
    <div className="profile_header">
    <img src="images/logo.png"alt="netflix" />
    </div>
    <p>프로필 관리</p>
    <div className="choose_profile">
    <ul>
      <div className="profile_flex">
      <li>
          <div>
          <img src="images/pro1.png" alt="엘"/>
          <p>엘</p>
            </div>
            </li>
      </div>
      <div className="profile_flex">
      <li>
          <div>
          <img src="images/pro2.png"alt="마이크"/><p>마이크</p>
          </div>
          </li>
      </div>
      <div className="profile_flex">
      <li>
          <div>
          <img src="images/pro3.png" alt="더스틴"/><p>더스틴</p>
          </div>
          </li>
      </div>
      <div className="profile_flex">
      <li>
          <div>
          <img src="images/pro4.png"alt="윌"/><p>윌</p>
          </div>
          </li>
      </div>
       
      </ul>
    </div>
    <div className="setting_btn">
    <button><p>완료</p></button>
    </div>
    
  </div>
  )
}

export default profile
