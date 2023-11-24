import { AspectRatio, Button, Caption, Card, Div, IconButton, Spacing, Text } from "@vkontakte/vkui";
import { FC } from "react";
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
    onClickBtn?: (id: IProduct) => void
}

const ProductItem: FC<Props> = ({ product, onClickItem, onClickBtn, isAdded = false, width, labalBtn }) => {

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
                    onClick={onClickBtn && (() =>
                        onClickBtn({
                            id: product.id,
                            name: product.name,
                            image_url: product.image_url,
                            price: product.price
                        }))}
                    mode="secondary">{labalBtn}</Button>}

        </Card>
    )
}

export default ProductItem