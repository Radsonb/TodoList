import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Input/Input'
import CreateButton from '../Button/CreateButton';
import Status from '../Status';
import TaskItem from './TaskItem';
import { fetchPostTask } from '../../store/postTask';
import { fetchGetTasks } from '../../store/getTasks';
import { useModal } from '../../context/ModalContext'

const Tasks = () => {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const { setIsOpenModal, setTaskIdToDelete } = useModal();

    const dispatch = useDispatch();

    const {
        data: getTasks,
        loading,
        error: errorGetTaks,
    } = useSelector((state) => state.getTasks)

    const { data: postData } = useSelector((state) => state.postTask);

    const { data: deleteData } = useSelector((state) => state.deleteTask);

    const { data: putData } = useSelector((state) => state.putTask);

    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = Array.isArray(getTasks)
        ? getTasks.slice(indexOfFirstItem, indexOfLastItem)
        : [];

    useEffect(() => {
        dispatch(fetchGetTasks());
    },[dispatch]);

    useEffect(() => {
        if (deleteData || postData || putData) {
            dispatch(fetchGetTasks());
        }
    }, [dispatch, deleteData, postData, putData]);

    const validateInput = () => {
        return inputValue.trim() === "" ? setError(true) : setError(false);
    }

    const handleInput = (event) => {
        setInputValue(event.target.value);

        if (error) {
            setError(false);
        }
    }

    const postTask = (event) => {
        event.preventDefault();

        if (validateInput()) return;

        dispatch(fetchPostTask(inputValue));

        setInputValue("");
    }

    return(
        <section className="max-w=[90vw] lg:max-w-[60vw] m-auto min-h-screen">
            <form
                className="inline-flex relative -top-7 w-full gap-2"
                onSubmit={postTask}
            >
                <Input 
                    name="task"
                    className={`p-4 rounded-lg placeholder-gray-300 text-gray-100 
                    bg-gray-500 border border-gray-700 outline-none focus:border-purple-dark
                    hover:border-purple-dark w-full data-[error=true]:border-danger
                    transition-colors duration-200 ease-in-out`}
                    value={inputValue}
                    onChange={handleInput}
                    error={error}
                    required
                />
                <CreateButton />
            </form>            

            <div className='py-9'>
                <Status tasks={getTasks}/>

                <ul>
                    {currentItems.map((task) => {
                        return (
                            <TaskItem 
                                key={task.id}
                                id={task.id}
                                title="Primeira Task"
                                status=""
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Tasks;