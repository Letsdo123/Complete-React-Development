import {Client, Databases, ID, Query, Storage} from "appwrite"
import config from "../config/config";
export class Service {
    client = new Client();
    databases
    bucket
    // constructor to create the databases
    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }
    // method to create the post
    // slug->document's id
    async createPost({title,slug,content,featureddImage,status,userId}){
        try {
            const post=await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureddImage,
                    status,
                    userId
                },
            )
            return post;
        } catch (error) {
            console.log("Appwrite create service :: createpost",error);
        }
    }
    // to update the post
    async updatePost(slug,{title,content,featureddImage,status}){
        try {
            const post=await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureddImage,
                    status
                },
            )
            return post;
        } catch (error) {
            console.log("Appwrite create service :: createpost",error);
        }
    }
    // to delete the post
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("Appwrite create service :: createpost",error);
            return false;
        }
    }
    // get one post
    async getPost(slug){
        try {
            await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("Appwrite create service :: createpost",error);
            return false;
        }
    }
    // get posts using quires
    async getPosts(queries=[
        Query.equal("status","active")
    ])
    {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Database queries error",error);
        }
    }

    // upload file
    async uploadFile(file)
    {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Error in file upload :: error",error);
            return false;
        }
    }
    // delete file
    async deleteFile(fileId)
    {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Error in file upload :: error",error);
            return false;
        }
    }
    // file preview
    getFilePreview(fileId)
    {
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service