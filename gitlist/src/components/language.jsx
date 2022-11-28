import styled from 'styled-components'

const LanguageStyled = styled.div`
    display: flex;
    align-items:center;
    gap: .5rem;
    &:before{
        content: '';
        inline-size:1rem;
        block-size: 1rem;
        background: ${({color})=> color};
        border-radius: 50%;
    }
`
const languages = {
    ruby:{
        color:'red'
    },
    css :{
        color:'green'
    },
    javascript: {
        color: 'yellow'
    }
}

function Language({name}) {
    const formatteName = name.toLowerCase();
    const color = languages[formatteName]? languages[formatteName].color:'white'
    return (
        <LanguageStyled color = {color}>
            {name}
        </LanguageStyled>
    )
}

export default Language
