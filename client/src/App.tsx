import styles from './App.module.css';
import React, {useContext, useEffect, useState} from 'react';
import {Context} from './main';
import {observer} from 'mobx-react-lite';
import LoginForm from './components/auth/LoginForm/LoginForm';
import Loader from './components/ui/Loader/Loader';
import Navbar from './components/navbar/Navbar';
import {Route, Router, Routes} from 'react-router-dom';
import RegisterForm from './components/auth/RegisterForm/RegisterForm';
import Users from './components/users/Users';
import {IUser} from './models/IUser';
import {UserService} from './services/UserService';


const App = () => {
    const {store} = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(()=>{
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])
    async function getUsers () {
        try {
            const response = await UserService.fetchUsers()
            setUsers(response.data)
        }catch (e:any) {
            console.log(e.response?.data?.message);
        }
    }
  return (
    <div className={styles.App}>
        <Navbar/>
        <Routes>
            <Route path={'/users'}  index element={<Users users={users} getUsers={getUsers}/>}></Route>
            <Route path={'/auth/login'} element={<LoginForm />}/>
            <Route path={'/auth/registration'} element={<RegisterForm/>}/>
            <Route path={'/auth/auth'} element={<LoginForm/>}/>
        </Routes>
    </div>
  )
}

export default observer(App);
