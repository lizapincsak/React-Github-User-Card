import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.img`
    width: 90%;
    height: 70%;
`

const UserCard = props => {
    return(
        <div className={props.main ? "main" : ''}>
            <h2>{props.user.login} Information</h2>
            <CardStyled src={props.user.avatar_url}/>
            <p>Location:{props.user.location}</p>
            <p>Come visit my page!</p>
            <a href={props.user.html_url}>Github</a>

        </div>
    )
}

export default UserCard;