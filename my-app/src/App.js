import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import UserCard from './components/UserCard';

const DivWrapper = styled.div`
    text-align: center;
    cursor: pointer;
    background-color: ${(props) => props.theme.black};
    width: 100%;
    height: 100%;
    padding: 4%; 
    color: ${(props) => props.theme.secondaryColor};

`
const DivFlex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const CardWrapper = styled.div`
    text-align: center;
    cursor: pointer;
    /* background-color: ${(props) => props.theme.primaryColor};
    width: 25%;
    height: 80%; */
    padding: 0;
    font-size: 1em;
    /* color: ${(props) => props.theme.black}; */
    display: flex;
    flex-wrap: wrap;
    
    flex-direction: row; 
    justify-content: center; 
`


class App extends React.Component{
        state = {
            mainUser: {
                login:'',
                html_url:"",
                avatar_url: '',
                location: '',
            },
            followers: []
        }
    
    componentDidMount(){
        axios
        .get(`https://api.github.com/users/lizapincsak`)
        .then((res)=> {
            this.setState({
                ...this.state,
                mainUser: {
                    login: res.data.login,
                    html_url: res.data.html_url,
                    avatar_url: res.data.avatar_url,
                    location: res.data.location,
                }
            })
        })
        .catch((err)=> {
            console.log(err)
        })
        axios
        .get(`https://api.github.com/users/lizapincsak/followers`)
        .then((res)=> {
            this.setState({
                ...this.state, 
                followers: res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return(
            <DivWrapper>
               <h1>Github Information</h1>
               <DivFlex>
                   <CardWrapper>
                <UserCard main user={this.state.mainUser}/> 
                
                {this.state.followers.map((follower)=>(
                    <UserCard user={follower}/>
                ))}
                </CardWrapper>
                </DivFlex>
            </DivWrapper>
        )
    }
}

export default App;