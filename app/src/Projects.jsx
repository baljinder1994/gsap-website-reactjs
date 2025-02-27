import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Projects = () => {
    const services=[
        {title:"Web Development",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem?",icon:"🌐"},
        {title:"Web Design",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem?",icon:"📱"},
        {title:"Digital Marketing",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem?",icon:"🎨"},
        {title:"Web Development",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem?",icon:"🚀"},
        
        {title:"Web Development",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem?",icon:"🌐"},
        {title:"Web Design",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem?",icon:"📱"},
        {title:"Digital Marketing",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem?",icon:"🎨"},
        {title:"Web Development",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem?",icon:"🚀"},
   
    ]
    const sectionRef=useRef(null)
        const cardsRef=useRef([])

    useEffect(() =>{
        
        const cards= cardsRef.current;
        gsap.set(cards,{opacity:0,y:-200,scale:0.8})

        gsap.to(cards,{
            opacity:1,
            y:0,
            scale:1,
            duration:1.5,
            ease:"bounce.out",
            stagger:{
                amount:1,
                from:"start"
            },
            scrollTrigger:{
                trigger:sectionRef.current,
                start:"top 85%",
                end:"top 50%",
                toggleActions:"play none none reset"
            }
        })
    })
  return (
    <section ref={sectionRef}className='bg-[#2d033b]  text-white py-20'>
       <div className='container mx-auto text-center'>
       <h2 className='text-4xl md:text-5xl font-bold text-[#ffd166] mb-20'>Our <span className='text-[#ff7ed4]'>Services</span></h2>
      
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {services.map((service,index) =>(
            <div 
            ref={(el) =>(cardsRef.current[index] = el)}
            key={index}
            className='group relative bg-[#1f1235] p-8 rounded-xl shadow-lg transform transition-all hover:rotat-3 hover:scale-105 hover:shadow-2xl'
            >
              <div className='relative h-40 w-full text-center'>
                <div className='absolute inset-0 flex items-center justify-center text-6xl transition-transform duration-500 group-hover:rotate-y-180'>{service.icon}</div>
              </div>
              <h3 className='text-xl font-bold mt-4 text-[#ffd166]'>{service.title}</h3>
              <p className='text-gray-300 mt-2'>{service.des}</p>

              <div className='absolute inset-0 rounded-xl border-4 border-transparent transition-all duration-500 group-hover:border-[#ff7ed4] group-hover:shadow-glow'></div>
            </div>

           
        ))}
      </div>
       </div>
    </section>
  )
}

export default Projects
