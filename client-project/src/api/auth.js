import { ENV } from "../utils/constants";
const {BASE_API, API_ROUTES} = ENV;

export class Auth{
    //http://localhost:3100/api/v1
    baseApi = BASE_API

    //http://localhost:3100/api/v1/auth/signin
    register = async(data)=> {
        const url = `${this.baseApi}/${API_ROUTES.AUTH}/signin`;
        console.log("url", url);
        const params={
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        };
        console.log("params", params);
        try{
            const response = await fetch(url, params);
            if(!response.ok){
                throw new Error(response.statusText)
            }
            const result = await response.json();
            console.log("result", result);
            return result;
        }catch(error){
            console.log("error", error);
            return null
        }
    };

    //http://localhost:3100/api/v1/auth/login
    login = async(data)=> {
        const url = `${this.baseApi}/${API_ROUTES.AUTH}/login`;
        console.log("url", url);
        const params={
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        };
        console.log("params", params);
        try{
            const response = await fetch(url, params);
            if(!response.ok){
                throw new Error(response.statusText)
            }
            const result = await response.json();
            if(result && result.access){
                this.setAccessToken(result.access);
            }
            return result;
        }catch(error){
            console.log("error", error);
            return null
        }
    };

    logout =() =>{
        localStorage.removeItem("access");
    }

    verifyToken = ()=>{
        
    }

    setAccessToken = (access) =>{
        localStorage.setItem("access", access);
    }

    getAccessToken = () =>{
        return localStorage.getItem("access");
    }
}