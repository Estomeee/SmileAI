import { FC } from "react";
import {
    useAdaptivityWithJSMediaQueries,
    Group as GroupVK,
    List, Div,
} from "@vkontakte/vkui";
import PanelTemplate from "./PanelTemplate";
import { IProduct } from "../api/requests/Store.requests";
import ProductItem from "../components/ProductItem/ProductItem";


interface Props {
    id: string
    setPanel: any
    bucket: IProduct[]
}

const PanelBucket: FC<Props> = ({ id, setPanel, bucket }) => {
    return (
        <PanelTemplate id={id} header="Коризна" onClickBack={() => setPanel('main')}>
            <GroupVK>
                <Div>
                    <List style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {bucket.map((product) => {
                            console.log(product);
                            return (
                                <ProductItem key={product.id} product={product} width="calc( (100% - 10px) / 2)" labalBtn="Убрать" />
                            )
                        })}
                    </List>
                </Div>
            </GroupVK>
        </PanelTemplate>
    )
}

export default PanelBucket