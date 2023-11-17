import { useState } from "react";

const useDropDown = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const toggleMenu1 = () => {
    setIsOpen1(!isOpen1);
    
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const toggleMenu2 = () => {
    setIsOpen2(!isOpen2);
    

  };

  const [isOpen3, setIsOpen3] = useState(false);
  const toggleMenu3 = () => {
    setIsOpen3(!isOpen3);
    
  };

  return [isOpen1, isOpen2, isOpen3, toggleMenu1, toggleMenu2, toggleMenu3];
};

export default useDropDown;
