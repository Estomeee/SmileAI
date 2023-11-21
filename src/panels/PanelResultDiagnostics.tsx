import { FC, useState } from "react";
import {
    FixedLayout,
    Panel, PanelHeader, PanelHeaderBack,
    Div,
    Button, ButtonGroup, Spacing,
    Caption, CardGrid, CardScroll, Image, Card, Text
} from "@vkontakte/vkui";
import Group from "../components/Group/Group";
import VerticalList from "../components/VerticalList/VerticalList";
import CustomCard from "../components/CustomCard/CustomCard";
import HintCard from "../components/HintCard/HintCard";
import BigNumber from "../components/BigNumber/BigNumber";
import FixedDownBtns from "../components/FixedDownBtns/FixedDownBtns";
import MainActionBlock from "../components/MainActionBlock/MainActionBlock";
import PanelTemplate from "./PanelTemplate";

interface panel {
    id: string
    setPanel: any
}

const pat = [{ key: 0, val: 'Кариес' }, { key: 1, val: 'Проблемы с дёснаснами' }, { key: 2, val: 'Скол' }, { key: 3, val: 'Что-то ещё' }, { key: 4, val: 'А? 5' }]
const hints = [
    { key: 0, title: "Чистите зубы чаще", description: "Чистить зыбу надо каждый день по 1444 раза, а то выпадут нахуй!" },
    { key: 1, title: "Чистите зубы чаще", description: "Чистить зыбу надо каждый день по 1444 раза, а то выпадут нахуй!" },
    { key: 2, title: "Чистите зубы чаще", description: "Чистить зыбу надо каждый день по 1444 раза, а то выпадут нахуй!" },
    { key: 3, title: "Чистите зубы чаще", description: "Чистить зыбу надо каждый день по 1444 раза, а то выпадут нахуй!" },
    { key: 4, title: "Чистите зубы чаще", description: "Чистить зыбу надо каждый день по 1444 раза, а то выпадут нахуй!" }]


const PanelResultDiagnostics: FC<panel> = ({ id, setPanel }) => {

    return (
        <PanelTemplate id={id} header="Диагностика" onClickBack={() => setPanel('main')}>
            <MainActionBlock
                content={
                    <BigNumber number={89} text="Общая оценка"></BigNumber>
                }
                buttons={[
                    { stretched: true, children: 'На гавную', onClick: () => setPanel('main') },
                    { mode: "secondary", stretched: true, children: 'Подобрать стоматолога' }
                ]} />



            <Group header={"Вот, что видит ИИ"}>
                <CardScroll size={false} withSpaces>
                    {
                        hints.map((hint) => {
                            return (
                                <Card mode="shadow" style={{ marginTop: 10, marginBottom: 10 }}>
                                    <Image size={96} src="https://avatars.dzeninfra.ru/get-zen_doc/1565406/pub_623dc63058e11e4f7b37e74f_623ddbd15e12ee63c90e3b23/scale_1200" alt="" />
                                </Card>
                            )
                        })
                    }
                </CardScroll>

                <CardGrid size="l" spaced>


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
                {/* <FixedDownBtns
                        btns={[
                            (<Button mode="secondary" onClick={() => setPanel('resultDiagnostics')} stretched>Подобрать стоматолога</Button>),
                            (<Button stretched>На гавную</Button>)
                        ]} /> */}

            </Group>

        </PanelTemplate>
    )

}

export default PanelResultDiagnostics