'use client'

import styled from "styled-components"
import { StepControllerItem } from "./StepControllerItem"

const data = [
    {
        id: 1,
        state: 'finished',
        value: 'Step 1 : Cart Review'
    },
    {
        id: 2,
        state: 'finished',
        value: 'Step 2 : Checkout'
    },
    {
        id: 3,
        state: 'waiting',
        value: 'Step 3 : Special Offer'
    },
    {
        id: 4,
        state: 'toStart',
        value: 'Step 4 : Confirmation'
    }
]

const StepSectionBox = styled.section`
    display: flex;
    justify-content: center;
`;

export default function StepController({ ...props }) {
    return (
        <StepSectionBox>
            {
                data.map((item) => <StepControllerItem id={item.id} state={item.state} value={item.value} />)
            }
        </StepSectionBox>
    )
}