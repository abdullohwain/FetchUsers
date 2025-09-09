import { useEffect, useRef, useState } from 'react'
import useGetData from './hooks/useGetData';


function App(){
  const {error, data, loading} = useGetData();

  if(loading) {
    return <div>Loading...</div>
  }

  console.log(data);

  return ( 
    <div>
      <h1>App component</h1>

      <ul>
        {data &&
          data.map((user)=> {
            return <li key={user.id}>{user.name}</li>
          })}
      </ul>
    </div>
  );
}

export default App;
