import React from 'react';


class UserForm extends React.Component{
    constructor(){
        super()
        this.state = {
            inputValues: ''
        }
    }

    handleChanges = (e) => {
        this.setState({
            inputValues: e.target.value
        })
    }

    render(){
        return(
            <form>
                <input 
                type="text"
                placeholder="search for friend"
                value={this.state.inputValues}
                onChange={this.handleChanges}
                />
                <button>Find</button>
            </form>
        )
    }
}

export default UserForm; 