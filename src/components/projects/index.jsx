import styled from "styled-components"
import { projects } from "./projects"
import { Header } from "../header"
import { theme } from "../theme"
import { FaGithub, FaGlobe } from "react-icons/fa"

export const Projects = () => {


    return (
        <>
            <Header />
            <main>
                <Section>
                    <div className="container-projects">
                        {projects.map((project, index) => {
                            return (
                                <div key={index} className="project">
                                    <img src={project.image} alt={project.name} />
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <div className="languages">
                                        {project.languages.map((language, index) => {
                                            return (
                                                <span key={index} className="language">{language}</span>
                                            )
                                        })}
                                    </div>
                                    <div className="links-project">
                                        <a href={project.repository} target="_blank" rel="noopener noreferrer"><FaGithub /> Repositório</a>
                                        <a href={project.deploy} target="_blank" rel="noopener noreferrer"><FaGlobe />Deploy</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Section>
            </main>
        </>
    )
}

const Section = styled.section`
padding-top: 150px;
min-height: 100vh;

.container-projects {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    padding: 50px;
}

.project {
    width: 450px;
    height: 540px;
    border-radius: 10px;
    background: ${theme.headerBackGround};
    display: flex;
    flex-direction: column;
    transition: 0.3s;
    padding: 28px 30px 0 30px;
    color: ${theme.textColor};
    font-size: 18px;
    gap: 15px;
}

.project h3 {
    font-size: 28px;
}

.project p {
    height: 105px;
}

.project img {
    width: 390px;
    height: 190px;
    display: flex;
    align-self: center;
    border: 1px solid ${theme.textSecondaryColor};
    border-radius: 10px;
}

.languages {
    display: flex;
    gap: 10px;
    height: 58px;
    flex-wrap: wrap;
}

.language {
    background-color: ${theme.textSecondaryColor};
    color: black;
    padding: 3px 6px;
    border-radius: 12px;
    height: 24px;
}

.links-project {
    display: flex;
    justify-content: space-between;
}

.links-project a {
    color: ${theme.textColor};
    padding: 7px;
    border: 1px solid;
    border-radius: 10px;
    display: flex;
    gap: 3px;
    transition: 0.3s;
}

.links-project a:hover {
    transform: scale(104%);
    background-color: ${theme.colorBackGround}
}

@media(max-width: 800px) {
    padding-top: 70px;
    .project {
        font-size: 16px;
        width: 400px;
        height: 510px;
    }

    .project img {
        width: 350px;
    }

    .project h3 {
        font-size: 24px;
    }

    .project p {
        height: 90px;
    }
}

@media(max-width: 490px) {
    .project {
        width: 300px;
        height: 440px;
        font-size: 14px;
    }

    .project img {
        width: 250px;
        height: 135px;
    }

    .project h3 {
        font-size: 18px;
    }

    .language {
        font-size: 13px;
    }
}
`