import Header from "./components/Header/Header";
import Tasks from "./components/Task/Tasks";
import Modal from './components/Modal';
import { ModalContextProvider } from './context/ModalContext';

const App = () => {
  return (
    <ModalContextProvider>
      <Modal />
      <Header />

      <main className='bg-gray-600 font-Inter'>
        <Tasks />
      </main>
    </ModalContextProvider>
  );
}


export default App;