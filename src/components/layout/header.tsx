import React from 'react';
import { useActiveAuthProvider, useGetIdentity } from '@refinedev/core';
import { Avatar, Layout as AntdLayout, Space, Typography } from 'antd';
import type { RefineLayoutHeaderProps } from '@refinedev/antd';

const { Text } = Typography;

export const Header: React.FC<RefineLayoutHeaderProps> = () => {
  const authProvider = useActiveAuthProvider();
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  });

  const shouldRenderHeader = user && (user.name || user.avatar);

  return shouldRenderHeader ? (
    <AntdLayout.Header
      style={{
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '0px 24px',
        height: '64px',
      }}>
      <Space style={{ marginLeft: '8px' }}>
        {user?.name && (
          <Text style={{ color: '#000' }} strong>
            {user.name}
          </Text>
        )}
        {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
      </Space>
    </AntdLayout.Header>
  ) : null;
};
