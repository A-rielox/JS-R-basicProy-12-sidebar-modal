import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openSidebar = () => {
      setIsSidebarOpen(true);
   };

   const closeSidebar = () => {
      setIsSidebarOpen(false);
   };

   const openModal = () => {
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
   };

   return (
      <AppContext.Provider
         value={{
            isSidebarOpen,
            isModalOpen,
            openModal,
            openSidebar,
            closeModal,
            closeSidebar,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

// con custom  hook, para no tener q importar useContext y AppContext en el componenete donde se use el context ( hago un custom-hook ), ya no seria necesario exportar "AppContext"
export const useGlobalContext = () => {
   return useContext(AppContext);
   // va a entregar todo lo q este en el AppProvider
};

export { AppContext, AppProvider };

// AppProvider --> va a envolver a index.js
