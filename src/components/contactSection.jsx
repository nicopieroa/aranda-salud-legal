import { useForm } from '@mantine/form';
import { Title, TextInput, Textarea, Button } from '@mantine/core';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function ContactSection() {
    const formRef = useRef()

    const form = useForm({
        initialValues: { name: '', email: '', textArea: '' },

        validate: {
            name: (value) => (value.length < 2 ? 'Ingrese su nombre' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalido'),
            textArea: (value) => (value.length < 10 ? 'Ingrese su mensaje' : null),
        },
    });

    const emailServices = () => {
        const serviceId = import.meta.env.EMAILJS_SERVICERID;
        const templateId = import.meta.env.EMAILJS_TEMPLATEID;
        const apikey = import.meta.env.EMAILJS_APIKEY;

        emailjs.sendForm(serviceId,
            templateId,
            formRef.current,
            apikey
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleSubmit = () => {
        emailServices()
    }

    return (
        <div id='contactSection' className='py-20 px-3 flex flex-col justify-center items-center gap-y-15'>
            <Title order={2} size="32px" className='text-blue-600'>
                Contactanos
            </Title>

            <form ref={formRef} onSubmit={form.onSubmit(handleSubmit)} className='w-full flex flex-col gap-y-8'>
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

                <Button type="submit" size="lg" className='bg-green-600 hover:bg-green-700'>
                    ENVIAR
                </Button>
            </form>
        </div >
    );
}