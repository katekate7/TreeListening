// src/pages/Modules.tsx
import React from 'react';
import {useGetModulesQuery} from '../../api/endpoints/modules';

const Modules: React.FC = () => {
  const { data, isLoading } = useGetModulesQuery()

    if (isLoading) return <p>Is Loading ...</p>
  console.log(data);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Modules</h1>
      <p className="mt-4 text-lg">More info</p>
    </div>
  );
};

export default Modules;