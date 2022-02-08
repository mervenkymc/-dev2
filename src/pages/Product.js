import React from "react"
import { useParams } from "react-router-dom"
import { CardComponent } from "../components/CardComponent"
export const Product = () => {
  let { productId, productDetail, productCategory, productTitle } = useParams()
  return (
    <CardComponent
      id={productId}
      detail={productDetail}
      category={productCategory}
      title={productTitle}
    />
  )
}
