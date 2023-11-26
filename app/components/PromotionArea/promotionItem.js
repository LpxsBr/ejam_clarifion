'use client'

import Image from "next/image"
import styled from "styled-components"

const ItemBox = styled.div`

display: flex;
align-items: center;
gap: 4px;
height: 22px;


p{
    font-size: 12px;
    color: #fff;
}

`

export function PromotionItem({ value, image, id }) {
    return (
        <ItemBox key={id}>
            <Image className={'image-icon'} src={image} width={22} height={22} />
            <p>{(value).toUpperCase()}</p>
        </ItemBox>
    )
}