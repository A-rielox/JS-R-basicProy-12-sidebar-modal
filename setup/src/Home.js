import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {
   const { openSidebar, openModal } = useGlobalContext();

   return (
      <main>
         <button className="sidebar-toggle" onClick={openSidebar}>
            <FaBars />
         </button>

         <button className="btn" onClick={openModal}>
            show modal
         </button>
      </main>
   );
};

export default Home;

/* SIN CUSTOM HOOK

import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';

const Home = () => {
   const data = useContext(AppContext);
   console.log(data);

   return (
      <main>
         <button className="sidebar-toggle">
            <FaBars />
         </button>

         <button className="btn">show modal</button>
      </main>
   );
};

export default Home;

*/
