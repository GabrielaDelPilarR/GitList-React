import styled from 'styled-components'
import Language from './language'
import Icon from './icon'

const RepoItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--bg);
    padding-block: 1rem;
    border-block-end: 1px solid var(--grey);
    &:last-child{
        border-block-end: none;
    }

    .title{
        display:flex;
        gap:1rem;
        margin:0;
    }

    a {
        font: var(--headline2-semi-bold);
        text-decoration: none;
        color: var(--primary);
    }

    .visibility{
        color: var(--grey);
        border: 1px solid var(--grey);
        padding-inline: .5rem;
        padding-block: 2px;
        border-radius: .5rem; 
    }

    .description {
        font: var(----body2-regular);
        margin:0;
    }

    .topicList{
        display:flex;
        flex-direction: row;
        gap: 0.4rem;
    }

    .topics{
        font: var(--caption-medium);
        color: var(--primary);
        border: 1px solid #15223A;
        border-radius: 2.3rem;
        background: #15223A;
        padding-inline: 1.3rem;
        padding-block: 0.4rem;
    }

    .details {
        display:flex;
        gap: 1rem;
    }

    .details-item {
        display: flex; 
        gap: .5rem;
        align-items: center;
        color: var(--grey-1);
        & span::first-letter {
            text-transform: uppercase;
        }
    }
`

function RepoItem(props) {
    const updateTime = new Date(props.updated_at)
    const today = new Date()
    const diffMilliseconds = updateTime - today 
    const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24)) 
    const timeAgo = new Intl.RelativeTimeFormat('es').format(diffDays, 'days')

    return (
        <RepoItemStyled>
            <h3 className='title'>
                <a href={props.html_url}>
                {props.name}
                </a>
                {
                    !props.private?(
                        <span className='visibility'>Public</span>
                    )
                    : null
                }
            </h3>
            {
                props.description?(
                    <p className='description'>{props.description}</p>
                 ): null
            }

            {
                props.topics.length ? (
                    <div className="topicList">
                        {
                            props.topics.map(item=> <span className='topics'key={item}>{item}</span>)
                        }
                    </div>
                ):null
            }

            <div className='details'>
            {
                props.language? <Language name = {props.language}/>: null
            }
                <span className='details-item'>
                    <Icon name = 'star'/>
                    <span>{props.stargazers_count}</span>
                </span>
                <span className='details-item'>
                    <Icon name = 'branch'/>
                    <span>{props.forks_count}</span>
                </span>
                <span className='details-item'>     
                    <span>{timeAgo}</span>
                </span>
            </div>
            
        </RepoItemStyled>
    )
}

export default RepoItem
