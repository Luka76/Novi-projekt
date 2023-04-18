import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useLocalStorage } from './useLocalStorage'


export const useUser = () => {
    const {user, setUser } = useContext(AuthContext);
    const {setItem} = useLocalStorage();

    const addUser = () => {
        setUser(user);
        setItem('user', JSON.stringify(user));
    }

    const removeUser = () => {
        setUser(null);
        setItem('user', '');
    };

    //somewhere in here goes the logic for login and logout with bearer token

    // return { user, login, logout}
    return { user, addUser, removeUser}
}
