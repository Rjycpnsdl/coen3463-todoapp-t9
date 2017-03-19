import React, {PropTypes} from 'react';
import '../components/App.css';
import { Image, List, Button, Message, Icon } from 'semantic-ui-react';
import Loading from './loading';

const ToDos=(props)=>{
    return (
        <div>
        <Message
            negative={props.item.isCompleted?true:false}
            info={props.item.isCompleted?false:true}>
            <List.Item>
                <List.Content floated='right'>
                    <Icon 
                        link name='ban' 
                        onClick={(e)=>
                            {
                                e.preventDefault()
                                props.onComplete(props.item, props.index);
                            }
                        }
                    />
                    <Icon 
                        link name='close' 
                        visible onClick=
                            {(e)=>
                                {
                                    e.preventDefault()
                                    props.OnDelete(props.item, props.index);
                                }
                            }
                    />
                </List.Content>
              <List.Content> 
              <List.Header>  
              {props.item.name}
              <br/>
              <br/>
                </List.Header>
            </List.Content>
        </List.Item>
        </Message>
        </div> 
    );
}

ToDos.propTypes = {
    item: PropTypes.object.isRequired
    
}
export default ToDos;
