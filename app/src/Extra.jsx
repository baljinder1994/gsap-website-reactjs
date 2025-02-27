import { CheckCircle, Facebook, Github, Instagram, Mail, Phone, Twitter } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Extra = () => {
    const points=[
        {title:"Expert Team",desc:"Highly skilled professional with years of experience"},
        {title:"Expert Team",desc:"Highly skilled professional with years of experience"},
        {title:"Expert Team",desc:"Highly skilled professional with years of experience"},
        {title:"Expert Team",desc:"Highly skilled professional with years of experience"},
    ]

    const sectionRef=useRef(null)
    const cardsRef=useRef([])

    useEffect(() =>{
        gsap.registerPlugin(ScrollTrigger)
        ScrollTrigger.refresh()

        cardsRef.current.forEach((card,index) =>{
            gsap.fromTo(
                card,
                {opacity:0,y:100,scale:0.9},
                {
                    opacity:1,
                    y:0,
                    scale:1,duration:1,
                    ease:"power3.out",
                    delay:index * 0.2,
                    scrollTrigger:{
                        trigger:card,
                        start:"top 85%",
                        end:"top 50%",
                        scrub:1,
                        toggleActions:"play none none none"
                    }
                }
            )
        })
        return () =>{
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    },[])
  return (
    <>
    <section ref={sectionRef}className='bg-[#2d033b]  text-white py-20 px-6'>
       <div className='container mx-auto text-center relative'>
       <h2 className='text-4xl text-center md:text-5xl font-bold text-[#ffd166] mb-20'>Why <span className='text-[#ff7ed4]'>Choose Us?</span></h2>
    
    <div className='relative max-w-4xl mx-auto'>
      
     {points.map((point,index) =>(
        <div ref={(el) => (cardsRef.current[index] =el)}key={index} className={`relative flex items-center gap-6 p-6 rounded-xl shadow-lg mb-10  ${index % 2 === 0  ? "bg-[#810cab] text-left flex-row" : " bg-[#ff7ed4] text-right flex-row-reverse"}`}>
            <div className='text-3xl text-white'>
                <CheckCircle size={40}/>
            </div>

            <div>
                <h3>{point.title}</h3>
                <p>{point.desc}</p>
            </div>
        </div>
     ))}
    </div>
       </div>
       
    </section>

    <footer className='bg-[#1a1a2e] text-white py-12 px-6'>
      <div className='container mx-auto grid md:grid-cols-3  gap-8 text-center md:text-left'>

        <div>
            <h2 className='text-3xl font-bold text-[#ffd166]'>DigiBal</h2>
            <p className='text-gray-300 mt-3'>
                We create amazing digital experiences to help your business.
            </p>
        </div>

        <div>
            <h3 className='text-3xl font-bold text-[#ffd166]'>Quick Links</h3>
            <ul className='space-y-2'>
                <li><a href="#home">Home</a></li>
                <li><a href="#home">About</a></li>
                <li><a href="#home">Services</a></li>
                <li><a href="#home">Testinomial</a></li>
            </ul>
        </div>

        <div>
        <h3 className='text-3xl font-bold text-[#ffd166]'>Contact Us</h3>
        <p className='flex items-center justify-center md:justify-start gap-2'><Mail size={18}/>support@gmail.com</p>
        <p className='flex items-center justify-center md:justify-start gap-2'><Phone size={18}/>+9876543210</p>
        
        <div className='flex justify-center md:justify-start gap-4 mt-4'>
            <a><Facebook/></a>
            <a><Instagram/></a>
            <a><Twitter/></a>
            <a><Github/></a>
        </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Extra
