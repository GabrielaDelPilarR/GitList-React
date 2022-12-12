import styled from 'styled-components'
import RepoItem from './repoItem'


const RepoListStyled = styled.div`
    grid-area: repoList;
    background-color: var(--bg);
    display:flex;
    flex-direction: column;
    gap: 2rem;

`

function RepoList({repoList, search}) {
    let list = repoList
    if(search !== ''){
        list = list.filter((item)=>{
            return item.name.search(search) >= 0 
        })
    }
    return (
        <RepoListStyled>
            {list.map((item)=>{
                //console.log(item)
                return <RepoItem {...item} key={item.id}/>
            })}
        </RepoListStyled>
    )
}

export default RepoList
