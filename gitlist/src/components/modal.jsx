/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Overlay from './overlay'
import { ButtonContrast } from './button'
import InputStyled from './input'

const ModalContentStyled = styled.form `
    background: var(--bg);
    color: var(--white);
    padding:1.5rem;
    border-radius: .5rem;
    position: fixed;
    inset-block-start: 50%;
    transform: translateY(-50%) translateX(-50%);
    inset-inline-start: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    inline-size: 23.75rem;
    .title{
        font: var(--headline2-semi-bold);
        margin:0;
    }
`


function ModalContent() {
    const form = useRef(null)
    const navigator = useNavigate()
    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(form.current)
        console.log()
        navigator(`/${formData.get('username')}`)
    }

    return (
        <Overlay>
            <ModalContentStyled ref={form} action= "" onSubmit={handleSubmit}>
                <h2 className='title'>Busca a tu usuario favorito</h2>
                <InputStyled type="text" autocomplete= 'off' name="username"placeholder="Username"></InputStyled>
                <ButtonContrast text="Buscar"></ButtonContrast>
            </ModalContentStyled>
        </Overlay>
        )

}

export default ModalContent
