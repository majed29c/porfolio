"use client";
import React, { createContext, useContext, useState } from "react";

// Define the context type
interface SelectedContextType {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context
const SelectedContext = createContext<SelectedContextType | undefined>(undefined);

// Create the provider
export const SelectedProvider = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState("Home");

  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedContext.Provider>
  );
};

// Custom hook to use the context
export const useSelected = () => {
  const context = useContext(SelectedContext);
  if (!context) {
    throw new Error("useSelected must be used within a SelectedProvider");
  }
  return context;
};