import React, {PropTypes} from 'react';
import '../components/App.css';
import ToDos from '../components/ToDos.js';
import Loading from './loading';
import apiTODO from '../api/apiTODO';
import { Container } from 'semantic-ui-react'
import { Segment, Menu, Input, Form, List, Button, Label } from 'semantic-ui-react'
var moment = require('moment-timezone');

class Todo extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            isAdding: false
        }
        this.onAddTodo = this.onAddTodo.bind(this);
    }
    onAddTodo(e) {
        this.setState({isAdding:true});
        e.preventDefault();
        var lastState = this.props.items; //get last state of item
        let toDo = { //create a todo object to be saved
            name: this.refs.todo.value,
            user: this.props.user,
            createDate: moment().tz("Asia/Manila").format('LLL'),
        }
        this.setState({ //update items
            items :[...lastState,Object.assign({},toDo)]
        });
        apiTODO.onAddTodo(toDo).then(res=>{
            //this.props.set(todo);
            console.log(res.data.response);
            if(res.data.success){
                this.props.setStateItem([...lastState,Object.assign({},res.data.response)]);
                this.props.setOriginalItems();
                this.setState({isAdding:false});
                // alert("Todo added");
                // this.setState({isLoadingItem:false});
                return;
            }
            //this.setState({isLoadingItem:false});
            // toastr.error(res.data.response);
        }).catch(err=>{
            // toastr.error('Ooops! Try again');
            console.log(err);
        }); 
    }
    
    render(){
    return(
        <div className="App-section">
                <div className="App-header">      
                </div>
                {this.props.isLoading? 
                <Loading text="Please Wait" speed={300}/>
                :
                <Container>
                    <Segment className='user-container' color='teal'>
                        <Label as='a' color='blue' ribbon>Welcome {this.props.name} </Label>
                        <Button floated='right' color='grey' name='logout' onClick={this.props.onLogOut}>Logout</Button>
                    </Segment>
                    <Segment color='teal' className='menu-container'>
                        <div className="App-section">
                        <Menu vertical>
                          <Menu.Item name='All Task' active={this.props.activeItem === 'all'} onClick={this.props.todoAll} />
                          <Menu.Item style={{color: 'red'}} name='On-going' active={this.props.activeItem === 'open'} onClick={this.props.todoOpen} />
                          <Menu.Item style={{color: 'green'}}  name='Done' active={this.props.activeItem === 'completed'} onClick={this.props.todoCompleted} />
                          <Menu.Menu position='left'>
                          <Menu.Item name='Clear all done!' onClick={this.props.DelAllComplete} />
                          </Menu.Menu>
                        </Menu>
                        </div>
                    </Segment>
                    <Segment className='todo-container' color='teal'>
                        <Form>
                            <Form.Field>
                                <Input size="tiny">
                                    <input placeholder="What I want to do?.." ref="todo"/>
                                    <Button onClick={this.onAddTodo}>Add</Button>
                                </Input>
                            </Form.Field>
                        </Form>
                        
                        <Segment>
                            <div className="App-section">
                            {this.props.onUpdate? <Loading text="Just one second" speed={300}/>:
                            <div>{(this.props.originalitems - this.props.completedCount)=== 1?
                            <p>{this.props.originalitems - this.props.completedCount}/{this.props.originalitems} item left</p>:
                            <p>{this.props.originalitems - this.props.completedCount}/{this.props.originalitems} items left</p>
                            } 
                                {this.props.onUpdate? <Loading text="Loading" speed={300}/>:
                                <div>
                                <List verticalAlign='middle'>
                                {this.props.items.map((item, index)=>
                                    <ToDos key={index}
                                            item={item}
                                            index={index}
                                            onComplete={this.props.onComplete}
                                            OnDelete={this.props.OnDelete}/>
                                )}
                                </List>
                                </div>
                                }
                                </div>
                            }
                            </div>
                        </Segment>
                    </Segment>
                </Container>
                }
        </div>
    )
}
}

Todo.PropTypes = {
    onLogOut: PropTypes.func.isRequired,
    onAddTodo: PropTypes.func.isRequired,
    
}
export default Todo;
