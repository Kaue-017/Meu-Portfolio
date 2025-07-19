
import styled from "styled-components";
import { Header } from "../header";
import { useForm } from "react-hook-form";
import { handleSubmitForm } from "./handleSubmitForm";

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
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" id="name" placeholder="Digite seu nome" className={`${errors.name ? "required-field" : ""}`}
                        {...register("name", {
                            required: "campo obrigatório"
                        })} />
                        {errors.name && <p>{errors.name.message}</p>}
                    <button type="submit" className="enviar">
                        Enviar mensagem
                    </button>
                </form>
            </Section>
        </>
    )
}

const Section = styled.section`
padding-top: 100px;

.required-field {
    border: 2px solid red;
}
`