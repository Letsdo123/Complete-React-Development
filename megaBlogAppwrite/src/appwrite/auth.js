import { Client, Account, ID } from "appwrite";
import config from "../config/config";
import {toast} from 'react-toastify'

export class AuthService {
    // properties
    client = new Client()
    account

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }
    // Methods

    // 1.For Signup
    async createUser({ email, password, name }) {
        try {
            const response = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if (response) {
                // do login
                // by calling another method
                return this.Login({email,password});
            }
            else {
                return response;
            }
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }
    // 2.Login
    async Login({email,password}){
        try {
            const response = await this.account.createEmailSession(email,password);
            return response;
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
        return null;
    }
    // 3.getCurrentUser
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
           console.log("Appwrite service:: error",error); 
        }
        return null;
    }
    // 4.Logout
    async Logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite logout error :: error",error);
        }
    }
}

export const authService = new AuthService();
// export default authService