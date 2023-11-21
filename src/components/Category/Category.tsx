import { FC } from 'react'
import { CardScroll, Text } from '@vkontakte/vkui'
import ProductItem from '../ProductItem/ProductItem'
import Group from '../Group/Group'

interface Props {
    nameCategory: string
    products: {
        id: number,
        name: string,
        price: string | number,
        imgLink: string,
        isAdded?: boolean,
    }[]
    bucket: number[]
    onClickItem?: ((id: number) => void) | undefined
    onClickBtn?: ((id: number) => void) | undefined
}

const Category: FC<Props> = ({ nameCategory, products, bucket, onClickBtn, onClickItem }) => {
    return (


        <Group header={nameCategory}>
            <CardScroll size={false} withSpaces>
                {products.map((product) => {

                    return (
                        <ProductItem
                            id={product.id}
                            imgLink={product.imgLink}
                            name={product.name}
                            price={product.price}
                            onClickItem={onClickItem}
                            onClickBtn={onClickBtn}
                            isAdded={bucket.includes(product.id)}
                        />
                    )
                })}
            </CardScroll>
        </Group >
    )
}

export default Category