import styled from 'styled-components'
import { isValidElement } from 'react'

const ButtonStyled = styled.button` 
    font: var(--buttonBg);
    background: var(--button);
    color: var(--white);
    border: 1px solid var(--grey);
    gap: .5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    min-inline-size:135px;
    border-radius: .5rem;
    padding-block: .25rem;
    text-decoration: none !important;
    &:hover {
        background: var(--white);
        color: var(--button);
    }
`

function Button({text, link, className, icon}) {
    const component = link? 'a': 'button'
    let IconComponent = null
    if(icon) {
        if(isValidElement(icon)){
            IconComponent = icon
        }
    }
    return (
        <ButtonStyled as= {component} href={link} className={className}>
            {IconComponent}
            {text}
        </ButtonStyled>
    )
}

export const ButtonContrast = styled(Button)`
    background: var(--white);
    color: var(--buttonBg);
    &:hover {
        background: var(--buttonBg);
        color: var(--white);
    }

`
export const ButtonRounded = styled(Button)`
    border: 2px solid var(--white);
    min-inline-size: initial;
    border-radius: 50%;
    padding: 0.75rem;
    background: var(--buttonBg);
    &:hover {
    background: var(--buttonBg);
    transform: scale(1.1);
}

`
export default Button
