import { IResourceComponentsProps } from '@refinedev/core';
import { AntdEditInferencer } from '@refinedev/inferencer/antd';
import React from 'react';

export const EditUsers: React.FC<IResourceComponentsProps> = () => {
  return <AntdEditInferencer />;
};
