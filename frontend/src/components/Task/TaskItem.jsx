// Importa as bibliotecas.
import React, { useEffect, useState } from "react";

// Importa os componentes.
import DeleteButton from "../Button/DeleteButton";
import Checkbox from "../Input/Checkbox";
import EditButton from "../Button/EditButton";
import Input from "../Input/Input";

// Importa as actions do redux.
import { useDispatch } from "react-redux";
import { fetchPutTask } from "../../store/putTask";

const TaskItem = ({ id, title, deleteTask, status }) => {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "concluído") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [status]);

  const validateInput = () => {
    return inputValue.trim() === "" ? setError(true) : setError(false);
  };

  const updateTask = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      dispatch(fetchPutTask({ id, title, status: "concluído" }));
    } else {
      dispatch(fetchPutTask({ id, title, status: "pendente" }));
    }
  };

  const editTask = () => {
    setInputValue(title);
    setIsEditing(!isEditing);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);

    if (error) {
      setError(false);
    }
  };

  const sendTask = (e) => {
    e.preventDefault();

    if (validateInput()) return;

    dispatch(fetchPutTask({ id, title: inputValue, status }));
  };

  return (
    <li
      className="flex items-center bg-gray-500 border border-gray-400 p-4 rounded-lg shadow-md gap-4"
      key={id}
    >
      
      <Checkbox
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        id={id}
        onChange={updateTask}
      />

      {isEditing ? (
        <form className="flex w-full" onSubmit={sendTask}>
          <Input
            className="w-full bg-gray-400 rounded-s-md text-sm text-gray-100 data-[error=true]:border-danger border border-gray-400 outline-none focus:border-gray-300 hover:border-gray-300 transition-colors duration-200 ease-in-out border-r-0 h-5"
            placeholder="Digite aqui..."
            value={inputValue}
            onChange={handleInput}
            error={error}
          />
          <button className="bg-blue-dark text-gray-100 text-sm px-1 rounded-r-md hover:bg-blue font-bold transition-colors duration-200 ease-in-out">
            Atualizar
          </button>
        </form>
      ) : (
        <p
          className={`break-all text-sm text-gray-100 first-letter:capitalize w-full ${
            status === "concluído" && "line-through text-gray-300"
          }`}
        >
          {title}
        </p>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <>
            
            <EditButton onClick={editTask} isClose={true} />
          </>
        ) : (
          <>
            <EditButton onClick={editTask} />
          </>
        )}

        
        <DeleteButton onClick={() => deleteTask(id)} />
      </div>
    </li>
  );
};

export default TaskItem;