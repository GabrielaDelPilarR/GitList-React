import styled from 'styled-components'
import Icon from './icon'

const FiltersStyled = styled.div`
    grid-area: filters;
    background-color: yellow;
`

function Filters() {
    return (
        <FiltersStyled>
            <Icon name="arrow-down"></Icon>
        </FiltersStyled>
    )
}

export default Filters
