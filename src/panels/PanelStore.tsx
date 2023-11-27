import { FC, useState, useEffect } from "react";
import { Group as GroupVK, Button, Spinner } from "@vkontakte/vkui";

import Category from "../components/Category/Category";
import FixedDownBtns from "../components/FixedDownBtns/FixedDownBtns";
import PanelTemplate from "./PanelTemplate";
import { getCategories, getProducts, ICategory, initStore, IProduct } from "../api/requests/Store.requests";
import { addToBucket } from "../api/requests/Bucket.requets";
import { panels } from "../App";

interface IPanel {
    id: string
    setPanel: any
    bucket: { id: number, products: IProduct[] }
    setBucket: React.Dispatch<React.SetStateAction<{
        id: number;
        products: IProduct[];
    }>>
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
    setProductsByCategories,
}) => {

    const names: { [key: string]: string } = {
        Toothbrush: 'Зубные щётки',
        Toothpaste: 'Зубные пасты',
        Other: 'Другое'
    }

    useEffect(() => {
        if (categories.length > 0 && categories.length > 0) return
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
        return addToBucket(bucket.id, product.id).then((ans) => {
            if (ans)
                setBucket({ id: bucket.id, products: [...bucket.products, product] })
            else console.log('Не добалвен');

        }
        )

    }

    return (
        <PanelTemplate id={id} header="Магазин" onClickBack={() => setPanel(panels.main)}>
            <GroupVK style={{ marginBottom: 100 }}>
                {productsByCategories.length <= 0 ?
                    <Spinner size="medium" style={{ margin: '20px 0' }} /> :

                    productsByCategories.map((item) => {

                        return (
                            <Category
                                key={item.nameCategory}
                                bucket={bucket.products}
                                nameCategory={names[item.nameCategory]}
                                products={item.products}
                                onClickBtn={onClickAdd}
                                onClickItem={(id) => console.log(id)}
                            />
                        )
                    })}
            </GroupVK>

            <FixedDownBtns btns={[
                (<Button
                    key={1}
                    size="m"
                    stretched
                    mode="secondary"
                    onClick={() => setPanel(panels.bucket)}>
                    {'Корзина(' + bucket.products.length + ')'}
                </Button>)
            ]}>
            </FixedDownBtns>
        </PanelTemplate>
    )
}

export default PanelStore