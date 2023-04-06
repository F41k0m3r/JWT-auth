import React, {FC, useContext} from 'react';
import {useForm} from 'react-hook-form';
import styles from './LoginForm.module.css';
import {Context} from '../../../main';
import {observer} from 'mobx-react-lite';
import {Link, useNavigate} from 'react-router-dom';

interface props {
}
type Inputs = {
    email:string,
    password:string
}
const LoginForm:FC<props> = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()
    const {store} = useContext(Context)
    const navigate = useNavigate()
    const onSubmit = (data: Inputs):void => {
        store.login(data.email, data.password)
        navigate('/users')
    }
    return (
        <div className={styles.wrap}>
            <form className={styles.form} onSubmit={handleSubmit(data=>onSubmit(data))}>
                <div className={styles.inputWrap}>
                    <h4 className={styles.subMessage}>email</h4>
                    <input
                        className={styles.input}
                        type='email'
                        placeholder={'example@gmail.com...'}
                        {...register('email', {
                            required:'This field is required'
                        })}/>
                    {errors.email && <h4 className={styles.error}>{errors.email.message}</h4>}
                </div>
                <div className={styles.inputWrap}>
                    <h4 className={styles.subMessage}>password</h4>
                    <input
                        className={styles.input}
                        type='password'
                        placeholder={'Your password...'}
                        {...register('password', {
                            required:'This field is required'
                        })}/>
                    {errors.password && <h4 className={styles.error}>{errors.password.message}</h4>}
                </div>
                <input
                    className={styles.submit}
                    type="submit"/>
                <h4 className={styles.subMessage}>Еще не зарегистрированы?
                    <Link to={"/auth/registration"} className={styles.link}>Зарегистрироватся</Link>
                </h4>
            </form>
        </div>
    );
};

export default observer(LoginForm);