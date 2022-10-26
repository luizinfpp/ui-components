import styled from "styled-components";

const ProductCardComponent = () => {

    const Container = styled.div`
        width: 500px;
        height: 380px;
        background-color: hsl(30, 38%, 92%);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    `;

    return (
        <Container>
            <div>

            </div>
            <div>
                <h4>Perfume</h4>
                <h1>Gabrielle Essence Eau De Parfum</h1>
                <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

                <h2>$149.99</h2>
                <h3>$169.99</h3>

                <button>Add to Cart</button>
            </div>
        </Container>
     );
}

export default ProductCardComponent;
