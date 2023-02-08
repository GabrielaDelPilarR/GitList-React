import styled from 'styled-components'
import InputText from './input'
import Selector from './selector'
import Separador from './separador'
import { useState } from 'react'

const FiltersStyled = styled.div`
    grid-area: filters;
    .count{
        font: var(--headline2-semi-bold);
        color: var(--white);
        margin-block-end: 1.5rem;
    }

    .action-list{
        display: flex;
        gap:1rem;
    }

    .select.list{
        display: flex;
        gap:.5rem;
    }
`

function Filters({repoListCount, setSearch}) {
    const [value , setValue] = useState('')
    function handleChange(event){
        setSearch(event.target.value)
    }
    function handleValue(event){
        setValue(event.target.value)
        console.log(event.target.value)
    }
    return (
        <FiltersStyled>
         <h2 className="count">
            Repositorios {repoListCount}
         </h2>
         <div className='action-list'>
            <InputText 
            placeholder="Busca un repositorio"
            type="search"
            onChange={handleChange}
            >
            </InputText>
            <div className="select-list">
            <Selector>
                <option value="all" >All</option>
                <option value="forks">Forks</option>
            </Selector>
            <Selector value={value} onChange= {handleValue}>
                <option value="Lenguaje">Lenguaje</option>
                <option value="Html">Html</option>
                <option value="Css">Css</option>
                <option value="Javascript">Javascript</option>
            </Selector>
            <Selector>
                <option value="ordenar">Ordenar</option>
                <option value="stars">Stars</option>
            </Selector>
            </div>
         </div>
         <Separador/>
        </FiltersStyled>
    )
}

export default Filters
