import '../styles/Navigation.style'
import { NavigationContainer } from "../styles/Navigation.style";
import { FaWhatsapp } from "react-icons/fa";
import { PiCaretUpLight } from "react-icons/pi";

function Navigation() {
    return (
        <NavigationContainer>
            <div className='arrow_icon'>
                <i onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}><PiCaretUpLight /></i>
            </div>
            <div className='wpp_icon'> 
                <a href="https://wa.me/5531973639785?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20aquisi%C3%A7%C3%A3o%20do%20produto.">
                    <i><FaWhatsapp /></i>
                </a>
            </div>
        </NavigationContainer>
    );
}

export default Navigation;