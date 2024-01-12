// import React from 'react'

function Intro() {
  return (
    <div className="intro-text pt-5 pl-16 bg-welcome-intro bg-cover bg-left " >
      <h1 className="text-[5rem] text-main-color pb-20 font-['Bebas']">BUSTER</h1>
      <h3 className="text-[3.5rem] font-medium">No Ads <br />Unlimited Movies & TV <br />Personalizing experience</h3>
      <p className="text-3xl font-thin pt-5 pb-14 ">Always Renovate. Cancel anytime.</p>
      <a href="">
        <button className="w-52 h-16 text-2xl bg-[--main-color] rounded-lg text-[#0d141a] hover:bg-[#0aa1a1] hover:text-[hsla(0,0%,100%,.9)] transition ease-out delay-100 mb-36 ">Watch Now</button>
      </a>
    </div>
  )
}

export default Intro