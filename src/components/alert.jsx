import { Alert } from "@mantine/core";

export function AlertComponent({ statusFormSend }) {
    return (
        <Alert className={`${statusFormSend === 'OK' ? 'bg-green-700' : 'bg-red-500'} `}>
            <p className='text-white'>
                {statusFormSend === 'OK' ?
                    'Tu consulta fue enviada con éxito.' :
                    'Hubo un error al intentar enviar tu consulta. Prueba nuevamente, de persistir el error, intenta contactarnos vía otro medio como WhatsApp o Linkedin. Disculpas y muchas gracias.'}
            </p>
        </Alert>
    )
}