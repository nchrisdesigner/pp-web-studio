'use client'
import React, { createContext, useState } from 'react';

// Create a Context for the openMenu state
const MenuContext = createContext();

// Create a provider component
export const MenuProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
