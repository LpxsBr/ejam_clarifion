'use client'

import Image from "next/image"
import styled from "styled-components"
import { PromotionItem } from "./promotionItem"

const Box = styled.section`

display: flex;
justify-content: space-evenly;
align-items: center;
height: 50px;
min-width: 360px;
max-width: 1500px;
background-color: #252F3D;

`

const data = [
    {
        id: 1,
        value: '30-DAY SATISFACTION GUARANTEE',
        image: '/icons/fluent_checkmark-starburst-20-regular.svg'
    },
    {
        id: 2,
        value: 'Free delivery on orders over $40.00',
        image: '/icons/ph_truck-light.svg'
    },
    {
        id: 3,
        value: '50.000+ HAPPY CUSTOMERS',
        image: '/icons/mdi_cards-heart-outline.svg'
    },
    {
        id: 4,
        value: '100% Money Back Guarantee',
        image: '/icons/fluent_arrow-sync-checkmark-20-regular.svg'
    }
]

export default function PromotionArea() {
    return (
        <Box>
            {
                data.map((item, key) => < PromotionItem key={key} image={item.image} value={item.value} />)
            }
        </Box>
    )
}