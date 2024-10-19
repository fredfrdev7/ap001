import { Suspense, useEffect } from "react";

import fontlogoproduct from "../assets/fontlogoproduct.svg"
import propeller from "../assets/propeller.svg"
import certifiedcircle from "../assets/certifiedcircle.svg"
import certifiedcheck from "../assets/certifiedcheck.svg"
import checksign from "../assets/checksign.svg"
import checkbox from "../assets/checkbox.svg"
import extractor from "../assets/extractor.svg"
import atom from "../assets/atom.svg"
import gallon from "../assets/gallon2.png"
import polygon from "../assets/polygon.png"
import arrowleft from "../assets/arrowleft.png"
import arrowright from "../assets/arrowright.png"
import logoap from "../assets/logoap.svg"
import logodf from "../assets/logodf.svg"
import arrow from "../assets/arrow.svg"
import { Typewriter } from 'react-simple-typewriter'
import ParticlesWave from "./ParticlesWave"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import Helicopter from "../../public/Helicopter";
import { PiChartLineUpLight, PiShieldCheckLight, PiCheckSquareLight, PiCheckCircleLight, PiCertificateLight } from "react-icons/pi";
import brazilflag from "../assets/brazilflag.svg"
import instagram from "../assets/instagram.png"
import { MdOutline360 } from "react-icons/md";



// ''Gostaria de informações (para)sobre a aquisição do produto'' whatsapp(CTA) formatação das informações layout
// import ObjectThree from "./ObjectThree"
import Aos from 'aos'
import 'aos/dist/aos.css'

import { HomeContainer, Header, CanvasCont, Arrows, ContainerCertified, Subtitle, Container, FontLogo, Propeller, CertifiedCheck, CertifiedCircle, ContainerWaves, AboutContainer, IconAcessibility, TitleBenefits, ItemCheck, CheckItems, ExtractorContent, UsageFlag, FlagSlider, FlagSliderItem, AtomContent, BenefitsCont, GallonContainer, ProductContainer, CtaContent, ButtonCta, FormContent, Footer, ContainerWavesTwo, AuthProd } from "../styles/Home.style";



function Home() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <>
            <HomeContainer>
                <Header>
                    <p>APC</p>
                    <ContainerCertified>
                        <CertifiedCircle src={certifiedcircle} alt="certifiedcircle"></CertifiedCircle>
                        <CertifiedCheck src={certifiedcheck} alt="certifiedcheck"></CertifiedCheck>
                    </ContainerCertified>
                    <Subtitle>
                        <span>
                            <Typewriter
                                words={['APROVADO PARA USO AERONÁUTICO DE ACORDO COM AS NORMAS DA ANAC']}
                                loop={1}
                                cursor
                                cursorStyle='|'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                        <p>
                            <Typewriter
                                words={['CONFIRMO QUE O AP001 APC AEROPOLIMENTO ATENDE OU EXCEDE OS REQUISITOS DE SAE AMS1526 - LIMPADOR PARA SUPERFÍCIES EXTERNAS DE AERONAVES, MISCÍVEL EM ÁGUA, TIPO PULVERIZAÇÃO SOB PRESSÃO.']}
                                loop={1}
                                cursor
                                cursorStyle='|'
                                typeSpeed={5}
                            />
                        </p>
                        <p>
                            <Typewriter
                                words={['CONFIRMO QUE O AP001 APC AEROPOLIMENTO ATENDE OU EXCEDE OS REQUISITOS DA SAE AMS1550 - LIMPADOR, BASE DE ÁGUA, MATERIAIS DE SUPERFÍCIE DURA PARA INTERIORES DE AERONAVES. ']}
                                loop={1}
                                cursor
                                cursorStyle='|'
                                typeSpeed={10}
                            />
                        </p>
                    </Subtitle>
                </Header>
                <Container>
                    <FontLogo src={fontlogoproduct} alt="fontlogoproduct"></FontLogo>
                    <Propeller src={propeller} alt="propeller"></Propeller>
                </Container>
                <ContainerWaves>
                    <ParticlesWave />
                </ContainerWaves>
                <AboutContainer id="about">
                    <div className="title_about_container">
                        <div data-aos="fade-down" data-aos-duration="1000" className="stroke"></div>
                        <p data-aos="fade-down" data-aos-duration="1000">O QUE É UM "<strong>APC</strong>"?</p>
                        <div data-aos="fade-down" data-aos-duration="1000" className="stroke"></div>
                    </div>
                    <div className="subtitle_about_container">
                        <div data-aos="fade-down" data-aos-duration="1300" className="stroke"></div>
                        <p data-aos="fade-left" data-aos-duration="1300"><strong>APC</strong> É UMA SIGLA PARA:</p>
                    </div>
                    <div className="acronyms">
                        <div className="acronyms_item">
                            <div data-aos="fade-down" data-aos-duration="1600" className="stroke"></div>
                            <p data-aos="fade-left" data-aos-duration="1000"><strong>A</strong> (All)</p>
                        </div>
                        <div className="acronyms_item">
                            <div data-aos="fade-down" data-aos-duration="1700" className="stroke"></div>
                            <p data-aos="fade-left" data-aos-duration="1000"><strong>P</strong> (Purpose)</p>
                        </div>
                        <div className="acronyms_item">
                            <div data-aos="fade-down" data-aos-duration="1800" className="stroke"></div>
                            <p data-aos="fade-left" data-aos-duration="1000"><strong>C</strong> (Cleaner)</p>
                        </div>
                    </div>
                    <div className="rest_about_container">
                        <div data-aos="fade-down" data-aos-duration="1900" className="stroke_one"></div>
                        <p data-aos="fade-left" data-aos-duration="1900">EM PORTUGUÊS SIGNIFICA "<strong>LIMPEZA DE USO GERAL</strong>".</p>
                    </div>
                    <div className="rest_about_container">
                        <div data-aos="fade-down" data-aos-duration="2200" className="stroke"></div>
                        <p data-aos="fade-left" data-aos-duration="2200">É UM TIPO DE <strong>LIMPADOR VERSÁTIL</strong> QUE PODE SER USADO EM <strong>DIFERENTES SUPERFÍCIES</strong>, TANTO NO <strong>INTERIOR</strong> QUANTO <strong>EXTERIOR</strong>.</p>
                    </div>
                    <div className="rest_about_container">
                        <div data-aos="fade-down" data-aos-duration="2500" className="stroke_three"></div>
                        <p data-aos="fade-left" data-aos-duration="2500"><strong>FORMULADO PARA REMOVER SUJEIRAS</strong> E OUTROS CONTAMINANTES DE MANEIRA EFICIENTE, <strong>SEM DANIFICAR AS ARÉAS SENSÍVEIS DAS AERONAVES</strong>.</p>
                    </div>
                </AboutContainer>
                <CtaContent>
                    <ButtonCta as="a" href="https://wa.me/5531973639785?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20aquisi%C3%A7%C3%A3o%20do%20produto." target="_blank"><span>SAIBA MAIS</span></ButtonCta>
                </CtaContent>
                <Arrows>
                    <img src={arrow} alt="arrow"></img>
                    <img src={arrow} alt="arrow"></img>
                    <img src={arrow} alt="arrow"></img>
                </Arrows>
                <TitleBenefits>
                    <p data-aos="fade-right" data-aos-duration="1000">PRODUTO DE ALTA PERFORMANCE PARA LIMPEZA DE AERONAVES</p>
                </TitleBenefits>
                <IconAcessibility>
                    <MdOutline360 />
                </IconAcessibility>
                <CanvasCont>
                    <Canvas camera={{ position: [430, 100, 300], fov: 20 }}>
                        <OrbitControls enableZoom={false} autoRotate={true} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
                        <Suspense fallback={null}>
                            <Helicopter />
                        </Suspense>
                        <Environment preset="city" />
                    </Canvas>
                </CanvasCont>
                <TitleBenefits id="use">
                    <p data-aos="fade-right" data-aos-duration="1000">DESENVOLVIDO PARA HIGIENIZAÇÃO INTERNA</p>
                </TitleBenefits>
                <CheckItems>
                    <ItemCheck>
                        <img data-aos="fade-right" data-aos-duration="1500" src={checksign} alt="checksign" />
                        <img data-aos="zoom-in" data-aos-duration="1000" src={checkbox} alt="checkbox" />
                        <p data-aos="fade-left" data-aos-duration="1000">COCKPIT</p>
                    </ItemCheck>
                    <ItemCheck>
                        <img data-aos="fade-right" data-aos-duration="1800" src={checksign} alt="checksign" />
                        <img data-aos="zoom-in" data-aos-duration="1300" src={checkbox} alt="checkbox" />
                        <p data-aos="fade-left" data-aos-duration="1300">GALLEY</p>
                    </ItemCheck>
                    <ItemCheck>
                        <img data-aos="fade-right" data-aos-duration="2100" src={checksign} alt="checksign" />
                        <img data-aos="zoom-in" data-aos-duration="1600" src={checkbox} alt="checkbox" />
                        <p data-aos="fade-left" data-aos-duration="1600">COURO</p>
                    </ItemCheck>
                    <ItemCheck>
                        <img data-aos="fade-right" data-aos-duration="2400" src={checksign} alt="checksign" />
                        <img data-aos="zoom-in" data-aos-duration="1900" src={checkbox} alt="checkbox" />
                        <p data-aos="fade-left" data-aos-duration="1900">CINTOS DE SEGURANÇA</p>
                    </ItemCheck>
                    <ItemCheck>
                        <img data-aos="fade-right" data-aos-duration="2700" src={checksign} alt="checksign" />
                        <img data-aos="zoom-in" data-aos-duration="2200" src={checkbox} alt="checkbox" />
                        <p data-aos="fade-left" data-aos-duration="2200">TAPEÇARIA</p>
                    </ItemCheck>
                </CheckItems>
                <ExtractorContent>
                    <img src={extractor} alt="extractor" />
                    <p data-aos="fade-right" data-aos-duration="1000">PODENDO SER UTILIZADO EXTRATORA PARA LIMPEZA PESADA EM TAPETES!</p>
                </ExtractorContent>
                <UsageFlag>
                    <FlagSlider>
                        <FlagSliderItem><p>EXCLUSIVAMENTE DE USO PROFISSIONAL</p></FlagSliderItem>
                        <FlagSliderItem><p>EXCLUSIVAMENTE DE USO PROFISSIONAL</p></FlagSliderItem>
                        <FlagSliderItem><p>EXCLUSIVAMENTE DE USO PROFISSIONAL</p></FlagSliderItem>
                    </FlagSlider>
                    <FlagSlider>
                        <FlagSliderItem><p>EXCLUSIVAMENTE DE USO PROFISSIONAL</p></FlagSliderItem>
                        <FlagSliderItem><p>EXCLUSIVAMENTE DE USO PROFISSIONAL</p></FlagSliderItem>
                        <FlagSliderItem><p>EXCLUSIVAMENTE DE USO PROFISSIONAL</p></FlagSliderItem>
                    </FlagSlider>
                </UsageFlag>
                <AtomContent>
                    <img src={atom} alt="atom" />
                </AtomContent>
                <TitleBenefits>
                    <p data-aos="fade-right" data-aos-duration="1000">TECNOLOGIA AVANÇADA PARA DESCONTAMINAÇÃO DE PINTURA POLIÉSTER E P-U</p>
                </TitleBenefits>
                <CheckItems>
                    <ItemCheck>
                        <img data-aos="fade-right" data-aos-duration="1500" src={checksign} alt="checksign" />
                        <img data-aos="zoom-in" data-aos-duration="1000" src={checkbox} alt="checkbox" />
                        <p data-aos="fade-left" data-aos-duration="1000">LIMPEZA NOS TRENS DE POUSO</p>
                    </ItemCheck>
                    <ItemCheck>
                        <img data-aos="fade-right" data-aos-duration="1800" src={checksign} alt="checksign" />
                        <img data-aos="zoom-in" data-aos-duration="1300" src={checkbox} alt="checkbox" />
                        <p data-aos="fade-left" data-aos-duration="1300">AUXILIA CONTRA A FULIGEM</p>
                    </ItemCheck>
                    <ItemCheck>
                        <img data-aos="fade-right" data-aos-duration="2100" src={checksign} alt="checksign" />
                        <img data-aos="zoom-in" data-aos-duration="1600" src={checkbox} alt="checkbox" />
                        <p data-aos="fade-left" data-aos-duration="1600">REMOÇÃO DE MOSCAS</p>
                    </ItemCheck>
                </CheckItems>
                <BenefitsCont id="benefits">
                    <div data-aos="fade-right" data-aos-duration="1000" className="title_benefits_cont">
                        <i><PiChartLineUpLight /></i>
                        <p>MÁXIMO RENDIMENTO EM CADA APLICAÇÃO</p>
                    </div>
                    <ul>
                        <li data-aos="fade-down" data-aos-duration="600">
                            <i><PiCheckSquareLight /></i>
                            <p>EFICIÊNCIA COMPROVADA</p>
                            <p>Testado e aprovado por especialistas da aviação, garantindo resultados excelentes!</p>
                        </li>
                    </ul>
                    <ul>
                        <li data-aos="fade-down" data-aos-duration="600">
                            <i><PiShieldCheckLight /> </i>
                            <p>SEGURANÇA EM SUPERFÍCIES</p>
                            <p>Desenvolvido para ser suave em todas as superfícies da aeronave, sem comprometer a integridade dos materiais.</p>
                        </li>
                    </ul>
                    <ul>
                        <li data-aos="fade-down" data-aos-duration="600">
                            <i><PiCheckCircleLight /></i>
                            <p>FACILIDADE DE USO</p>
                            <p>Aplicação simples e rápida, economizando tempo e esforço dos profissionais de manutenção.</p>
                        </li>
                    </ul>
                </BenefitsCont>
                <GallonContainer>
                    <div className="title_gallon_container">
                        <p>O APC 01 DO BRASIL!</p>
                        <img src={brazilflag} alt="brazilflag" />
                    </div>
                    <img src={gallon} alt="gallon" />
                </GallonContainer>
                <ProductContainer>
                    <img src={arrowleft} alt="arrow"></img>
                    <img src={arrowleft} alt="arrow"></img>
                    <img src={arrowleft} alt="arrow"></img>
                    <img src={polygon} alt="polygon"></img>
                    <img src={arrowright} alt="arrowright"></img>
                    <img src={arrowright} alt="arrowright"></img>
                    <img src={arrowright} alt="arrowright"></img>
                    <p>GARANTA JÁ O SEU!</p>
                    <p>E receba agora mesmo com o manual de instruções.</p>
                </ProductContainer>
                <CtaContent>
                    <ButtonCta as="a" href="https://wa.me/5531973639785?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20aquisi%C3%A7%C3%A3o%20do%20produto." target="_blank"><span>SAIBA MAIS</span></ButtonCta>
                </CtaContent>
                <FormContent id="us">
                    <div className="form_template">
                        <i><PiCertificateLight /> </i>
                        <p>O APC <strong>AP001</strong> é formulado para <strong>revitalizar o aspecto visual das aeronaves</strong>, selecionamos ingredientes de alta performance, passando por um rigoroso processo de pesquisas e experiências realizados na execução dos procedimentos,<strong> com a segurança e bem-estar </strong>dos padrões de qualidade <strong>AEROPOLIMENTO</strong>. </p>
                    </div>
                </FormContent>
                <Footer>
                    <p>13 anos de dedicação à aviação.</p>
                    <img src={logoap} alt="logoap" />
                    <span>
                        <Typewriter
                            words={['PRODUTOS DE ESTÉTICA PARA AERONAVES']}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                    <a href="https://www.instagram.com/aeropolimentooficial_/" target="_blank">
                        <img src={instagram} />
                    </a>
                    <span>ACESSE NOSSO INSTAGRAM</span>
                </Footer>
                <ContainerWavesTwo>
                    <ParticlesWave />
                </ContainerWavesTwo>
                <AuthProd>
                    <div className="sign_prod">
                        <p>Powered by</p>
                        <a href="https://www.designfactoryweb.com.br" target="_blank" rel="noopener noreferrer">
                            <img src={logodf} />
                        </a>
                    </div>
                </AuthProd>
            </HomeContainer>
        </>

    )
}

export default Home;