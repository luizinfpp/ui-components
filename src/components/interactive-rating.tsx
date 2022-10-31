import * as React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";

const Screen = styled.div`
    background-color: #141519;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`

    @media (max-width: 650px){
        width: 350px;
    }

    @media (min-width: 650px){
        width: 450px;
        height: 430px;
    }

    background-color: #1F2630;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

`;

const ContainerPages = styled.div`
    width: 380px;
    height: 100%;
    position: absolute;
    padding: 35px;

    color: white;
    font-family: "Overpass", "sans-serif";

    #starContainer{
        background-color: #282E36;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
    }

    h2{
        color: white;
        font-family: "Overpass", "sans-serif";
        margin: 30px 0 20px 0;
    }

    p{
        font-size: 15px;
        color: hsl(217, 12%, 63%);
        line-height: 1.5rem;
    }

`;

const RadioGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;

    div{
        background-color: #282E36;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            background-color: hsl(216, 12%, 54%);
            cursor: pointer;

            p{
                color: white;
            }
        }

        &.chosen{
            background-color: hsl(25, 97%, 53%);

            p{
                color: white;
            }
        }
    }

    p{
        margin: 0;
        position: relative;
        top: 2px;
        vertical-align: center;
    }
`;

const InteractiveRatingComponent = () => {
    return (
        <Screen>
            <Container>
                <ContainerPages>
                    <span id="starContainer">
                        <img src="interactive-rating-icon-star.svg" alt="Star" />
                    </span>
                    <h2>How did we do?</h2>
                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                    <RadioGroup>
                        <div><p>1</p></div>
                        <div><p>2</p></div>
                        <div><p>3</p></div>
                        <div><p>4</p></div>
                        <div><p>5</p></div>
                    </RadioGroup>
                    <button>Submit</button>
                </ContainerPages>
                {/* <ContainerPages>
                    <h4>You selected ADD RATING HERE out of 5</h4>
                    <h2>Thank you!</h2>
                    <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                </ContainerPages> */}
            </Container>
        </Screen>
     );
}

export default InteractiveRatingComponent;
