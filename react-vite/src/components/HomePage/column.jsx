import React from 'react';
import styled from 'styled-components';
import { Droppable } from '@hello-pangea/dnd'
import Task from './task';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #C2BBCE;
  padding: 10px 50px;
`;
const Title = styled.h3`
  padding: 10px;
  background-color: #36205D;
  font-weight: bold;
  color: white;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'lightgrey' : '#C2BBCE')};
  // background-color: #C2BBCE;
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TaskList
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}

             >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}
