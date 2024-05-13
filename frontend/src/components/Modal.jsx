import React, { useEffect } from "react";
import { useModal } from "../context/ModalContext";
import { useDispatch } from "react-redux";
import { fetchDeleteTask } from "../store/deleteTask";

const Modal = () => {
  const { isOpenModal, setIsOpenModal, taskIdToDelete } = useModal();

  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(fetchDeleteTask(taskIdToDelete));
    setIsOpenModal(false);
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenModal]);

  return (
    <div
      className={`fixed w-screen h-screen bg-transparent flex justify-center items-center opacity-100 visible duration-[1.2s] z-50 font-Inter ${
        isOpenModal ? "" : "invisible"
      }`}
      onClick={() => setIsOpenModal(false)}
    >
      <div
        className={`bg-gray-600 relative flex p-4 rounded-xl max-w-[90vw] ${
          isOpenModal ? "animate-bottom" : "animate-top"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-gray-100 p-1 md:max-w-[28.125rem]">
          <h1 className="text-2xl font-bold">Janela de confirmação</h1>

          <p className="my-4">
            Você está prestes a deletar uma tarefa. Tem certeza que deseja fazer
            isso?
          </p>

          <div className="flex flex-wrap md:flex-nowrap gap-2">
            <button
              className="py-2 bg-success text-white rounded-lg hover:bg-red-600 transition-colors duration-300 w-full font-bold hover:opacity-80"
              onClick={handleConfirm}
            >
              Sim
            </button>
            <button
              className="py-2 bg-danger text-white rounded-lg transition-colors duration-300 w-full font-bold hover:opacity-80"
              onClick={handleCancel}
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;