import React from 'react'
import MainLayout from '../../components/layout/MainLayout';
import { EditForm } from '../../components/form/Form';
import { useParams } from 'react-router-dom';

const UpdateBarang = () => {

  let params = useParams();

  return (
    <MainLayout title="Edit Barang">
      <div className="flex justify-center items-center w-full py-20">
        <EditForm title={`Edit Barang`} />  
      </div>
    </MainLayout>
  );
};

export default UpdateBarang