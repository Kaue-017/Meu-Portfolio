import styled from "styled-components"
import { Header } from "../header"
import { skills } from "./skills"
import { theme } from "../theme"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

export const Skills = () => {

    return (

        <>
            <Header />
            <main>
                <Section>
                    <div className="container-skills">
                        <Swiper spaceBetween={20} loop={true} slidesPerView={4} speed={1500} freeMode={true} modules={[Autoplay, FreeMode]}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}>

                            {skills.map((skill, index) => {
                                const Icon = skill.icon
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="skill">
                                            <Icon className="icon" />
                                            <strong>{skill.name}</strong>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </Section>
            </main>
        </>
    )
}

const Section = styled.section`
display: flex;
height: 100vh;
align-items: center;
width: 100%;
padding: 100px 40px;
justify-content: center;

.swiper-wrapper {
  transition-timing-function: linear;
}

.container-skills {
    width: 40%
}

.container-skills:hover {
cursor: grab;
}

.skill {
    background-color: ${theme.headerBackGround};
    width: 140px;
    height: 200px;
    color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    border: 1px solid gold;
}

.skill .icon {
    font-size: 70px;
}

@media(max-width: 1600px) {
    .container-skills {
        width: 60%
    }
}

@media(max-width: 1100px) {
    .container-skills {
        width: 90%
    }
}

@media(max-width: 800px) {
    .container-skills {
        width: 100%
    }

    .skill {
        width: 120px;
        height: 160px;
    }
}

@media(max-width: 650px) {
    .skill {
        width: 80px;
        height: 100px;
        font-size: 11px;
        gap: 20px;
    }

    .skill .icon {
        font-size: 40px;
    }
}

@media(max-width: 470px) {
    .skill {
        width: 60px;
        height: 80px;
        font-size: 9px;
    }

    .skill .icon {
        font-size: 30px;
    }
}
`