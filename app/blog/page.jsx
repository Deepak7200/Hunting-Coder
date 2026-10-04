import Link from 'next/link';
import React from 'react'

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="mt-20">
            <Link href={'/blogpost/learn-javasript'}><h1 className="font-bold mt-3 mb-3 cursor-pointer"> Hunting Coder </h1></Link>
            <p className="text-center">A blog for hunting coders by a hunting coder</p>
            <h1 className="font-bold mt-3 mb-3"> Hunting Coder </h1>
            <p className="text-center">A blog for hunting coders by a hunting coder</p>
            <h1 className="font-bold mt-3 mb-3"> Hunting Coder </h1>
            <p className="text-center">A blog for hunting coders by a hunting coder</p>
        </div>
    </div>  
  )
}

export default Blog