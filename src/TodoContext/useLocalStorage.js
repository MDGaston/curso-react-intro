import React from "react";

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar curso de React", completed: false },
//   { text: "Llamar al medico", completed: true },
//   { text: "Llamar a la abuela", completed: true },
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));


function useLocalStorage(itemName, initialValue) {
    
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
  
          setLoading(false);
        }
        catch(error) {
          setLoading(false);
          setError(error);
        }
      }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    // const [item, setItem] = React.useState(parsedItem);
    
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {item, saveItem, loading, error};
}

export { useLocalStorage }