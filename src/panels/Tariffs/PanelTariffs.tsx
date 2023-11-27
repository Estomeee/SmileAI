import { FC, useState, useEffect } from "react";
import { Group as GroupVK, Button, Spinner, Card, Text, Caption, Div } from "@vkontakte/vkui";

import Category from "../../components/Category/Category";
import FixedDownBtns from "../../components/FixedDownBtns/FixedDownBtns";
import PanelTemplate from "../PanelTemplate";
import { getCategories, getProducts, ICategory, initStore, IProduct } from "../../api/requests/Store.requests";
import { addToBucket } from "../../api/requests/Bucket.requets";
import { panels } from "../../App";
import { getTariffs, ITariff } from "../../api/requests/Tariff.requst";
import ProductItem from "../../components/ProductItem/ProductItem";
import TariffItem from "../../components/TariffItem/TariffIndex";
import PanelCurTariffs from "./PanelCurTariff";
import PanelShowTariffs from "./PanelShowTariffs";

interface IPanel {
    id: string
    setPanel: any
    onError: any
}


const PanelTariffs: FC<IPanel> = ({ id, setPanel, onError }) => {

    const [tariffs, setTariffs] = useState<ITariff[]>([])

    const [curTariff, setCurTariff] = useState<ITariff | null>(null)

    useEffect(() => {
        getTariffs().then((response) => {
            if (response) setTariffs(response)
            else onError()
        })
    }, [])



    return (
        <>
            {curTariff ?
                <PanelCurTariffs id={panels.tarrifs} setPanel={setPanel} tariff={curTariff} onError={onError} setCurTariff={setCurTariff} /> :
                <PanelShowTariffs tariffs={tariffs} id={panels.tarrifs} setPanel={setPanel} onError={onError} setCurTariff={setCurTariff} />
            }
        </>
    )
}

export default PanelTariffs