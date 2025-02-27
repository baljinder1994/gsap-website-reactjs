import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination,Navigation,Autoplay} from 'swiper/modules'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {FaStar} from 'react-icons/fa'
const Test = () => {

    const test1=[
        {
            id:1,
            name:"Baljinder",
            designation:"CEO TechCorp",
            feedback:"This service is best.This service is best.This service is best.",
            image:"img1.png",
            rating:5,
        },
        {
            id:1,
            name:"Baljinder",
            designation:"CEO TechCorp",
            feedback:"This service is best.This service is best.This service is best.",
            image:"img1.png",
            rating:4,
        },
        {
            id:1,
            name:"Baljinder",
            designation:"CEO TechCorp",
            feedback:"This service is best.This service is best.This service is best.",
            image:"img1.png",
            rating:3,
        },

        
    ]

    
  return (
    <section className='bg-[#2d033b] text-white py-20'>
      <div className='container mx-auto text-center'>
      <h2 className='text-4xl md:text-5xl font-bold text-[#ffd166] mb-20'>What Our <span className='text-[#ff7ed4]'>Clients Say</span></h2>
     <Swiper modules={[Pagination,Navigation,Autoplay]}
      slidesPreView={1}
      spaceBetween={20}
      loop={true}
      autoplay={{delay:3000}}
      navigation
      pagination={{clickable:true}}
      breakponits={{
        768:{slidesPerView:2},
        1024:{slidesPerView:3},
      }}
      className='max-w-4xl mx-auto'
     >
       {test1.map((test,index) =>(
        <SwiperSlide key={index}>
            <div className='bg-[#232946] p-8 rounded-xl shadow-lg flex flex-col items-center'>
                <img src={test.image} className='w-20 h-20 rounded-full border-4 border-[#ff7ed4] shadowlg'/> 
                <h3 className='text-xl font-bold mt-4 text-[#ffd166]'>{test.name}</h3>
                <p className='text-gray-300 mt-2 text-center'>{test.designation}</p>
                <div className='flex justify-center gap-1 my-3'>
                    {[...Array(test.rating)].map((_, index) =>(
                        <FaStar></FaStar>
                    ))}
                </div>
                <p className='text-gray-300 mt-4'>{test.feedback}</p>
            </div>
        </SwiperSlide>
       ))}
     </Swiper>
      </div>
    </section>
  )
}

export default Test
