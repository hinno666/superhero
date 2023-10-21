import { Wrapper } from "../assets/wrappers/About"
import { SlSocialVkontakte } from 'react-icons/sl'
import { FaGithub, FaInstagram } from 'react-icons/fa'

export const About = () => {
    return (
        <Wrapper>
            <div className="page">
                <p className="about-subtitle">our mission</p>
                <h3 className="about-title">BRING INSPIRATION AND INNOVATION TO EVERY PERSON IN THE WORLD
                </h3>
                <p className="about-subtitle">IF YOU EXIST, YOU ARE A PERSON</p>
                <div className="about-links">
                    <div className="about-link">
                        <SlSocialVkontakte />
                    </div>
                    <div className="about-link">
                        <FaInstagram />
                    </div>
                    <div className="about-link">
                        <FaGithub />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}