import React, { FC, useState } from "react";
import bridge from "@vkontakte/vk-bridge";
import { useAdaptivityWithJSMediaQueries, CardScroll, Group as GroupVK, Separator, Panel, PanelHeader, List, Div, Avatar, Title, Text, CardGrid, Card, Button, ButtonGroup, Header, Cell, Spacing } from "@vkontakte/vkui";
import UserInfo from "../components/UserInfo/UserInfo";
import MainButtonGroup from "../components/MainButtonGroup/MainButtonGroup";
import CustomChart from "../components/CustomChart/CustomChart";
import CustomCard from "../components/CustomCard/CustomCard";
import VerticalList from "../components/VerticalList/VerticalList";
import HintCard from "../components/HintCard/HintCard";
import Group from "../components/Group/Group";
import MyChart from "../components/CustomChart/MyChart/MyChart";
import MainActionBlock from "../components/MainActionBlock/MainActionBlock";
import PanelTemplate from "./PanelTemplate";


interface panel {
    id: string
    setPanel: any
}

const PanelMain: FC<panel> = ({ id, setPanel }) => {
    const { isDesktop } = useAdaptivityWithJSMediaQueries()

    const pat = [{ key: 0, val: 'Кариес' }, { key: 1, val: 'Проблемы с дёснаснами' }, { key: 2, val: 'Скол' }, { key: 3, val: 'Что-то ещё' }, { key: 4, val: 'А? 5' }]
    const hints = [
        { key: 0, title: "Чистите зубы чаще", description: "Чистить зыбу надо каждый день по 1444 раза, а то выпадут нахуй!" },
        { key: 1, title: "Чистите зубы чаще", description: "Чистить зыбу надо каждый день по 1444 раза, а то выпадут нахуй!" },
        { key: 2, title: "Чистите зубы чаще", description: "Чистить зыбу надо каждый день по 1444 раза, а то выпадут нахуй!" },
        { key: 3, title: "Чистите зубы чаще", description: "Чистить зыбу надо каждый день по 1444 раза, а то выпадут нахуй!" },
        { key: 4, title: "Чистите зубы чаще", description: "Чистить зыбу надо каждый день по 1444 раза, а то выпадут нахуй!" }]


    const sizeData = 25

    let dataset: { x: string, y: number }[] = []
    for (let i = 0; i < sizeData; i++) {
        dataset.push({
            x: i.toString() + " ноября 2023",
            y: 60 + i * 10
        })
    }

    let dataset2: { x: string, y: number }[] = []
    for (let i = 0; i < 40; i++) {
        dataset2.push({
            x: i.toString() + " ноября 2023",
            y: 100
        })
    }

    return (
        <PanelTemplate id={id} header="Улыбнись AI">
            {/* <UserInfo></UserInfo>
                    <MainButtonGroup setPanel={setPanel}></MainButtonGroup> */}

            <MainActionBlock
                content={
                    <UserInfo></UserInfo>
                }
                buttons={[
                    { onClick: () => setPanel('diagnostics'), stretched: true, children: 'Провести диагностику' },
                    { onClick: () => setPanel('store'), stretched: true, children: 'Магазин', appearance: "neutral" },
                    { onClick: () => setPanel('bucket'), stretched: true, children: 'Корзина', appearance: "neutral" },
                ]} />

            <Group header={"Статистика"}>
                <CardGrid size="l" spaced>
                    <CustomCard header="Сосотояние вашей улыбки">
                        <Div>
                            {isDesktop ? <MyChart height={80} dataset={dataset2} /> :
                                <MyChart height={80} dataset={dataset} />}
                        </Div>
                    </CustomCard>

                    <CustomCard header="Патологии">
                        <VerticalList list={pat}></VerticalList>
                    </CustomCard>
                </CardGrid>
            </Group>

            <Group header={"Рекомендации"}>
                <CardScroll size={false} withSpaces>
                    {
                        hints.map((hint) => {
                            return (
                                <HintCard title={hint.title} description={hint.description}></HintCard>
                            )
                        })
                    }
                </CardScroll>
            </Group>
        </PanelTemplate>
    )

}

export default PanelMain