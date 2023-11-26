'use client'

import Image from "next/image";
import styled from "styled-components"
import StepController from "../StepController/page";

const MainBox = styled.main`

/* background-color: red; */
display: flex;
gap: 30px;
align-items: center;
flex-direction: column;
/* gap: ; */

min-height: calc(1379px - 96px - 50px);
max-height: calc(1379px - 96px - 50px - 88px);

.heading{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        font-size: 24px;
    }

    h1{
        font-size: 48px;
        font-weight: 400;
        text-transform: capitalize;
    }
}

.content{
    display: flex;
    justify-content: space-evenly;
    width: 1245px;

    .text{
        
    /* border: 1px solid red; */
    width: 550px;
    height: 799px;
        h1{
            font-size: 32px;
        }
        .show{
            color: #2C7EF8;
        }
    }
}
`;

export default function MainContent() {
    return (
        <MainBox>
            <div className="heading">
                <h1>Wait ! your order in progress.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            </div>
            <StepController/>
            <div className="content">
                <div className="banner">
                    <Image src={'/banner.png'} width={575} height={591}/>
                </div>
                <div className="text">
                    <h1>
                        <span className="show">ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span className="show">$14 each</span> ($84.00 total!)</h1>
                </div>
            </div>
        </MainBox>
    )
}