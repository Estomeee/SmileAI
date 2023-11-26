import { FC, useState } from "react";
import bridge from "@vkontakte/vk-bridge";
import { useAdaptivityWithJSMediaQueries, CardScroll, Group as GroupVK, Div, CardGrid } from "@vkontakte/vkui";
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
import { IUserVK } from "../api/requests/User.requests";
import { IStatisticsData, IHint, IChart } from "../api/requests/Statistics.request";
import { panels } from "../App";

interface IPanel {
    id: string
    setPanel: any
    user: IUserVK
    data: IChart,
    hints: IHint[]
}

const PanelMain: FC<IPanel> = ({ id, setPanel, user, data, hints }) => {

    return (
        <PanelTemplate id={id} header="Улыбнись AI">
            {/* <UserInfo></UserInfo>
                    <MainButtonGroup setPanel={setPanel}></MainButtonGroup> */}

            <MainActionBlock
                content={
                    <UserInfo user={user}></UserInfo>
                }
                buttons={[
                    { onClick: () => setPanel(panels.fastDiagnostics), stretched: true, children: 'Провести диагностику' },
                    { onClick: () => setPanel(panels.empty), stretched: true, children: 'Подобрать стоматолога', appearance: "neutral" },
                    { onClick: () => setPanel(panels.store), stretched: true, children: 'Магазин', appearance: "neutral" },
                    { onClick: () => setPanel(panels.bucket), stretched: true, children: 'Корзина', appearance: "neutral" },
                ]} />

            <Group header={"Статистика"}>
                <CardGrid size="l" spaced>
                    <CustomCard header="Сосотояние вашей улыбки">
                        <Div>
                            {
                                data.month.length > 0 ? <MyChart height={80} dataset={data} /> :
                                    'Данных ещё нет'
                            }
                        </Div>
                    </CustomCard>

                    {/* <CustomCard header="Патологии">
                        <VerticalList list={pat}></VerticalList>
                    </CustomCard> 
                            Переделать компонент в соответсвии с новыми требованиями
                    */}
                </CardGrid>
            </Group>

            <Group header={"Рекомендации"}>
                <CardScroll size={false} withSpaces>
                    {
                        hints.map((hint) => {
                            return (
                                <HintCard key={hint.id} title={hint.title} description={hint.text}></HintCard>
                            )
                        })
                    }
                </CardScroll>
            </Group>
        </PanelTemplate>
    )

}

export default PanelMain