import React from 'react';

export const DataContext = React.createContext({});

export const DataProvider = (props) => {
  const [items, setItems] = React.useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);

  return (
    <DataContext.Provider value={{ items, setItems }}>
      {props.children}
    </DataContext.Provider>
  );
};