import React from 'react'

import styled from 'styled-components'

const ClickArea = styled.div`
    position:fixed;
    bottom: 1.5rem;
    right: 1.8rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #0b172A;
`
const ArrowIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100%;
    color:#BC4123;
    font-size: 1.5rem;
    padding: 0.5rem;
    cursor: pointer;
`

function ScrollToTop({scrollHandle}) {
    return (
        <ClickArea onClick={scrollHandle}>
            <ArrowIcon>
                <i className="fas fa-level-up-alt"></i>
            </ArrowIcon>
        </ClickArea>
    )
}

export default ScrollToTop;
