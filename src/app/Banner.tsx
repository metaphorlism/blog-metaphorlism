import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className="h-80 bg-slate-500 mt-2 rounded-xl overflow-hidden">
      <Image
        src={
          "https://images.unsplash.com/photo-1682001426601-c7fdc9ea5b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
        width={1920}
        height={1080}
        alt="Banner"
        className="w-full h-full"
      ></Image>
    </div>
  )
}

export default Banner