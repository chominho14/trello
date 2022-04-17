import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";

const Wrqpper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 10px;
`;

function App() {
  const [toDos, setTodos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    // setTodos((oldToDos) => {
    //   const toDosCopy = [...oldToDos];
    //   // 1.source.index에서 아이템을 삭제해준다.
    //   toDosCopy.splice(source.index, 1);
    //   // 2.destination.index로 아이템을 다시 돌려두기.
    //   toDosCopy.splice(destination?.index, 0, draggableId);
    //   return toDosCopy;
    // });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrqpper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrqpper>
    </DragDropContext>
  );
}

export default App;
