import React, { createContext, useContext, useState } from "react";
import Products from "./Products";

const ContextContainer = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const [cardAmount, setCardAmount] = useState(0);
  const [cardQuantity, setCardQuantity] = useState(1);
  const [clear, setClear] = useState(true);
  const [TotalCard, setTotalcard] = useState(false);
  const [inCard, setInCard] = useState([]);

  return (
    <ContextContainer.Provider
      value={{
        products,
        setProducts,
        cardQuantity,
        setCardQuantity,
        setCardAmount,
        cardAmount,
        clear,
        setClear,
        TotalCard,
        setTotalcard,
        inCard,
        setInCard,
      }}
    >
      {children}
    </ContextContainer.Provider>
  );
};

export const useUserContext = () => {
  return useContext(ContextContainer);
};
