import styled, { keyframes } from "styled-components";


export const Pulse = keyframes`

0% {
        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
    }

    80% {
        box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
    }
`;


export const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .arrow_icon {
        cursor:pointer;
        position:fixed;
        bottom: 90px;
        right: 30.5px;
        z-index: 100;
    }

    .arrow_icon i {
        color: #bd1622;
        font-size: 3rem;
    }
    
    .wpp_icon {
        display:flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(349.78deg, #009b3a -17.21%, rgb(0, 255, 94) 46.61%);
        border-radius: 2.6rem;
        width: 4.6rem;
        height: 4.6rem;
        box-shadow: 0 1.5rem 3.5rem rgba(0, 0, 0, 0.1);
        cursor: pointer;
        position: fixed;
        bottom: 25px;
        right: 18px;
        z-index: 100;
        animation: ${Pulse};
        animation-duration: 1.5s;
        animation-timing-function: ease-out;
        animation-iteration-count: infinite;

}

.wpp_icon i {
        color: #fff;
        font-size: 3rem;
        display:flex;

}


`