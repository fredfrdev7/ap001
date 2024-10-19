import styled, { keyframes } from "styled-components"


export const Logospin = keyframes`

from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Checkrotate = keyframes`

    0% { transform: rotateY(0deg); }
    25% { transform: rotateY(45deg); }
    50% { transform: rotateY(0deg); }
    75% { transform: rotateY(-45deg); }
    100% { transform: rotateY(0deg); }
`;

export const Glitch = keyframes`
   
    50% { opacity: 0; }
   
`;

export const Gallonrotate = keyframes`

    0% { transform: rotate(6deg); }
    
    50% { transform: rotate(-3deg); }
   
    100% { transform: rotate(6deg); }
`;

export const HomeContainer = styled.div`
    display:flex;
    flex-direction:column;
`

export const Header = styled.div`
    font-weight: 300;
    font-size: 2.4rem; 
    text-align: center; 
    padding: 2rem 0rem 0rem 0rem; 
    z-index: 9;
    
`

export const Subtitle = styled.div`
    padding: 1rem 13rem 0rem 13rem;
    overflow: hidden;
    font-size:1.8rem;
    z-index: 1;

    p {
        margin-top:1rem;
        font-size:0.8rem;
    }

    @media (max-width: 1280px) and (min-width: 1024px) {
        padding:1rem 6rem 0rem 6rem;
    }

    @media screen and (max-width: 1023px) and (min-width: 824px) {
        padding: 1rem 5rem 0rem 5rem;
    }

    @media screen and (max-width: 823px) and (min-width: 431px) {
        padding: 1rem 3rem 0rem 3rem;  
    }

    @media (max-width: 430px) and (min-width: 400px) {
        padding: 1rem 2rem 0rem 2rem;
        font-size: 1.5rem;

        p {
        font-size:0.7rem;
        
        }
    }

    @media (max-width: 399px) and (min-width: 320px) {
        padding: 1rem 1rem 0rem 1rem;
        
        p {
        font-size:0.7rem;
        
        }
    }
`

export const ContainerCertified = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content:center;
    padding: 2rem 0rem 0rem 0rem; 
    z-index: 1;

`

export const CertifiedCircle = styled.img`
    max-width:4rem;
    position:absolute;
    animation: ${Logospin} infinite 10s linear;
   
`

export const CertifiedCheck = styled.img`
    /* animation: ${Checkrotate} infinite 8s linear; */
    max-width:4rem;
    
`

export const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content:center;
    padding: 6rem 0rem 2rem 0rem;
    overflow: hidden;
    z-index:11;

`

export const FontLogo = styled.img`
    max-width: 14rem;
    position: absolute;
    transform: translate(-65px, -76px);
    z-index: 10;

    @media (max-width: 430px) and (min-width: 414px) {
        max-width: 13rem;
        transform: translate(-56px, -80px);
    }

    @media (max-width: 413px) and (min-width: 375px) {
        max-width: 13rem;
        transform: translate(-56px, -80px);
    }

    @media (max-width: 374px) and (min-width: 320px) {
        max-width: 12rem;
        transform: translate(-56px, -70px);
    }
    
`

export const Propeller = styled.img`
    max-width: 17rem;
    animation: ${Logospin} infinite 15s linear;
    transform: translate(0px, 0px);
    z-index:1;

    @media (max-width: 430px) and (min-width: 414px) {
        max-width: 16rem;
    }

    @media (max-width: 413px) and (min-width: 375px) {
        max-width: 16rem;
    }

    @media (max-width: 374px) and (min-width: 320px) {
        max-width: 15rem;
    }

`

export const ContainerWaves = styled.div`
    overflow: hidden;
    z-index: 0;

    canvas {
        height: 60vh !important;
    }

`

export const AboutContainer = styled.div`
    font-weight: 300;
    padding: 0rem 0rem 0rem 0rem;
    overflow: hidden;    

    .stroke {
        width: 32rem;
        border-bottom: 1px solid;
        border-image:  linear-gradient(90deg , #fff 30%, #bd1622) 1;
	    border-left: 0;
	    border-right: 0;
	    border-top: 0;
    }

    .stroke_one {
        width: 32rem;
        border-bottom: 1px solid;
        border-image:  linear-gradient(-90deg , #fff 30%, #bd1622) 1;
	    border-left: 0;
	    border-right: 0;
	    border-top: 0;
    }

    .stroke_three {
        width: 32rem;
        border-bottom: 1px solid;
        border-image:  linear-gradient(-90deg , #fff 30%, #bd1622) 1;
	    border-left: 0;
	    border-right: 0;
	    border-top: 0;
    }

    .title_about_container .stroke:nth-child(1) {
        border-image:  linear-gradient(-90deg , #fff 30%, #bd1622) 1;  

    }

    .subtitle_about_container .stroke:nth-child(1) {
        border-image:  linear-gradient(-90deg , #fff 20%, #bd1622) 1;
        width:20rem;
    }

    .acronyms .acronyms_item .stroke:nth-child(1) {
        border-image:  linear-gradient(-90deg , #fff 20%, #bd1622) 1;
        width:15rem;
    }

    .rest_about_container .stroke:nth-child(1) {
        width:10rem;
        border-image:  linear-gradient(-90deg , #fff 20%, #bd1622) 1;
    }

    .title_about_container {
        font-size:1.5rem;
        display:flex;
        justify-content: space-between;
        align-items:center;
        padding:2rem 0rem;
    }

    .subtitle_about_container {
        display:flex;
        font-size:1.4rem;
        align-items: center;
        padding: 0rem 0rem 0.6rem 0rem;
    }

    .acronyms {
        display:flex;
        flex-direction:column;
        padding: 1rem 0rem 1rem 0rem; 
    }

    .acronyms_item {
        display:flex;
        align-items:center;
        padding: 0.8rem 0rem;
        font-size: 1.2rem;
    }

    .rest_about_container {
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        padding: 0.8rem 0rem;
        margin-right: 1rem;
    }

    @media (max-width: 1280px) and (min-width: 1024px) {
        .title_about_container .stroke:nth-child(1) {
            width:25rem;  
        }

        .title_about_container .stroke:nth-child(3) {
            width:25rem;  
        }
    }

    @media screen and (max-width: 1023px) and (min-width: 824px) {
        .title_about_container .stroke:nth-child(1) {
            width: 18rem;  
        }

        .title_about_container .stroke:nth-child(3) {
            width: 18rem;  
        }

        .subtitle_about_container .stroke:nth-child(1) {
            width: 15rem;
        }

        .acronyms .acronyms_item .stroke:nth-child(1) {
            width:12rem;
        }

        .stroke_one {
            width: 16rem;
        }

        .stroke_three {
            width: 16rem;
        }
    
    }

    @media screen and (max-width: 823px) and (min-width: 768px) {
        .title_about_container .stroke:nth-child(1) {
            width: 14rem;  
        }

        .title_about_container .stroke:nth-child(3) {
            width: 14rem;  
        }

        .subtitle_about_container .stroke:nth-child(1) {
            width: 11rem;
        }

        .acronyms .acronyms_item .stroke:nth-child(1) {
            width:8rem;
        }

        .stroke_one {
            width: 12rem;
        }

        .stroke_three {
            width: 12rem;
        }

    }

    @media screen and (max-width: 767px) and (min-width: 591px) {
        .title_about_container .stroke:nth-child(1) {
            width: 10rem;  
        }

        .title_about_container .stroke:nth-child(3) {
            width: 10rem;  
        }

        .subtitle_about_container .stroke:nth-child(1) {
            width: 7rem;
        }

        .acronyms .acronyms_item .stroke:nth-child(1) {
            width:4rem;
        }

        .stroke_one {
            width: 8rem;
        }

        .stroke_three {
            width: 8rem;
        }

    }

    @media (max-width: 590px) and (min-width: 431px) {
        .title_about_container .stroke:nth-child(1) {
            width: 6rem;  
        }

        .title_about_container .stroke:nth-child(3) {
            width: 6rem;  
        }

        .subtitle_about_container .stroke:nth-child(1) {
            width: 4rem;
        }

        .acronyms .acronyms_item .stroke:nth-child(1) {
            width:3rem;
        }

        .stroke_one {
            width: 6rem;
        }

        .stroke_three {
            width: 6rem;
        }
    }


    @media (max-width: 430px) and (min-width: 414px) {
        .stroke {
            width: 6rem;
        }  
        
        .subtitle_about_container .stroke:nth-child(1) {
            width:5rem;
        }
        
        .acronyms .acronyms_item .stroke:nth-child(1) {
            width:5rem;
        }

        .rest_about_container {
            font-size:1rem;
        }

      
        
        .rest_about_container .stroke_one {
            width:4rem;
            border-image: linear-gradient(-90deg , #fff 20%, #bd1622) 1;
        }

        .stroke_three {
            width: 12rem;
            border-image: linear-gradient(-90deg , #fff 20%, #bd1622) 1;
        }
        
    }


    @media (max-width: 413px) and (min-width: 320px) {
        .stroke {
            width: 3rem;
        }  
        
        .subtitle_about_container .stroke:nth-child(1) {
            width:5rem;
        }
        
        .acronyms .acronyms_item .stroke:nth-child(1) {
            width:5rem;
        }

        .rest_about_container {
            font-size:1rem;
        }
        
        .rest_about_container .stroke_one {
            width:4rem;
            border-image:  linear-gradient(-90deg , #fff 20%, #bd1622) 1;
        }

        .stroke_three {
            width: 12rem;
            border-image:  linear-gradient(-90deg , #fff 20%, #bd1622) 1;
        } 
    }
`

export const Arrows = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0rem 2rem 0rem;
    

    img {
        max-width: 3rem;
        animation: ${Glitch} 1.5s infinite ease-in-out;
    }

    img:nth-child(1) {
        animation-delay: 0s;
    }

    img:nth-child(2) {
        animation-delay: 0.2s;
  
    }

    img:nth-child(3) {
        animation-delay: 0.4s;
    }

`

export const CanvasCont = styled.div`
    z-index: 6;
    margin-bottom: 2rem;

    canvas { 
        height:50vh !important;
    }
     
`

export const GallonContainer = styled.div`
    text-align:center;
    z-index:4;

    .title_gallon_container {

        img {
            transform: translate(0px, 20px);
            max-width:5rem;
        }
    }

    p { 
        margin-top: 3rem;
        font-size:1.5rem;
    }

    img {
        transform: translate(0px, 75px);
        max-width: 10rem;
    }

`

export const ProductContainer = styled.div`
    overflow:hidden;
    padding: 2rem 0rem 3rem 0rem;
    text-align:center;
    font-size: 1.5rem;
    position: relative;

    img {
        max-width: 7rem;
        animation: ${Glitch} 1.5s infinite ease-in-out;
    }

    img:nth-child(1) {
        transform: translate(-100px, 40px);
        position: absolute;
        animation-delay: 0s;
    }

    img:nth-child(2) {
        transform: translate(-190px, 50px);
        position: absolute;
        animation-delay: 0.2s;
        
    }

    img:nth-child(3) {
        transform: translate(-280px, 60px);
        position: absolute;
        animation-delay: 0.4s;
       
    }

    img:nth-child(4) {
        max-width: 12rem;
        animation: none;
    }

    img:nth-child(5) {
        transform: translate(-10px, 10px);
        position: absolute;
        animation-delay: 0s;
    }

    img:nth-child(6) {
        transform: translate(80px, 0px);
        position: absolute;
        animation-delay: 0.2s;
    }

    img:nth-child(7) {
        transform: translate(170px, -10px);
        position: absolute;
        animation-delay: 0.4s;
    }

    p {
        transform: translate(0px, 40px); 
    }

    p:nth-child(9) {
        font-size: 1.2rem; 
        padding:1rem 3rem 0rem 3rem;
    }
    
`

export const IconAcessibility = styled.div`
    font-size: 2.7rem;
    color: #bd1622;
    text-align:center;
    margin-top: 2rem;  
`

export const TitleBenefits = styled.div`
    font-size: 1.5rem; 
    font-weight: 300;
    text-align: center;
    padding:0rem 2rem;

    @media (max-width: 768px) and (min-width: 375px) {
        text-align:start;
    }
        
`

export const CheckItems = styled.div`
    margin: 0 auto;
    width: 80%;
    padding:2rem 0rem 0rem 0rem;
    font-weight:300;
    overflow:hidden;
`

export const ItemCheck = styled.div`      
    display:flex;
    align-items:center;
    padding:0.8rem;
    font-size:1.2rem;

    p {
        padding-left: 1rem;
    }

    img {
        max-width:1.9rem;
    }

    img:nth-child(1) {
        max-width:2.2rem;
        position:absolute; 
        z-index: 2;
           
    }   

`

export const ExtractorContent = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    align-items:center;
    justify-content: center;
    padding:1rem 2rem 3rem 2rem;
    font-weight:300;
    
    img {
        max-width:3rem;
        animation: ${Glitch} 3s infinite;
        
    }

    p {
        margin-top:1rem;
        font-size:1.2rem;
    }
`

export const AtomContent = styled.div`
    text-align:center;
    margin-bottom: 2rem;

    img {
        max-width: 3rem;
        animation: ${Gallonrotate}  3s infinite;
    }
`


export const UsageFlag = styled.div`
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    background: linear-gradient(109deg, #ffffff 20%, #bd1622 35%);
    color: #ffffff;
    margin-bottom: 3rem;
    font-weight: 300;
    
    p {
        padding: 0.5rem 0rem 0.5rem 2rem;
        
    }
`

export const Scroll = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
`

export const FlagSlider = styled.div`
    display:inline-flex;
    animation: ${Scroll} 20s linear infinite;
`

export const FlagSliderItem = styled.div`
    padding: 0 5rem;
`

export const BenefitsCont = styled.div`
    text-align:center;
    font-weight: 300;

    i {
        font-size:3rem;
        color: #bd1622;
    }

    .title_benefits_cont {
        font-size:1.5rem;
        padding: 3rem 0rem 1rem 0rem;

    }

    ul {
        border-bottom: 1px solid;
        border-image: linear-gradient(to left, #ffffff , #bd1622, #ffffff  ) 1;
	    border-left: 0px;
	    border-right: 0px;
	    border-top: 0;
        font-weight: 400;
    }

    li {
        padding: 1rem 1rem 2rem 1rem;
        font-size:1.2rem;

        p:nth-child(3) {
            font-size: 1rem;
            margin-top: 0.6rem;
        }
    }

    p {
        margin-top:0.1rem;
    }
    
`

export const CtaContent = styled.div`
   display:flex;
   justify-content:center;
   padding: 0rem 0rem 1rem 0rem;

`

export const ButtonCta = styled.div`
        color:#bd1622;
        width: 10rem;
        height: 2.9rem;
        font-size: 1.3rem;
        margin-top:1rem;
        border: double 1px #bd1622;
        border-radius: 1rem;
        cursor:pointer;
        text-decoration:none;
        display:flex;
        align-items:center;
        justify-content:center;
        z-index: 5;
        
`

export const FormContent = styled.div`
    text-align:center;
    padding: 0rem 7rem 0rem 7rem;
    

    .form_template {
        border: double 1px transparent;
        border-radius: 1rem;
        background-image: linear-gradient(-188deg, white 50%, #ffffff), linear-gradient(360deg , #bd1622, #fff 70%);
        background-origin: border-box;
        background-clip: content-box, border-box;

        i {
            font-size: 3rem;
            color: #bd1622;
        }

        p {
            padding: 1rem 6rem 1.5rem 6rem;
            line-height: 1.2rem;
            
        }
    
    }

    @media (max-width: 996px) and (min-width: 769px) {
        padding: 0rem 2rem;

        .form_template {
        p {
            padding:1rem 3rem 2rem 3rem;
        }

    }
    
}
    
    @media (max-width: 768px) and (min-width: 320px) {
        font-weight:300;
        padding: 0rem 1rem;

        .form_template {
        p {
            padding:1rem 2rem 2rem 2rem;
        }

    }
    
}
    
`

export const Icons = styled.div`
        display:flex;
        position: relative;
        right:0.5rem;
        margin-top:1rem;
        font-size:2.7rem;

    & > a {
        color:#bd1622;
        opacity:0.9;
        margin-left:1rem;
    &:hover {
        opacity: 100%;
}
    }
`

export const Footer = styled.div`
        padding: 1.5rem 2rem 1rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
     
    img {
        max-width: 12rem;
        padding: 1rem 0rem 1rem 0rem;
    }

    img:nth-child(1) {
        max-width: 3.5rem;
        padding: 1rem 0rem 0.2rem;

    }

    p {
        text-transform: uppercase;
        text-decoration: underline rgb(189, 22, 34) !important;
        letter-spacing: 0.02rem;
        text-underline-offset: 4px  !important;
        margin-bottom: 0.6rem;
        -webkit-text-decoration:  underline !important;
         
    }

    span:nth-child(5) {
        font-size: 0.9rem;
        background-image: linear-gradient(-188deg, rgb(81, 91, 212), rgb(221, 42, 123), rgb(245, 133, 41));
        background-position: initial;
        background-size: initial;
        background-repeat: initial;
        background-attachment: initial;
        background-origin: initial;
        background-color: initial;
        -webkit-text-fill-color: transparent;
        color: transparent;
        background-clip: text !important;
}

`

export const ContainerWavesTwo = styled.div `
        overflow: hidden;
        z-index: 0;
        transform: translateX(180deg); 

    canvas {
        height: 30vh !important;
        
    }
`

export const AuthProd = styled.div`
        display:flex;
        justify-content:center;
        padding: 0rem 0rem 1rem 0rem;

        p {
        font-size: 0.5rem;
        margin-bottom:0.4rem;
        color: #aaaaaa;
        
        }

        a img {
        max-width: 2.3rem;
        margin-left: 0.25rem;
        
        }

`














