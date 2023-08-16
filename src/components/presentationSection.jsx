import { Title, Menu, Button } from '@mantine/core';

import Ilustration from '../assets/ilustrations/1.svg'
import dropdownGreen from '../assets/icons/arrow-green.svg'
import whatsappGreen from '../assets/icons/whatsapp-green.svg'
import linkedinGreen from '../assets/icons/linkedin-green.svg'
// import xGreen from '../assets/icons/x-green.svg'
import emialGreen from '../assets/icons/email-green.svg'

export function PresentationSection() {

    return (
        <section className="flex flex-col justify-center items-center gap-y-16 py-20 px-3 mt-20">
            <div className="text-center flex flex-col gap-y-16">
                <Title order={1} size="40px" fw="900">Aranda Salud Legal</Title>

                <Title order={2} size="20px" fw="600" color='#7b7e80' fs="italic">
                    Firma especializada en asesoramiento legal en salud
                </Title>
            </div>

            <img src={Ilustration} alt="Ilustración de dos personas trabajando en una oficina" className='w-full' />

            <Menu trigger='hover' openDelay={100} closeDelay={400} withArrow shadow='md'>
                <Menu.Target>
                    <Button size='xl' className="bg-green-400 text-green-700 font-bold hover:bg-green-500">
                        <span>HABLEMOS</span>
                        <img src={dropdownGreen} alt="Flecha indicadora de menu desplegable" className='w-8' />
                    </Button>
                </Menu.Target>

                <Menu.Dropdown className='bg-green-400 p-0'>
                    <a href="https://wa.me/543426124730" target="_blank" rel="noopener noreferrer">
                        <Menu.Item className='text-green-700 font-bold hover:bg-green-500 text-lg p-6 w-full'>
                            <img src={whatsappGreen} alt="Imagen del logo de whattsapp que representa el boton para contactarse por whattsapp" className='w-8' />
                            <span>Whatsapp</span>
                        </Menu.Item>
                    </a>
                    <a href="https://www.linkedin.com/in/mariel-aranda-983099108/" target="_blank" rel="noopener noreferrer">
                        <Menu.Item className='text-green-700 font-bold hover:bg-green-500 text-lg p-6'>
                            <img src={linkedinGreen} alt="Imagen del logo de linkedin que representa el boton para contactarse por linkedin" className='w-8' />
                            <span>Linkedin</span>
                        </Menu.Item>
                    </a>
                    {/* <a href="" alt="Imagen del logo de x que representa el boton para contactarse por X">
                        <Menu.Item className='text-green-700 font-bold hover:bg-green-500 text-lg p-6'>
                            <img src={xGreen} alt="" className='w-8' />
                            <span>X</span>
                        </Menu.Item>
                    </a> */}
                    <a href="#contactSection">
                        <Menu.Item className='text-green-700 font-bold hover:bg-green-500 text-lg p-6'>
                            <img src={emialGreen} alt="" className='w-8' />
                            <span>Email</span>
                        </Menu.Item>
                    </a>
                </Menu.Dropdown>
            </Menu>
        </section>
    );
}