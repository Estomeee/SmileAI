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
import { IHint } from "../api/requests/Statistics.request";
import { panels } from "../App";

interface panel {
    id: string
    setPanel: any
    mark: number
    hints: IHint[]
}


const PanelResultDiagnostics: FC<panel> = ({ id, setPanel, mark, hints }) => {

    return (
        <PanelTemplate id={id} header="Диагностика" onClickBack={() => setPanel(panels.main)}>
            <MainActionBlock
                content={
                    <BigNumber number={mark * 100} text="Общая оценка"></BigNumber>
                }
                buttons={[
                    { stretched: true, children: 'На гавную', onClick: () => setPanel(panels.main) },
                    { mode: "secondary", stretched: true, children: 'Подобрать стоматолога',  onClick: () => setPanel(panels.empty) }
                ]} />



            {/* <Group header={"Вот, что видит ИИ"}>
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
            </Group> */}

            <Group header={"Рекомендации"}>
                <CardScroll size={false} withSpaces>
                    {
                        hints.map((hint) => {
                            return (
                                <HintCard title={hint.title} description={hint.text}></HintCard>
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