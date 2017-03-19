import React, {PropTypes} from 'react';
import '../components/App.css';
import { Image, List, Button, Message } from 'semantic-ui-react';
import Loading from './loading';

const ToDos=(props)=>{
    return (
        <div>
        <Message
            negative={props.item.isCompleted?true:false}
            info={props.item.isCompleted?false:true}>
            <List.Item>
                <List.Content floated='right'>
                    <Button animated size='medium' onClick={(e)=>{
                                        e.preventDefault()
                                        props.onComplete(props.item, props.index);
                                    }}>
                        <Button.Content visible>/</Button.Content>
                          <Button.Content hidden>
                            Done
                        </Button.Content> 
                    </Button>
                    <Button animated size='medium' onClick={(e)=>{
                                        e.preventDefault()
                                        props.OnDelete(props.item, props.index);
                                    }}>
                        <Button.Content visible>X</Button.Content>
                          <Button.Content hidden>
                            Delete
                        </Button.Content> 
                    </Button>
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
