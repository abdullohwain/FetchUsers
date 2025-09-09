import { useEffect, useRef, useState } from 'react';
import useGetData from './hooks/useGetData';

function App() {
  const { error, data, loading } = useGetData();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray text-lg font-semibold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100 text-red font-medium">
        Error: {error.message}
      </div>
    );
  }

  console.log(data);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue mb-6">App Component</h1>

        <ul className="space-y-3">
          {data &&
            data.map((user) => {
              return (
                <li
                  key={user.id}
                  className="bg-gray p-4 rounded shadow hover:bg-gray-100 cursor-pointer  transition"
                >
                  {user.name}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
