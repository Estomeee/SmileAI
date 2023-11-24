import { AxiosError, AxiosResponse } from "axios"
import instance, { APIPoints } from "../instances/Main.instance"

export interface IProduct {
    id: number,
    name: string,
    price: number,
    image_url: string
}

export interface ICategory {
    nameCategory: string
    products: IProduct[]
}

export async function getCategories() {
    return await instance.get(APIPoints.categories)
        .then(function (response: AxiosResponse<string[]>) {
            return response.data

        })
        .catch(function (error: AxiosError): string[] {
            return []
        })
}

export async function getProducts(categories: string[], limit: number = 5, offset: number = 0) {
    let productsByCategories: ICategory[] = []

    for (let i = 0; i < categories.length; i++) {

        let products: IProduct[] = []

        await instance.get('products/vk/products', {
            params: {
                category: categories[i],
                limit: limit,
                offset: offset
            }
        })
            .then(function (response: AxiosResponse<IProduct[]>) { //any?
                console.log(categories[i]);
                
                for (let j = 0; j < response.data.length; j++) {
                    const product = response.data[j]
                    products.push({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image_url: product.image_url
                    });

                }
            })
            .catch(function (error: any) {
                console.log(error);
            })

        products.length > 0 && productsByCategories.push({ nameCategory: categories[i], products: Array.from(products) })
        products = []
    }

    return productsByCategories
}

export async function initStore(limitCategories: number = 5, limitProducts: number = 5) {
    const categories = await getCategories()
    console.log(categories);
    
    const lenCat = categories.length - 1
    const catProducts = await getProducts(categories.slice(1, (lenCat < limitCategories ? lenCat : limitCategories) + 1), limitProducts, 0) // 1 - потому что первая категория - all

    return { categories: categories, catProducts: catProducts }
}


//TODO рефактор с учётом новой идеи