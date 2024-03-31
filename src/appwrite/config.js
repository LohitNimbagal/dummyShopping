import envVariables from '../envVariables/envVariables'
import { Client, ID, Databases, Storage, Permission, Role } from 'appwrite';
import authService from './auth';

export class Service {

    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(envVariables.appwriteUrl)
            .setProject(envVariables.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createItem(product) {
        return new Promise(async (resolve, reject) => {
            try {
                const {
                    brand,
                    category,
                    description,
                    discountPercentage,
                    id,
                    images,
                    price,
                    rating,
                    stock,
                    thumbnail,
                    title
                } = product;

                const userData = await authService.getCurrentUser();

                const response = await service.listItems();
                const isAlreadyAdded = response.documents.some(item => item.id === id);

                if (isAlreadyAdded) {
                    resolve(null); // Resolve with null if the item is already present
                    return;
                }

                const addedProduct = await this.databases.createDocument(
                    envVariables.appwriteDatabaseId,
                    envVariables.appwriteCollectionId,
                    ID.unique(),
                    {
                        brand,
                        category,
                        description,
                        discountPercentage,
                        id,
                        images,
                        price,
                        rating,
                        stock,
                        thumbnail,
                        title
                    },
                    [
                        Permission.read(Role.user(userData.$id)),           // User can view this document
                        Permission.update(Role.user(userData.$id)),         // Writers can update this document 
                        Permission.delete(Role.user(userData.$id)),         // User 5c1f88b42259e can delete this document
                    ]
                );

                resolve(addedProduct); // Resolve with the added product
            } catch (error) {
                console.log("Appwrite service :: createItem :: error", error);
                reject(error); // Reject with the error
            }
        });
    }

    async deleteItem(id) {
        try {
            await this.databases.deleteDocument(
                envVariables.appwriteDatabaseId,
                envVariables.appwriteCollectionId,
                id
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteItem :: error", error);
            return false
        }
    }

    async listItems() {

        try {
            return await this.databases.listDocuments(
                envVariables.appwriteDatabaseId,
                envVariables.appwriteCollectionId
            )
        } catch (error) {
            console.log("Appwrite service :: listItems :: error", error);
        }
    }

    async addItems(products) {
        await Promise.all(products?.map(async (product) => {
            const { id, title, price } = product.item;
            try {
                return await service.createItem({ id, title, price });
            } catch (error) {
                console.log("Appwrite service :: addItems :: error", error);
            }
        }));
    }


}

const service = new Service

export default service;