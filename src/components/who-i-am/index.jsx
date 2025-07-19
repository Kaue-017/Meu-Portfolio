import styled from "styled-components"
import { theme } from "../theme"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { FaLinkedin, FaGithub, FaWhatsapp, FaDownload, } from "react-icons/fa"
import { Header } from "../header"

export const WhoIAm = () => {
    const [text] = useTypewriter({
        words: [`Front-End`],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 120,
        delaySpeed: 10000
    })

    const socialMediaList = [
        {
            link: "https://www.linkedin.com/in/kaue-rodrigues-dev/",
            icon: FaLinkedin
        },
        {
            link: "https://github.com/Kaue-017",
            icon: FaGithub
        },
        {
            link: "https://wa.me/5513996007391",
            icon: FaWhatsapp
        }
    ]

    return (
        <>
        <Header />
            <Section id="who-i-am">
                <div className="container-texts">
                    <div className="texts">
                        <h1>Desenvolvedor <br /><span className="highlight-title">{text}</span><span id="cursor-style"><Cursor /></span></h1>
                        <p>Olá! Sou o Kaue, Desenvolvedor Front-End Júnior com conhecimento em <span>React, JavaScript, HTML e CSS.</span> Crio <span>interfaces modernas, responsivas</span> e focadas na melhor experiência do usuário, sempre aplicando boas práticas de desenvolvimento. <br /><br />Estou em constante evolução, aprimorando minhas habilidades por meio de <span>projetos próprios e estudos contínuos.</span> No momento, busco oportunidades profissionais onde eu possa aplicar meu conhecimento, colaborar com soluções de qualidade e seguir crescendo na área.<br /><br /> Se você procura alguém comprometido, proativo e com foco em resultados, estou pronto para contribuir.</p>
                    </div>
                    <img src="/Portfolio-Kaue/images/Kaue.jpg" />
                </div>
                <aside>
                    <div className="download-cv">
                        <a href="/Portfolio-Kaue/arquivos/Kaue_Sousa_CV.pdf" download>
                            <button><FaDownload /> Baixar CV</button>
                        </a>
                    </div>
                    <div className="social-media">
                        {socialMediaList.map((socialMedia, index) => {
                            const Icon = socialMedia.icon;
                            return (
                                <a key={index} href={socialMedia.link} target="_blank"><Icon /></a>
                            )
                        })}
                    </div>
                </aside>
            </Section>
        </>
    )
}

const Section = styled.section`
    background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(/Portfolio-Kaue/images/background.jpeg);
    background-size: contain;
    color: ${theme.textColor};
    display: flex;
    width: 100vw;
    height: 100vh;
    padding-top: 130px;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: cover;

#cursor-style {
    display: inline;
    -webkit-background-clip: initial;
    -webkit-text-fill-color: #FFD700;
}
    
.texts {
    width: 800px;
    margin: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: 23px;
}

span {
    color: ${theme.textSecondaryColor};
}

.container-texts {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

aside {
    margin: 20px 230px;
    display: flex;
    align-items: center;
    gap: 90px;
}

.social-media {
    display: flex;
    gap: 10px;
}

.social-media svg {
    color: ${theme.iconsColor};
    width: 50px;
    height: 50px;
    transition: 0.4s;
}

.social-media svg:hover {
    color: ${theme.hover};
    transform: scale(105%);
}

button svg {
    width: 30px;
    height: 30px;
}

.download-cv button {
    box-shadow: 0 4px 8px rgba(255, 215, 0, 0.3);
    font-size: 20px;
    display: flex;
    align-items: center;
    background-color: ${theme.textSecondaryColor};
    padding: 10px;
    border-radius: 20px;
    transition: 0.3s;
    border: none;
    gap: 5px;
}

.download-cv button:hover {
    cursor: pointer;
    background-color: ${theme.secondaryHover};
    transform: scale(105%);
    box-shadow: 0 6px 12px rgba(255, 215, 0, 0.4);
}

h1 {
    display: inline-block;
    background: linear-gradient(to right, #555, #ccc, #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;;
    text-align:center;
    font-size: 50px;
}

.highlight-title {
    background: linear-gradient(to right, #F0E68C, #FFD700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

img {
    width: 450px;
    height: 450px;
    border-radius: 50%;
    margin-top: 80px;
    box-shadow: 0px 0px 70px rgba(142, 148, 59, 0.74);
}

@media(max-width: 1500px) {
    .texts {
        width: 600px;
        font-size: 18px;
    }

    h1 {
        font-size: 40px;
    }

    img {
        margin: 60px 0 0 0;
        width: 350px;
        height: 350px;
    }
}

@media(max-width: 1100px) {
    padding-top: 100px;
    background-position: 55% center;

    .texts {
        width: 400px;
        font-size: 15px;
    }

    h1 {
        font-size: 30px;
    }

    img {
        width: 250px;
        height: 250px;
    }

    .social-media svg {
        width: 35px;
        height: 35px;
    }

    .download-cv button {
        font-size: 16px;
        padding: 7px;
    }

    .download-cv button svg {
        width: 20px;
        height: 20px;
    }

    aside {
        margin: 10px 100px;
        gap: 50px;
    }
}

@media(max-width: 800px) {
    padding-top: 70px;
    background-position: 25% center;

    .texts {
        margin: 30px 15px ;
        width: 300px;
        font-size: 13px;
    }

    h1 {
        font-size: 25px;
    }

    img {
        margin: 0 20px;
        width: 150px;
        height: 150px;
    }
}

@media(max-width: 490px) {

    background-position: 20% center;

    .texts {
        width: 190px;
        margin-left: 30px;
    }

    h1 {
        font-size: 20px;
    }

    img {
        width: 100px;
        height: 100px;
    }

    .download-cv button {
        font-size: 12px;
    }

    .download-cv button svg {
        width: 15px;
        height: 15px;
    }

    .social-media svg {
        width: 25px;
        height: 25px;
    }

    aside {
        margin: 10px 0 0 50px;
        gap: 30px;
    }
}
`