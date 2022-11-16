import styled from 'styled-components';

const ProfileStyled = styled.div`
    grid-area: profile;
    .avatar{
        border-radius: 50%;
        border: 1px solid var(--grey-1);
        overflow: hidden;
        box-sizing: border-box;
        margin-block-end: 1.5rem;
    }

    .name {
        font: var(--headline1);
        color: var(--white);
        margin:0;
        margin-block-end: .5rem;
    }

    .username {
        margin-block: .5rem;
        font: var(--headLine2-ligth);
    }

    .info{
        color: var(--grey-1);
        text-decoration: none;
        display:flex;
        align-items: center;
        gap: 0.5rem;
        margin-block: 1rem;
        font: var(--body2-semi-bold);
    }

    a:hover{
        text-decoration:underline;
    }
`

function Profile() {
    return (
        <ProfileStyled>
            <img className='avatar' src='' alt=''></img>
            <p className='name'>Gabriela Rojas</p>
            <p className='username'>GabRo21</p>
            <div className="buttons">
                <button>Follow</button>
                <button>Sponsors</button>
            </div>
            <p className='bio info'>
                hola mundo!
            </p>
            <p className='followers info'>
                125 followers • 1 following
            </p>
            <p className='starts info'>81</p>
            <p className='location info'>Peru</p>
            <a className= 'info' href='https://www.linkedin.com/in/gabrielarojasroque/' target='_blank' rel='noreferrer'>
            https://www.linkedin.com/in/gabrielarojasroque/
            </a>
            <a className= 'info' href='https://twitter.com/Gabriel78383636' target='_blank' rel='noreferrer'>
            @Gabriel78383636
            </a>
        </ProfileStyled>
    )
}

export default Profile
