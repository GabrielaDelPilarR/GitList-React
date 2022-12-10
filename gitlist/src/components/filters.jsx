import styled from 'styled-components'

const FiltersStyled = styled.div`
    grid-area: filters;
`

function Filters({repoListCount = 100}) {
    return (
        <FiltersStyled>
         <h2 className="count">
            Repositorios {repoListCount}
         </h2>
        
        </FiltersStyled>
    )
}

export default Filters
