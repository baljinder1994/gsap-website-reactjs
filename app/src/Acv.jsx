import { Award, Briefcase, ThumbsUp, Users } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Acv = () => {
    const stats=[
        {icon:<Briefcase size={60}/>,value:100,label:"Projects Completed"},
        {icon:<Users size={60}/>,value:80,label:"Happy Clients"},
        {icon:<ThumbsUp size={60}/>,value:90,label:"Positive Feedback (%)"},
        {icon:<Award size={60}/>,value:20,label:"Years of Experinece"},
    ]

    const countersRef=useRef([])

    useEffect(() =>{
        countersRef.current.forEach((counter,index) =>{
            gsap.fromTo(
                counter,
                {innerText:"0"},
                {
                    innerText:stats[index].value,
                    duration:2.5,
                    ease:"power3.out",
                    scrollTrigger:{
                        trigger:counter,
                        start:"top 80%",
                        toggleActions:"play none none none"
                    },
                    snap:{innerText:1},
                    onUpdate:function(){
                        counter.innerText=Math.floor(this.targets()[0].innerText);
                    }
                }
            )
        })
    },[])
  return (
    <section className='bg-[#2d033b] text-white py-20 px-6 relative overflow-hidden'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl md:text-5xl font-bold text-[#ffd166] mb-20'>Our <span className='text-[#ff7ed4]'>Achievements</span></h2>
      
       <div className='hidden md:block absolute w-1 h-[70vh] bg-[#ffd166] left-1/2 transform -translate-x-1/2 top-1/4'></div>

       <div className='flex flex-col items-center gap-20'>
        {stats.map((stat,index) =>(
            <div key={index}
            className={`flex items-center w-full max-w-4xl ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
            <div className='flex items-center gap-6'>
                 <div className='text-[#ffd166]'>{stat.icon}</div>
                 <h3 ref={(el) => (countersRef.current[index] =el)}className='text-6xl font-extrabold'>0</h3>
                 <p className='text-gray-300 text-xl'>{stat.label}</p>
            </div>
            </div>
        ))}
       </div>
      </div>
    </section>
  )
}

export default Acv
