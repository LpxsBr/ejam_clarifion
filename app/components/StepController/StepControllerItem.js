'use client'

import Image from "next/image"
import styled from "styled-components"
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const ItemBox = styled.div`

display: flex;
align-items: center;
/* border: 1px solid red; */
justify-content: start;
gap: 4px;
height: 22px;
width: 261px;
gap: 20px;


p{
    font-size: 12px;
    color: #000;
    text-transform: capitalize;
    /* width: 100%; */
    /* border: 1px solid red; */
}

span, .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

`

export function StepControllerItem({ state, value, id }) {

    switch (state) {
        case 'waiting':
            return (
                <ItemBox key={id}>
                    <span
                        style={{
                            backgroundColor: '#2C7EF8',
                            border: 'transparent',
                            borderWidth: '8px',
                        }}>{id}</span>
                    <p
                        style={{
                            fontWeight: '700'
                        }}
                    >{value}</p>
                </ItemBox>
            )

        case 'finished':
            return (
                <ItemBox key={id}>
                    <FaCheckCircle
                        className="icon"
                        fill={'#85BF55'}
                        stroke={'transparent'}
                        strokeWidth={'8px'} />
                    <p>{value}</p>
                </ItemBox>
            )

        default:
            return (
                <ItemBox key={id}>
                    <span
                        style={{
                            backgroundColor: 'transparent',
                            color: '#2C7EF8',
                            fontWeight: 'bold',
                            border: '3px solid #2C7EF8',
                        }}>{id}</span>
                    <p>{value}</p>
                </ItemBox>
            )
    }
}

// fill={fillColor[st].bg} strokeLinecap={fillColor[st].bd}