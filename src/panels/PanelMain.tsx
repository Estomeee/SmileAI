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
import { IStatisticsData, IHint } from "../api/requests/Statistics.request";

interface IPanel {
    id: string
    setPanel: any
    user: IUserVK
    data: IStatisticsData[],
    hints: IHint[]
}

const PanelMain: FC<IPanel> = ({ id, setPanel, user, data, hints }) => {

    const { isDesktop } = useAdaptivityWithJSMediaQueries()

    const pat = [{ key: 0, val: 'Кариес' }, { key: 1, val: 'Проблемы с дёснаснами' }, { key: 2, val: 'Скол' }, { key: 3, val: 'Что-то ещё' }, { key: 4, val: 'А? 5' }]
    

    return (
        <PanelTemplate id={id} header="Улыбнись AI">
            {/* <UserInfo></UserInfo>
                    <MainButtonGroup setPanel={setPanel}></MainButtonGroup> */}

            <MainActionBlock
                content={
                    <UserInfo user={user}></UserInfo>
                }
                buttons={[
                    { onClick: () => setPanel('fast'), stretched: true, children: 'Провести диагностику' },
                    { onClick: () => setPanel('store'), stretched: true, children: 'Магазин', appearance: "neutral" },
                    { onClick: () => setPanel('bucket'), stretched: true, children: 'Корзина', appearance: "neutral" },
                ]} />

            <Group header={"Статистика"}>
                <CardGrid size="l" spaced>
                    <CustomCard header="Сосотояние вашей улыбки">
                        <Div>
                            {
                                data.length > 0 ? <MyChart height={80} dataset={data} /> :
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