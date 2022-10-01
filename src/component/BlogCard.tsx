import React,{ ReactNode } from "react"

interface BlogCardProps  { 
    children: ReactNode
 }

const BlogCard = (props:BlogCardProps) =>{

    return (
        <div className="w-330 mx-50 mt-85">
            { props.children }
        </div>
    )
}

export default BlogCard