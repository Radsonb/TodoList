import React from 'react';

const Status = ({ tasks }) => {
    return (
        <div className='flex flex-wrap gap-4 justify-between items-center'>
            <div className='flex gap-2'>
                <h1 className='text-sm text-blue font-bold'>Tarefas criadas</h1>
                <span className='text-gray-200 bg-gray-400 rounded-full py-[0.125rem] px-2 text-xs font-bold'>
                    { tasks ? tasks.length : 0 }
                </span>
            </div>

            <div className='flex gap-2'>
                <h1 className='text-sm text-purple font-bold'>Concluídas</h1>
                <span className='text-gray-200 bg-gray-400 rounded-full py-[0.125rem] px-2 text-xs font-bold' >
                    0 de 0{/* {tasks.map((task) => task.status === "concluído" && 1).reduce((acc, curr) => acc + curr, 0)} de {tasks ? tasks.length : 0} */}
                </span>
            </div>
        </div>
    );
}

export default Status;