'use client'

import Image from "next/image";

const { default: styled } = require("styled-components")

const HeaderBox = styled.header`
background-color: #f3f3f3;
min-width: 360px;
max-width: 1500px;
height: 96px;
padding: 30px 127px;

display: flex;
align-items: center;
justify-content: space-between;

.partners{
    display: flex;
    gap: 32px;
    height: 36px;
}
`;

export default function Navbar() {
    return (
        <HeaderBox>
            <div className="logo">
                <Image src={'/logo.png'} height={36} width={192} />
            </div>
            <div className="partners">
                <Image src={'/partners/macafee.png'} height={32} width={82} />
                <Image src={'/partners/norton.png'} height={32} width={82} />
            </div>
        </HeaderBox>
    )
}