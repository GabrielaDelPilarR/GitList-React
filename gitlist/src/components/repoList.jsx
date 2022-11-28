import styled from 'styled-components'
import RepoItem from './repoItem'


const RepoListStyled = styled.div`
    grid-area: repoList;
    background-color: var(--bg);
    display:flex;
    flex-direction: column;
    gap: 2rem;

`

function RepoList({repoList}) {
    
    return (
        <RepoListStyled>
            {repoList.map((item)=>{
                return <RepoItem {...item} key={item.id}/>
            })}
        </RepoListStyled>
    )
}

export default RepoList
