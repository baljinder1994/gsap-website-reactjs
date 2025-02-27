import React, { useEffect, useRef } from 'react'
import {CheckCircle} from 'lucide-react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const About = () => {
  const sectionRef=useRef(null)
  const imgRef=useRef(null)
  const textRef=useRef(null)
  const cardRefs=useRef([])

  useEffect(() =>{
    gsap.fromTo(textRef.current,
    {opacity:0,x:-50},
    {
        opacity:1,
        x:0,
        duration:1,
        ease:"power1.out",
        scrollTrigger:{
            trigger:textRef.current,
            start:"top 80%",
            toggleActions:"play none none reverse"
        }
    
    }
)

gsap.fromTo(imgRef.current,
    {opacity:0,scale:0.8,rotateY:10},
    {
        opacity:1,
        scale:1,
        rotateY:0,
        duration:1,
        ease:"power3.out",
        scrollTrigger:{
            trigger:imgRef.current,
            start:"top 85%",
            toggleActions:"play none none reverse"
        }
    
    }
)

cardRefs.current.forEach((card,index) =>{
    gsap.fromTo(
        card,
        {opacity:0,y:30},
        {
            opacity:1,
            y:0,
            duration:1,
            delay:index * 0.2,
            ease:"power2.out",
            scrollTrigger:{
                trigger:card,
                start:"top 90%",
                toggleActions:"play none none reverse"
            }
        }
    )
})

  })



  return (
    <section ref={sectionRef}className='bg-[#2d033b]  text-white py-20 px-6'>
      <div className=' container mx-auto grid md:grid-cols-2 items-center'>
        <div className=' relative group'>
            <img ref={imgRef}src="img.png" className='w-full max-w-lg  transform transition duration-500 group-hover:rotate-3 group-hover:scale-105'></img>
        </div>

        <div ref={textRef}>
            <h2 className='text-4xl md:text-5xl font-bold text-[#e5b8f4]'>Welcome to <br/> <span>Our Studio</span></h2>
            <p className='text-lg text-gray-300 mt-4'>    We craft digital experiences that make an impact. Our expertise in technology and design helps businesses grow with innovation.
            </p>
            <div className='mt-6 space-y-4'>
                {[
                    "Creative Design",
                    "User-Centered Approach",
                    "Scalable Solutions"
                ].map((feature,index) =>(
                    <div ref={(el) => (cardRefs.current[index] =el)} key={index} className='flex items-center gap-4 bg-[#2e1d62] p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105'>
                      <CheckCircle className='text-[#e5b8f4]' size={24}/>
                      <span className='text-lg font-bold'>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
