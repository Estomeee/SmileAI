import { AspectRatio, Button, Caption, Card, Div, IconButton, Spacing, Spinner, Text } from "@vkontakte/vkui";
import { FC, useState } from "react";
import classes from './ProductItem.module.css'
import { Icon20ShoppingCartOutline } from '@vkontakte/icons';
import { Icon28MarketAddBadgeOutline } from '@vkontakte/icons';
import { Icon24Market } from '@vkontakte/icons';
import { IProduct } from "../../api/requests/Store.requests";

interface Props {
    width?: string
    product: IProduct
    labalBtn?: string
    onClickItem?: (id: number) => void
    isAdded?: boolean
    onClickBtn?: (id: IProduct) => Promise<void>
}

const ProductItem: FC<Props> = ({ product, onClickItem, onClickBtn, isAdded = false, width, labalBtn }) => {

    const [load, setLoad] = useState<boolean>(false)

    return (
        <Card className={classes.cont} style={{ width: width ? width : '100%' }}>
            <AspectRatio ratio={1 / 1}>
                <img className={classes.img} src={product.image_url} alt="" />
            </AspectRatio>
            <div style={{ overflow: "hidden", marginBottom: 8 }}>
                <Text weight="1" className={classes.price}>{product.price} P</Text>
                <Caption className={classes.name} >{product.name}</Caption>
            </div>

            {labalBtn &&
                <Button
                    stretched
                    disabled={isAdded}
                    onClick={onClickBtn && (() => {
                        setLoad(true)
                        onClickBtn(product).then(() => {
                            console.log(';;')
                            setLoad(false)
                        })
                    })}
                    mode="secondary">{load ? <Spinner /> : labalBtn}</Button>}

        </Card>
    )
}

export default ProductItem