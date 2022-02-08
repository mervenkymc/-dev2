import React from "react"
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { CardComponent } from "../components/CardComponent"
import product from "../data"
export const Products = () => {
  const navigate = useNavigate()
  const handleProductClick = (
    productId,
    productTitle,
    productCategory,
    productDetail
  ) => {
    const productIdLink = `/product/${productId}/${productTitle}/${productCategory}/${productDetail}`
    navigate(productIdLink)
  }
  return (
    <>
      <Container style={{ display: "flex", flexWrap: "wrap" }}>
        {product.map(({ id, category, title, detail }, index) => (
          <CardComponent
            key={index}
            onClick={() => handleProductClick(id, title, category, detail)}
            id={id}
            detail={detail}
            category={category}
            title={title}
          />
        ))}
      </Container>
    </>
  )
}
