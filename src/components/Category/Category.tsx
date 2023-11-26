import { FC } from 'react'
import { Button, Card, CardScroll, Div, IconButton, Text } from '@vkontakte/vkui'
import ProductItem from '../ProductItem/ProductItem'
import Group from '../Group/Group'
import { IProduct } from '../../api/requests/Store.requests'
import { Icon24AddCircleOutline } from '@vkontakte/icons';

interface Props {
    nameCategory: string
    products: IProduct[]
    bucket: IProduct[]
    onClickItem?: ((id: number) => void) | undefined
    onClickBtn?: ((product: IProduct) => any) | undefined
}

const checkIsAdded = (bucket: IProduct[], product: IProduct) => {
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].id == product.id) return true
    }
    return false
}

const Category: FC<Props> = ({ nameCategory, products, bucket, onClickBtn, onClickItem }) => {

    return (
        <Group header={nameCategory}>
            <CardScroll size={false} withSpaces>
                {products.map((product) => {

                    return (
                        <ProductItem
                            key={product.id}
                            product={product}
                            labalBtn='В корзину'
                            onClickItem={onClickItem}
                            onClickBtn={onClickBtn}
                            isAdded={checkIsAdded(bucket, product)}
                            width='130px' />)
                })}
            </CardScroll>

        </Group >
    )
}

export default Category