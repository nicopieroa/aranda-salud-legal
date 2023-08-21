import { useForm } from '@mantine/form';
import { Title, TextInput, Textarea, Button, Alert } from '@mantine/core';

import emailjs from '@emailjs/browser';

import { useRef, useState } from 'react';

export function ContactSection() {
    const formRef = useRef()

    const [statusFormSend, setStatusFormSend] = useState(null)

    const form = useForm({
        initialValues: { name: '', email: '', textArea: '' },

        validate: {
            name: (value) => (value.length < 2 ? 'Ingrese su nombre' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalido'),
            textArea: (value) => (value.length < 10 ? 'Ingrese su mensaje' : null),
        },
    });

    const emailServices = () => {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICERID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATEID;
        const apikey = import.meta.env.VITE_EMAILJS_APIKEY;

        emailjs.sendForm(
            serviceId,
            templateId,
            formRef.current,
            apikey
        )
            .then((result) => {
                if (result.text) setStatusFormSend(result.text)
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleSubmit = () => {
        emailServices()
        form.reset()
    }

    // eslint-disable-next-line no-unused-vars
    function Alertt({ content }) {
        return (
            <Alert>
                {content}
            </Alert>
        )
    }

    return (
        <div id='contactSection' className='contactSection'>
            <Title order={2} size="32px" c="#085db2">Contactanos</Title>

            <form ref={formRef} onSubmit={form.onSubmit(handleSubmit)} className='form'>
                <TextInput
                    name='userName'
                    label="Nombre"
                    placeholder="Gustavo"
                    radius="md"
                    withAsterisk
                    {...form.getInputProps('name')}
                    style={{ margin: "0" }} />
                <TextInput
                    name='userEmail'
                    mt="sm"
                    label="Email"
                    placeholder="gustavo@email.om"
                    radius="md"
                    withAsterisk
                    {...form.getInputProps('email')}
                    style={{ margin: "0" }} />

                <Textarea
                    name='message'
                    placeholder="Mi consulta es sobre..."
                    label="Tu mensaje"
                    radius="md"
                    withAsterisk
                    {...form.getInputProps('textArea')}
                />

                <Button type="submit" radius="md" h="48px" size="20px" uppercase fullWidth>
                    ENVIAR
                </Button>

                {
                    statusFormSend === 'OK' ?
                        <Alertt color='lime' content='Tu consulta fue enviada con éxito' /> :
                        <Alert color="red" content='Hubo un error al intentar enviar tu consulta. Prueba nuevamente, de persistir el error, intenta contactarnos vía otro medio como WhatsApp o Linkedin. Disculpas y muchas gracias.' />
                }
                <Alertt content='Tu consulta fue enviada con éxito' />
            </form>
        </div >
    );
}