
import styled from "styled-components";
import { Header } from "../header";
import { useForm } from "react-hook-form";
import { handleSubmitForm } from "./handleSubmitForm";
import { theme } from "../theme";

export const Contact = () => {
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const onSubmit = (data) => {
        handleSubmitForm(data, reset)
    }

    return (
        <>
            <Header />
            <Section>
                <div className="text">
                    <h2>Entre em contato</h2>
                    <p>Se quiser tirar algum projeto do papel, colaborar em algo ou falar sobre oportunidades de trabalho, preencha esse formulário e vamos conversar.<br /> Responderei assim que possível!</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" placeholder="Digite seu nome" className={`${errors.name ? "required-field" : ""}`}
                        {...register("name", {
                            required: true
                        })} />
                        <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Digite seu email" className={`${errors.email ? "required-field" : ""}`}
                        {...register("email", {
                            required: true
                        })} />
                        <label htmlFor="message">Mensagem:</label>
                    <textarea placeholder="Digite sua mensagem" className={`${errors.message ? "required-field" : ""}`}
                        {...register("message", {
                            required: true
                        })} />
                    <button type="submit" className="enviar">
                        Enviar mensagem
                    </button>
                </form>
            </Section>
        </>
    )
}

const Section = styled.section`
height: 100vh;
display: flex;
color: ${theme.textColor};
align-items: center;
justify-content: center;
padding: 0 50px;
gap: 100px;

.text {
    width: 700px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-weight: 600;
}

h2 {
    display: flex;
    align-self: center;
    font-size: 40px;
    color: ${theme.textSecondaryColor};
}

form {
    width: 450px;
    height: 360px;
    padding: 10px 30px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.headerBackGround};
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.15);
}



form input, form textarea, form button {
    width: 100%;
    margin-bottom: 14px;
    border-radius: 6px;
    border: none;
}

form input, form button {
    padding: 8px;
}

form textarea {
    height: 100px;
    padding: 8px 0 0 8px;
    resize: none;
}

form button {
    margin: 20px 0 0 0;
    background-color: ${theme.textSecondaryColor};
    transition: 0.3s;
}

form button:hover {
    transform: scale(102%);
    background-color: ${theme.secondaryHover};
}

.required-field {
    border: 1px solid red;
}

input:focus, textarea:focus {
    outline: none;
    border: 2px solid ${theme.textSecondaryColor};
}

@media(max-width: 1300px) {
    gap: 50px;

    .text {
        gap: 25px;
    }

    .text h2 {
        font-size: 35px;
    }
}

@media(max-width: 800px) {
    flex-direction: column;

    .text {
        width: 80vw;
        font-size: 13px;
    }

    .text h2 {
        font-size: 25px;
    }

    form {
        width: 60vw;
    }
}

@media(max-width: 500px) {
    form {
        width: 80vw;
    }
}
`