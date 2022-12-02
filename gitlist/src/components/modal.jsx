import styled from 'styled-components'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const ModalStyled = styled.div`

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
        <form ref={form} action= "" onSubmit={handleSubmit}>
            <h2>Busca a tu usuario favorito</h2>
            <input type="text" name="username"placeholder="Username"></input>
            <button>Buscar</button>
        </form>
    )
}

export default ModalContent
