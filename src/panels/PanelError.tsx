import { FC, PropsWithChildren } from "react";
import { PanelHeaderBack, Panel, PanelHeader, Text, Div } from "@vkontakte/vkui";
import PanelTemplate from "./PanelTemplate";
import { panels } from "../App";

interface Props extends PropsWithChildren {
    id: string
    setPanel: any
}

const PanelError: FC<Props> = ({ id, setPanel }) => {
    return (
        <Panel id={id}>
            <PanelHeader>
                {'Ошибка'}
            </PanelHeader>
            <Div>
                <Text>
                    Что-то пошло не так, попробуйте позже.
                </Text>
            </Div>
        </Panel>
    )
}

export default PanelError