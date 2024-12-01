//ModuleList.tsx
import React from 'react';
import { useGetModulesQuery } from '../../api/endpoints/modules';

interface Module {
  id: string;
  title: string;
  description: string;
}

const ModulesList: React.FC = () => {
  // Fetch modules from the API
  const { data: modules, isLoading, isError } = useGetModulesQuery({});

  // Conditional rendering for loading and error states
  if (isLoading) {
    return <div className="text-center text-blue-500">Loading modules...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Failed to load modules. Please try again later.</div>;
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {modules?.map((module: Module) => (
        <div key={module.id} className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500">
           <h2 className="text-xl font-semibold mb-2">{module.title}</h2>
          <p className="text-gray-700">{module.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ModulesList;