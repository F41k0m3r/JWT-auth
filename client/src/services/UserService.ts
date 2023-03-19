import {IUser} from '../models/IUser';
import {AxiosResponse} from 'axios';
import $api from '../http';


export class UserService {
    static fetchUsers (): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }
}