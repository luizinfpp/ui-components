import React from "react";
import styled from "styled-components";

const Screen = styled.div`
    background-color: hsl(30, 38%, 92%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`

    @media (max-width: 650px){
        width: 350px;
        flex-direction: column;
    }

    @media (min-width: 650px){
        width: 600px;
        height: 430px;
    }

    background-color: white;
    border-radius: 10px;
    display: flex;
    overflow: hidden;

`;

const ContainerSides = styled.div`
    @media (max-width: 650px){
        width: 100%;
        min-height: 250px;
    }

    @media (min-width: 650px){
        width: 50%;
        height: 100%;
    }

    overflow: hidden;
`;

const CardImage = styled(ContainerSides)`
    @media (max-width: 650px){
        background-image: url("product-card-mobile.jpg");
    }

    @media (min-width: 650px){
        background-image: url("product-card-desktop.jpg");
    }

    object-position: center;
    object-fit: cover;
    background-position: center;
    background-size: cover;
`;

const CardText = styled.div`
    margin: 30px 30px;
    font-family: 'Montserrat', sans-serif;

    h1, h2{
        font-family: 'Fraunces', serif;
        color: hsl(212, 21%, 14%);
    }

    h1{
        line-height: 2rem;
    }

    h2{
        color: hsl(158, 36%, 37%);
        margin-right: 10px;
        font-size: 1.9rem;
    }

    h4{
        text-transform: uppercase;
        font-weight: 500;
        font-size: 0.8rem;
        color: hsl(228, 12%, 48%);
        letter-spacing: .3rem;
    }

    p, h3{
        color: hsl(228, 12%, 48%);
        font-size: 0.9rem;
        font-weight: 500;
    }

    p{
        line-height: 1.4rem;
    }

    h3{
        text-decoration: line-through;
    }

    button{
        width: 100%;
        height: 45px;
        background-color: hsl(158, 36%, 37%);
        color: white;
        font-family: 'Montserrat', sans-serif;
        margin: 25px 0;
        border: none;
        border-radius: 10px;

        img{
            margin-right: 5px;
        }
    }

    p, h1, div, h4{
        margin-bottom: 15px;
    }

`;

const ProductCardComponent = () => {

  return (
    <Screen>
        <Container>
          <CardImage>
          </CardImage>
          <ContainerSides>
              <CardText>
                <h4>Perfume</h4>
                <h1>Gabrielle Essence Eau De Parfum</h1>
                <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <div style={{display: 'flex', alignItems: 'center', margin: "15px 0"}}>
                    <h2>$149.99</h2>
                    <h3>$169.99</h3>
                </div>
                <button style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src="product-card-icon-cart.svg" alt=""></img>
                    Add to Cart
                </button>
              </CardText>
          </ContainerSides>
        </Container>
    </Screen>
    );
}

export default ProductCardComponent;
