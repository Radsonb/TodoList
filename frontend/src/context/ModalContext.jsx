import React, { createContext, useContext, useState} from 'react';

const ModalContext = createContext(null);

export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModal deve estar dentro do ModalContextProvider");
    }

    return context;
};

export const ModalContextProvider = ({ children }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [taskIdToDelete, setTaskIdToDelete] = useState("");


    return(
        <ModalContext.Provider
            value={{ isOpenModal, setIsOpenModal, taskIdToDelete, setTaskIdToDelete}}
        >
            { children }
        </ModalContext.Provider>
    );
}