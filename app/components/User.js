import React, {Component,PropTypes} from 'react';
import '../components/App.css';
import Login from '../components/Login.js';
import Register from '../components/Register.js';
import { Segment, Button, Divider, Container, Menu, Input, Image, Grid } from 'semantic-ui-react'


class User extends Component {
    constructor(props,context) {
      super(props,context);
        this.state={
          activeItem: '',
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e, { name }){
        this.setState({ activeItem: name })
    }


    render(){
    return(
        <div className="App-size">
            <Segment inverted color = 'grey'>
                <Menu inverted pointing secondary>
                  <Menu.Item name='login' active={this.props.mode === 'login'} onClick={this.props.handleLogin}  />
                  <Menu.Item name='register' active={this.props.mode === 'register'} onClick={this.props.handleRegister} />
                  
                </Menu>
                {this.props.mode === 'login'?
                <Segment inverted>
                  <div className="App-section" >
                        <Login/>   
                    </div>
                </Segment>
                :
                <Segment inverted>
                    <div className="App-section" >                  
                        <Register />
                    </div>
                </Segment>
                }        
            </Segment>
            <div className='App-image'>
                <Image src='https://markappblog.files.wordpress.com/2015/11/mark_icon_circular_200.png?w=193' size='medium' shape='circular'/>
            </div>
            <div className='App-team'>
                <Image src='http://team9.net/wp-content/uploads/2016/07/black-logo.png' size='small'/>
            </div>
        </div>
    );
}
}

User.PropTypes = {
    login: PropTypes.bool.isRequired,
    switch: PropTypes.func.isRequired,
    handleRegister: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
}


User.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default User;
