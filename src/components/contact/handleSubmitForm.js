export const handleSubmitForm = async (data, reset) => {
    const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            const response = await fetch("https://formsubmit.co/kaue7rodrigues10@gmail.com", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                alert("Mensagem enviada com sucesso!");
                reset();
            } else {
                alert("Erro ao enviar a mensagem.");
            }
        } catch (err) {
            alert("Erro inesperado.");
            console.error(err);
        }
}