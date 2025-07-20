import { FaEnvelope } from "react-icons/fa";
import { socialMediaList } from "../../social-media-list/socialMediaList";
import { theme } from "../theme";
import styled from "styled-components";

export const BaseBoard = () => {
    return (
        <Footer>
            <p>&copy; 2025 Kaue Rodrigues. Todos os direitos reservados.</p>
            <div className="social-media">
                {socialMediaList.map((socialMedia, index) => {
                    const Icon = socialMedia.icon;
                    return (
                        <a key={index} href={socialMedia.link} target="_blank" rel="noopener noreferrer"><Icon /></a>
                    )
                })}
                <div className="email">
                    <FaEnvelope/> <span>kaue7rodrigues10@gmail.com</span>
                </div>
            </div>
        </Footer>
    )
}

const Footer = styled.footer`
background-color: ${theme.headerBackGround};
height: 70px;
max-width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 50px;
color: white;

a {
    color: ${theme.iconsColor};
    font-size: 30px;
    transition: 0.3s;
}

a:hover {
    color: ${theme.hover};
}

.email svg {
    font-size: 30px;
}

.email {
    display: flex;
    align-items: center;
    height: 30px;
    gap: 4px;
    margin-left: 10px;
}

.social-media {
    display: flex;
    gap: 6px;
}

@media(max-width: 900px) {
    height: 90px;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    text-align: center;
}

@media(max-width: 490px) {
    font-size: 13px;

    .email svg, a {
        font-size: 25px;
    }

    .email {
        height: 25px;
    }
}
`