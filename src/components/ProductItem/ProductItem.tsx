import { AspectRatio, Button, Caption, Card, Div, IconButton, Spacing, Text } from "@vkontakte/vkui";
import { FC } from "react";
import classes from './ProductItem.module.css'
import { Icon20ShoppingCartOutline } from '@vkontakte/icons';
import { Icon28MarketAddBadgeOutline } from '@vkontakte/icons';
import { Icon24Market } from '@vkontakte/icons';

interface Props {
    id: number
    imgLink: string
    price: number | string
    name: string
    onClickItem?: (id: number) => void
    isAdded?: boolean
    onClickBtn?: (id: number) => void
}

const ProductItem: FC<Props> = ({ id, imgLink, name, onClickItem, onClickBtn, price, isAdded = false }) => {

    return (
        <Card className={classes.cont}>
            <AspectRatio ratio={1 / 1}>
                <img className={classes.img} src={imgLink} alt="" />
            </AspectRatio>
            <div style={{ overflow: "hidden", marginBottom: 8}}>
                <Text weight="1" className={classes.price}>{price} P</Text>
                <Caption>{name}</Caption>
            </div>
            
            <Button stretched disabled={isAdded} onClick={onClickBtn && (() => onClickBtn(id))} mode="secondary">В корзину</Button>
            
        </Card>
    )
}

export default ProductItem