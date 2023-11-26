import { FC, useState, useEffect } from "react";
import { Group as GroupVK, Button, Spinner, Card, Text, Caption, Div } from "@vkontakte/vkui";

import Category from "../components/Category/Category";
import FixedDownBtns from "../components/FixedDownBtns/FixedDownBtns";
import PanelTemplate from "./PanelTemplate";
import { getCategories, getProducts, ICategory, initStore, IProduct } from "../api/requests/Store.requests";
import { addToBucket } from "../api/requests/Bucket.requets";
import { panels } from "../App";
import { getTariffs, ITariff } from "../api/requests/Tariff.requst";
import ProductItem from "../components/ProductItem/ProductItem";
import TariffItem from "../components/TariffItem/TariffIndex";

interface IPanel {
    id: string
    setPanel: any
    onError: any
}


const PanelTariffs: FC<IPanel> = ({ id, setPanel, onError }) => {

    const [tariffs, setTariffs] = useState<ITariff[]>([])

    useEffect(() => {
        getTariffs().then((response) => {
            if (response) setTariffs(response)
            else onError()
        })
    }, [])



    return (
        <PanelTemplate id={id} header="Тарифы" onClickBack={() => setPanel(panels.main)}>
            <Div>
                <Text>Ваш тариф: {'Бесплатный'}</Text>
            </Div>
            <Div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {tariffs.length == 0 ? <Spinner /> :
                    tariffs.map((tariff, index) => {
                        return (
                            <TariffItem key={index} tariff={tariff} />
                        )
                    })
                }
            </Div>

        </PanelTemplate>
    )
}

export default PanelTariffs