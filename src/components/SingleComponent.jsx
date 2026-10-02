import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleComponent = () => {
    const {id} = useParams()
    
    const [singleProduct, setSingleProduct] = useState({})

    const singleDataHandler=async()=>{
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const newData = await response.json()
            setSingleProduct(newData)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        singleDataHandler()
    }, [id])

    console.log("latha checking id", id)
  return (
    <div>
        <h1>{singleProduct.title}</h1>
        <img src={singleProduct.image} alt="" />
        <p>{singleProduct.description}</p>

    </div>
  )
}

export default SingleComponent