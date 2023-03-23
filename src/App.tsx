import { Authenticated, GitHubBanner, Refine } from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';

import {
  AuthPage,
  ErrorComponent,
  Layout,
  notificationProvider,
} from '@refinedev/antd';
import '@refinedev/antd/dist/reset.css';

import routerBindings, {
  CatchAllNavigate,
  NavigateToResource,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import { dataProvider, liveProvider } from '@refinedev/supabase';
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from 'pages/categories';
import {
  ProductCreate,
  ProductEdit,
  ProductList,
  ProductShow,
} from 'pages/products';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { supabaseClient } from 'utility';
import authProvider from './authProvider';

import { ColorModeContextProvider } from './contexts/color-mode';
import { ThemedHeader } from 'components/themedLayout/header';
import { ThemedTitle } from 'components/themedLayout/title';
import { ThemedSider } from 'components/themedLayout/sider';
import { ThemedLayout } from 'components/themedLayout';
import { Header } from 'components/layout/header';
import { Sider } from 'components/layout/sider';
import { accessControlProvider } from 'accessControlProvider';
import {
  BarChartOutlined,
  DollarCircleOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

import { CgMicrosoft } from 'react-icons/cg';
import { CreateUser, EditUsers, ListUser, ShowUser } from 'pages/users';

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <Refine
            dataProvider={dataProvider(supabaseClient)}
            liveProvider={liveProvider(supabaseClient)}
            authProvider={authProvider}
            routerProvider={routerBindings}
            notificationProvider={notificationProvider}
            accessControlProvider={accessControlProvider}
            resources={[
              {
                name: 'roofmaster',
                list: '/roofmaster',
                create: '/roofmaster/create',
                edit: '/roofmaster/edit/:id',
                show: '/roofmaster/show/:id',
                meta: {
                  canDelete: true,
                },
                options: {
                  label: 'Roof Master',
                },
                icon: <HomeOutlined />,
              },
              {
                name: 'overview',
                list: '/overview',
                create: '/overview/create',
                edit: '/overview/edit/:id',
                show: '/overview/show/:id',
                meta: {
                  canDelete: true,
                },
                options: {
                  label: 'Overview',
                },
              },
              {
                name: 'costtracker',
                list: '/costtracker',
                create: '/costtracker/create',
                edit: '/costtracker/edit/:id',
                show: '/costtracker/show/:id',
                meta: {
                  canDelete: true,
                },
                options: {
                  label: 'Cost Tracker',
                },
                icon: <DollarCircleOutlined />,
              },
              {
                name: 'forecasttracker',
                list: '/forecasttracker',
                create: '/forecasttracker/create',
                edit: '/forecasttracker/edit/:id',
                show: '/forecasttracker/show/:id',
                meta: {
                  canDelete: true,
                },
                options: {
                  label: 'Forecast Tracker',
                },
                icon: <BarChartOutlined />,
              },
              {
                name: 'users',
                list: '/users',
                create: '/users/create',
                edit: '/users/edit/:id',
                show: '/users/show/:id',
                meta: {
                  canDelete: true,
                },
                options: {
                  label: 'Manage Users',
                },
                icon: <UsergroupAddOutlined />,
              },
            ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}>
            <Routes>
              <Route
                element={
                  <Authenticated fallback={<CatchAllNavigate to='/login' />}>
                    <Layout Header={ThemedHeader} Sider={ThemedSider}>
                      <Outlet />
                    </Layout>
                  </Authenticated>
                }>
                <Route
                  index
                  element={<NavigateToResource resource='products' />}
                />
                <Route path='/products'>
                  <Route index element={<ProductList />} />
                  <Route path='create' element={<ProductCreate />} />
                  <Route path='edit/:id' element={<ProductEdit />} />
                  <Route path='show/:id' element={<ProductShow />} />
                </Route>
                <Route path='/roofmaster'>
                  <Route index element={<CategoryList />} />
                  <Route path='create' element={<CategoryCreate />} />
                  <Route path='edit/:id' element={<CategoryEdit />} />
                  <Route path='show/:id' element={<CategoryShow />} />
                </Route>
                <Route path='/users'>
                  <Route index element={<ListUser />} />
                  <Route path='create' element={<CreateUser />} />
                  <Route path='edit/:id' element={<EditUsers />} />
                  <Route path='show/:id' element={<ShowUser />} />
                </Route>
              </Route>
              <Route
                element={
                  <Authenticated fallback={<Outlet />}>
                    <NavigateToResource />
                  </Authenticated>
                }>
                <Route
                  path='/login'
                  element={
                    <AuthPage
                      type='login'
                      formProps={{
                        initialValues: {
                          email: '',
                          password: 'refine-supabase',
                        },
                      }}
                      providers={[
                        {
                          name: 'azure',
                          icon: (
                            <CgMicrosoft
                              style={{
                                fontSize: '18px',
                                marginRight: '5px',
                              }}
                            />
                          ),
                          label: 'Sign in with Microsoft',
                        },
                      ]}
                    />
                  }
                />
                <Route
                  path='/register'
                  element={
                    <AuthPage
                      type='register'
                      formProps={{
                        initialValues: {
                          full_name: '',
                          username: '',
                          password: '',
                        },
                      }}
                    />
                  }
                />
              </Route>
              <Route
                element={
                  <Authenticated>
                    <Layout Header={Header}>
                      <Outlet />
                    </Layout>
                  </Authenticated>
                }>
                <Route path='*' element={<ErrorComponent />} />
              </Route>
            </Routes>

            <RefineKbar />
            <UnsavedChangesNotifier />
          </Refine>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
