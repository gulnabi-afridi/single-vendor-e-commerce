import React from 'react'
import Wrapper from '../../components/shared/ComponentWrapper/Wrapper'

function Home() {
  return (
    <Wrapper>
        <div className="w-full h-[calc(100vh-140px)] bg-[url('/Assets/home/heroBg.jpg')] bg-bottom bg-cover bg-no-repeat "></div>
    </Wrapper>
  )
}

export default Home