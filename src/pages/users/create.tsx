import { IResourceComponentsProps } from '@refinedev/core';
import { AntdCreateInferencer } from '@refinedev/inferencer/antd';
import React from 'react';
import { supabaseClient } from 'utility';

export const CreateUser: React.FC<IResourceComponentsProps> = () => {
  const handleSubmit = async () => {
    const { data } = await supabaseClient.rpc('set_claim', {
      claim: 'role',
      uid: 'id1',
      value: 'admin',
    });
  };

  return <AntdCreateInferencer />;
};
