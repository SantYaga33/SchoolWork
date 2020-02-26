import React from 'react';
import Main from "./Main/Main";

const App= (props)=> {
  return (
    <Main state={props.state}/>
  );
};

export default App;
