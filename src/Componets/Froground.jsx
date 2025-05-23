import React, { useRef } from 'react'
import Card from './Card'

const Froground = () => {
  const ref = useRef(null)
    const data = [
        {
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            filesize:"2.5MB",
            close:true,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
        },
                {
            desc: 'Lorem ipsum dolor sit amet yes  adipisicing.',
            filesize:"245.5MB",
            close:false,
            tag:{isOpen:false,tagTitle:"Not Now",tagColor:"blue"},
        },
                        {
            desc: 'Lorem ipsum dolor sit amet yes  adipisicing.',
            filesize:"245.5MB",
            close:true,
            tag:{isOpen:true,tagTitle:"Not Now",tagColor:"blue"},
        }
    ]
  return (
    <div>
      <div ref={ref} className="fixed top-0 left-0 w-full z-[3] h-full  flex gap-10 flex-wrap ">
        {data.map((item, index) => (
            <Card data={item} key={index} reference={ref} />
        ))}
      </div>
    </div>
  )
}

export default Froground
