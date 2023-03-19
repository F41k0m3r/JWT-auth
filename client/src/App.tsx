import styles from './App.module.css';
import React, {useContext, useEffect} from 'react';
import {Context} from './main';
import {observer} from 'mobx-react-lite';
import LoginForm from './components/auth/LoginForm/LoginForm';
import Loader from './components/ui/Loader/Loader';

const App = () => {
    const {store} = useContext(Context)
    useEffect(()=>{
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])
  return (
    <div className={styles.App}>
      <LoginForm/>
        {store.isLoading ? <Loader/> : <h2>users</h2>}
        <button onClick={()=>store.logout()}>dlwld</button>
    </div>
  )
}

export default observer(App);
