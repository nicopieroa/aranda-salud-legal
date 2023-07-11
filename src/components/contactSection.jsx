import { useForm } from '@mantine/form';
import { Title, TextInput, Textarea, Button } from '@mantine/core';

export function ContactSection() {
    const form = useForm({
        initialValues: { name: '', email: '', textArea: '' },

        // functions will be used to validate values at corresponding key
        validate: {
            name: (value) => (value.length < 2 ? 'Ingrese su nombre' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalido'),
            textArea: (value) => (value.length < 10 ? 'Ingrese su mensaje' : null),
        },
    });

    return (
        <div id='contact' className='contactSection'>
            <Title order={2} size="32px">Contactanos</Title>

            <form onSubmit={form.onSubmit(console.log)} className='form'>
                <TextInput
                    label="Nombre"
                    placeholder="Gustavo"
                    radius="md"
                    withAsterisk
                    {...form.getInputProps('name')}
                    style={{ margin: "0" }} />
                <TextInput
                    mt="sm"
                    label="Email"
                    placeholder="gustavo@email.om"
                    radius="md"
                    withAsterisk
                    {...form.getInputProps('email')}
                    style={{ margin: "0" }} />

                <Textarea
                    placeholder="Mi consulta es sobre..."
                    label="Tu mensaje"
                    radius="md"
                    withAsterisk
                    {...form.getInputProps('textArea')}
                />

                <Button type="submit" mt="sm" radius="md">
                    ENVIAR
                </Button>
            </form>
        </div>
    );
}