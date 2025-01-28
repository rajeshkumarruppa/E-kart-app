import React from 'react'
import ManCategory from '../assets/man.png'
import WomanCategory from '../assets/woman.png'
import KidsCategory from '../assets/kid.png'
import { GiKidSlide } from 'react-icons/gi'
const CategorySection = () => {
    const categories=[
        {
            title: 'Men',
            imageUrl:ManCategory
        },{
            title: 'Women',
            imageUrl:WomanCategory
        },{
            title: 'Kids',
            imageUrl:KidsCategory
        },

    ]
  return (
    <div className='container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer'>
      {
        categories.map((category,index) =>{
            return (
                <div key={index} className='relative h-64 transform transaction-transform duration-300 hover:scale-105 '>
                    <img src={category.imageUrl} alt={category.title} className='w-full h-full object-cover rounded-lg shadow-md'/>
                    <div className='absolute top-20 left-12' >
                        <p className=''>{category.title}</p>
                        <p>View All</p>
                    </div>
                </div>
            
            
            )
        }
    )
      }
    </div>
  )
}

export default CategorySection
