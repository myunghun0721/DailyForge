import React from 'react';
import styled from 'styled-components';
import { Draggable } from '@hello-pangea/dnd'

const Container = styled.div`
  // border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 8px;
  background-color: ${props => props.isDragging ? 'grey' : 'white'};
  color: ${props => props.isDragging ? 'white' : 'black'};
  cursor: pointer;
`;



export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id.toString()} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >

            {this.props.task.title}
            <br></br>
            {this.props.task.note}

          </Container>
        )}
      </Draggable>
    );
  }
}
