import styled from 'styled-components';
import props from '../data/profile-data';
import Button from './button';
import Icon from './icon/index'

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
        margin-block-end: 1.5rem;
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

    .buttons {
        display:flex;
        gap:1rem;
        margin-block-end: 1.5rem;
    }
`   

function Profile() {
    const {avatar_url, name, login, bio, followers , following, location, blog , twitter_username} = props
    return (
        <ProfileStyled>
            <img className='avatar' width="278" height="278"src={avatar_url} alt=''></img>
            <p className='name'>{name}</p>
            <p className='username'>{login}</p>
            <div className="buttons">
                <Button
                text = 'Follow'
                link = '#' 
                className= 'custon'
                >
                </Button>
                <Button 
                text= 'Sponsor'
                icon = {<Icon
                name="heart"
                size = {24}
                color = "transparent"
                stroke = "var(--pink)"
                />}
                >  
                </Button>
            </div>
            <p className='bio info'>
                {bio}
            </p>
            <p className='followers info'>
               <Icon
               name = "user"
               size = {24}
               color = "transparent"
               stroke = "var(--white)"
               /> {followers} <span> Followers</span> • {following} <span>Following</span>•
            </p>
            <p className='location info'>
                <Icon
                name = "location"
                color = "transparent"
                stroke = "var(--white)"
                />
                {location}</p>
            <a className= 'info' href='https://www.linkedin.com/in/gabrielarojasroque/' target='_blank' rel='noreferrer'>
                <Icon
                name = "link"
                color = "transparent"
                stroke = "var(--white)"
                />
                {blog}
            </a>
            <a className= 'info' href='https://twitter.com/Gabriel78383636' target='_blank' rel='noreferrer'>
                <Icon
                name= "twitter"
                color = "transparent"
                stroke = "var(--white)"
                />
                {twitter_username}
            </a>
        </ProfileStyled>
    )
}

export default Profile
