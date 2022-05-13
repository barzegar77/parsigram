import axios, { AxiosError, AxiosResponse } from "axios";
import { resolve } from "path/posix";
import { toast } from "react-toastify";
import { Toast } from "react-toastify/dist/components";
import { Activity } from "../models/activity";
import { store } from "../stores/store";

const sleep= (delay : number)=>{
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/'

axios.interceptors.response.use(async response => {
    await sleep(1000);
        return response;
},(error : AxiosError) =>
{
    const{data,status,config} = error.response!;
    switch(status){
        case 400:
            if(typeof data === 'string'){
                toast.error(data);
            }
        if(config.method === 'GET' && data.error.hasOwnProperty('id')){};
        if(data.errors){
            const modelStateErrors =[];
            for(const key in data.errors){
                if(data.errors[key]){
                    modelStateErrors.push(data.errors[key])
                }
            }
            throw modelStateErrors.flat();
        }else{
            toast.error(data);
        }
        break;
        case 401:
        toast.error('غیر مجاز');
        break;
        case 404:
            toast.error('یافت نشد');
            break;
            case 500:
            store.commonStore.setServerError(data);
            
            break;
    }
    return Promise.reject(error);
}
)

const responseBody = <T> (response : AxiosResponse<T>) => response.data;

const requests ={
    get :<T> (url: string) => axios.get<T>(url).then(responseBody),
    post : <T>(url: string, body: {}) => axios.post<T>(url,body).then(responseBody),
    put :<T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del :<T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Activities ={
    list:()  => requests.get<Activity[]>('Activities'),
    details:(id : string) => requests.get<Activity>(`Activities/${id}`),
    create : (activity: Activity) => axios.post<void>('Activities', activity),
    update : (activity : Activity) => axios.put<void>(`Activities/${activity.id}`, activity),
    delete : (id: string) => axios.delete<void>(`Activities/${id}`)
}

const agent={
    Activities
}

export default agent;