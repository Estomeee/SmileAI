import { FC, useState, useEffect } from "react";
import { Group as GroupVK, Button, Spinner } from "@vkontakte/vkui";

import Category from "../components/Category/Category";
import FixedDownBtns from "../components/FixedDownBtns/FixedDownBtns";
import PanelTemplate from "./PanelTemplate";
import { getCategories, getProducts, ICategory, initStore, IProduct } from "../api/requests/Store.requests";

interface IPanel {
    id: string
    setPanel: any
    bucket: IProduct[]
    setBucket: React.Dispatch<React.SetStateAction<IProduct[]>>
    setCategories: React.Dispatch<React.SetStateAction<string[]>>
    setProductsByCategories: React.Dispatch<React.SetStateAction<ICategory[]>>
    categories: string[]
    productsByCategories: ICategory[]
}


const PanelStore: FC<IPanel> = ({
    id,
    setPanel,
    bucket,
    setBucket,
    categories,
    setCategories,
    productsByCategories,
    setProductsByCategories }) => {

    useEffect(() => {
        if (categories.length > 0 && categories.length > 0 ) return
        console.log('store');
        initStore().then(({ categories, catProducts }) => {
            setCategories(categories)
            setProductsByCategories(catProducts)
        })
    }, [])

    const checkIsAdded = (bucket: IProduct[], product: IProduct) => {
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].id == product.id) return true
        }
        return false
    }

    const onClickAdd = (product: IProduct) => {
        if (checkIsAdded(bucket, product)) return
        setBucket([...bucket, product])
    }

    return (
        <PanelTemplate id={id} header="Магазин" onClickBack={() => setPanel('main')}>
            <GroupVK style={{ marginBottom: 100 }}>
                {productsByCategories.length <= 0 ?
                    <Spinner size="medium" style={{ margin: '20px 0' }} /> :

                    productsByCategories.map((item) => {
                        return (
                            <Category
                                key={item.nameCategory}
                                bucket={bucket}
                                nameCategory={item.nameCategory}
                                products={item.products}
                                onClickBtn={(product: IProduct) => onClickAdd(product)}
                                onClickItem={(id) => console.log(id)}
                            />
                        )
                    })}
            </GroupVK>

            <FixedDownBtns btns={[
                (<Button
                    size="m"
                    stretched
                    mode="secondary"
                    onClick={() => setPanel('bucket')}>
                    {'Корзина(' + bucket.length + ')'}
                </Button>)
            ]}>
            </FixedDownBtns>
        </PanelTemplate>
    )
}

export default PanelStore