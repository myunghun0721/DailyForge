import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "./HomePage.css"
import { thunkFetchAvatars } from "../../redux/avatars.js";
// import initialData from "./initial-data";
import Column from './column.jsx'
import { DragDropContext } from '@hello-pangea/dnd'
import styled from "styled-components";
import { thunkFetchDailies } from "../../redux/dailies.js";

function HomePage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const dailiesObj = useSelector(state => state.dailies.dailies)
  const dailies = Object.values(dailiesObj)
  const navigate = useNavigate()


  if (!sessionUser){
    console.log("==========================================================")
    navigate("/")
  }

  const Container = styled.div`
  display: flex;
  `;

  if (!dailies) return

  // Extract task ids for column-1
  const tasks = {};
  // Populate tasks object and taskIds array
  const taskIds = [];

  dailies.forEach(task => {
    tasks[task.id] = task;
    taskIds.push(task.id);
  });

  const initialData = {
    tasks: tasks,
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'My Dailies',
        taskIds: taskIds
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1'],
  }

  const [state, setState] = useState(initialData)

  useEffect(() => {
    dispatch(thunkFetchAvatars())
    dispatch(thunkFetchDailies())

  }, [dispatch, sessionUser])

  // user must logged in!!



  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    // If there's no destination, then there's nothing that we need to do as a result of this drag, so we can simply exit.
    if (!destination) {
      return;
    }

    // user drop the item back into the position that is started, so we don't need to do anything.
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // my daily order change
    // start dragging
    const start = state.columns[source.droppableId];
    // end dragging
    const finish = state.columns[destination.droppableId];

    if (start === finish) {

      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return
    }

    // // Moving from one list to another
    // const startTaskIds = Array.from(start.taskIds);
    // console.log("🚀 ~ onDragEnd ~ start:", start)
    // startTaskIds.splice(source.index, 1);
    // const newStart = {
    //   ...start,
    //   taskIds: startTaskIds,
    // };

    // const finishTaskIds = Array.from(finish.taskIds);
    // console.log("🚀 ~ onDragEnd ~ finish:", finish)
    // finishTaskIds.splice(destination.index, 0, draggableId);
    // const newFinish = {
    //   ...finish,
    //   taskIds: finishTaskIds,
    // };

    // const newState = {
    //   ...state,
    //   columns: {
    //     ...state.columns,
    //     [newStart.id]: newStart,
    //     [newFinish.id]: newFinish,
    //   },
    // };
    // setState(newState);
  }

  return (
    <>
      {state ?
        <DragDropContext onDragEnd={onDragEnd}>
          <Container>

            {state.columnOrder.map(columnId => {
              const column = state.columns[columnId];
              // console.log("🚀 ~ HomePage ~ column:", column)
              const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
              console.log("🚀 ~ HomePage ~ tasks:", tasks)



              return <Column key={column.id} column={column} tasks={tasks} />;
            })}
          </Container>
        </DragDropContext>
        : <div>loading</div>}
    </>
  );
}

export default HomePage;
