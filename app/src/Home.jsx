import { useEffect, useRef, useState } from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Home() {

 const sectionRef=useRef(null)
 const textRef=useRef(null)
 const btnRef=useRef(null)
 const imgRef=useRef(null)


 useEffect(() =>{
  const section =sectionRef.current;
  if(!section) return;

  gsap.registerPlugin(ScrollTrigger)

  gsap.fromTo(
    textRef.current,
    {opacity:0,y:50,skewY:10},
    {opacity:1,y:0,skewY:0,duration:1,ease:"power3.out"}
  )

  gsap.to(textRef.current,{
    skewX:5,
    duration:1.5,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut"
  })
 

 gsap.fromTo(
  btnRef.current,
  {opacity:0,scale:0.5,rotation:-20},
  {
    opacity:1,
    scale:1,
    rotation:0,
    duration:0.8,
    ease:"elastic.out(1,0.4)",
    scrollTrigger:{
      trigger:btnRef.current,
      start:"top 100%",
      end:"top 60%",
      scrub:1
    }
  }
 )
  gsap.fromTo(
    imgRef.current,
    {opacity:0,scale:0.8,skewX:20,rotation:-10},
    {
      opacity:1,
      scale:1,
      rotation:0,
      skewX:0,
      ease:"power1.out",
      scrollTrigger:{
        trigger:imgRef.current,
        start:"top 85%",
        toggleActions:"play none none reverse"
      }
    }
  )
 

 

 
})
  return (
    <>
      
     <section ref={sectionRef} className='bg-[#2d033b] text-white min-h-screen  flex items-center justify-center px-6'>
      <div className='container mx-auto grid md:grid-cols-2 items-center gap-12'>

        <div ref={textRef}className='text-center md:text-left'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight text-[#e5bbf4]'>Empower Your Business with <br/> <span className='text-[#810cab]'>Next-Level Solutions</span></h1>
       <p className='text-lg text-gray-300 mt-4'>Build,grow and scale your ideas with our cutting-edge technology solutions. 
        Join us and transform the way you work.</p>

        <div className='mt-6 flex flex-col md:flex-row items-center gap-4'>
          <button ref={btnRef}className='bg-[#810cab] hover:bg-[#e5b8f4] text-white px-6 py-3 rounded-full text-lg font-bold transition-all flex items-center gap-2 '>Get Started</button>
          <button className='border-2 border-[#e5b8f4] text-[#e5b8f4] hover:bg-[#e5b8f4] hover:text-[#2d033b] px-6 py-3 rounded-full text-lg font-bold transition-all'>Learn More</button>
        </div>
        </div>

        <div className='flex justify-center'>
          <img ref={imgRef}src="img1.png" className='w-full h-screen object-cover max-w-lg '></img>
        </div>
      </div>
   
     </section>
    
    </>
    
  )
}

export default Home
