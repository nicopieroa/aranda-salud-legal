import { Title, TextInput, Textarea, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

import emailjs from '@emailjs/browser';

import { AlertComponent } from './alert';
import { LoaderComponent } from './loader';

import { useRef, useState } from 'react';

export function ContactSection() {
    const formRef = useRef()

    const [statusFormSend, setStatusFormSend] = useState(null)
    const [loader, setLoader] = useState(false)

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
        setLoader(true)
        form.reset()

        if (statusFormSend !== null)
            setLoader(false)
    }

    // eslint-disable-next-line no-unused-vars
    // function Alertt({ statusFormSend }) {
    //     return (
    //         <Alert className={`${statusFormSend === 'OK' ? 'bg-green-700' : 'bg-red-500'} `}>
    //             <p className='text-white'>
    //                 {statusFormSend === 'OK' ?
    //                     'Tu consulta fue enviada con éxito.' :
    //                     'Hubo un error al intentar enviar tu consulta. Prueba nuevamente, de persistir el error, intenta contactarnos vía otro medio como WhatsApp o Linkedin. Disculpas y muchas gracias.'}
    //             </p>
    //         </Alert>
    //     )
    // }

    // eslint-disable-next-line no-unused-vars
    // function Loaderr() {
    //     return (
    //         <Loader variant="dots" size='lg' className='self-center' />
    //     )
    // }

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

                {statusFormSend === null && loader === false ? null :
                    statusFormSend === null && loader ? <LoaderComponent /> :
                        statusFormSend !== null ?
                            <AlertComponent statusFormSend={statusFormSend} /> :
                            null}
            </form>
        </div >
    );
}