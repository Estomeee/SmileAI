import { FC, useState, useEffect } from "react";
import { Group as GroupVK, Button, Spinner, Card, Text, Caption, Div, Group, CardGrid } from "@vkontakte/vkui";

import Category from "../../components/Category/Category";
import FixedDownBtns from "../../components/FixedDownBtns/FixedDownBtns";
import PanelTemplate from "../PanelTemplate";
import { getCategories, getProducts, ICategory, initStore, IProduct } from "../../api/requests/Store.requests";
import { addToBucket } from "../../api/requests/Bucket.requets";
import { panels } from "../../App";
import { getTariffs, ITariff } from "../../api/requests/Tariff.requst";
import ProductItem from "../../components/ProductItem/ProductItem";
import TariffItem from "../../components/TariffItem/TariffIndex";
import MainActionBlock from "../../components/MainActionBlock/MainActionBlock";
import BigNumber from "../../components/BigNumber/BigNumber";
import CustomCard from "../../components/CustomCard/CustomCard";
import VerticalList from "../../components/VerticalList/VerticalList";

interface IPanel {
    id: string
    setPanel: any
    onError: any
    tariff: ITariff
    setCurTariff: any
    setModal: any
}




const PanelCurTariffs: FC<IPanel> = ({ id, tariff, setPanel, onError, setCurTariff, setModal }) => {

    const [tariffs, setTariffs] = useState<ITariff[]>([])

    useEffect(() => {
        getTariffs().then((response) => {
            if (response) setTariffs(response)
            else onError()
        })
    }, [])



    return (
        <PanelTemplate id={id} header="Тарифы" onClickBack={() => setCurTariff(null)}>
            <MainActionBlock
                content={
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <BigNumber number={tariff.price} text="Рублей в месяц"></BigNumber>
                        <BigNumber number={tariff.features.length} text="Преимуществ"></BigNumber>
                    </div>
                }
                buttons={[
                    { stretched: true, children: 'Подключить тариф', onClick: () => setModal('ModalEmpty') },
                ]} />



            <Group>


                <CardGrid size="l" spaced>


                    <CustomCard header="В тариф входит">
                        <VerticalList list={tariff.features}></VerticalList>
                    </CustomCard>
                </CardGrid>
            </Group>




        </PanelTemplate>
    )
}

export default PanelCurTariffs