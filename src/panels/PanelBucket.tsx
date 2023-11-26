import { FC } from "react";
import {
    Group as GroupVK,
    List, Div, Button,
} from "@vkontakte/vkui";
import PanelTemplate from "./PanelTemplate";
import { IProduct } from "../api/requests/Store.requests";
import ProductItem from "../components/ProductItem/ProductItem";
import { createNewBucket, removeFromBucket } from "../api/requests/Bucket.requets";
import FixedDownBtns from "../components/FixedDownBtns/FixedDownBtns";
import { panels } from "../App";


interface Props {
    id: string
    setPanel: any
    bucket: { id: number, products: IProduct[] }
    vkID: number
    apiID: number
    setBucket: any
}



const PanelBucket: FC<Props> = ({ id, setPanel, bucket, vkID, setBucket, apiID }) => {

    const removeItem = (product: IProduct) => {
        return removeFromBucket(bucket.id, product.id).then((ans) => {
            if (ans) setBucket({ id: bucket.id, products: bucket.products.filter((item) => item.id != product.id) })
            else console.log('Не удалён');

        })
    }

    return (
        <PanelTemplate id={id} header="Коризна" onClickBack={() => setPanel(panels.main)}>
            <GroupVK>
                <Div>
                    <List style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {bucket.products.map((product) => {
                            console.log();

                            return (
                                <ProductItem
                                    key={product.id}
                                    product={product}
                                    width="calc( (100% - 10px) / 2)"
                                    labalBtn="Убрать"
                                    onClickBtn={removeItem}
                                />
                            )
                        })}
                    </List>
                </Div>
            </GroupVK>
            <FixedDownBtns btns={[
                (<Button
                    key={1}
                    size="m"
                    stretched
                    mode="primary"
                    onClick={() => createNewBucket(apiID).then((ans) => {
                        if (ans) setBucket({ id: ans.curent_cart_id, products: [] })
                        else console.log('Ошибка при создании новой корзины');

                    })}>
                    {'Оформить заказ'}
                </Button>)
            ]} />

        </PanelTemplate>
    )
}

export default PanelBucket