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
            <Icon name="book"></Icon>
            <Icon name="branch"></Icon>
            <Icon name="cancel"></Icon>
            <Icon name="check"></Icon>
            <Icon name="github"></Icon>
            <Icon name="heart"></Icon>
            <Icon name="home"></Icon>
            <Icon name="link"></Icon>
            <Icon name="location"></Icon>
            <Icon name="search"></Icon>
            <Icon name="star"></Icon>
            <Icon name="twitter"></Icon>
            <Icon name="user"></Icon>
        </FiltersStyled>
    )
}

export default Filters
