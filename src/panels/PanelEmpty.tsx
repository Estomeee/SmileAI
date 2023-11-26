import { FC } from "react";
import {
    Div,
    Group as GroupVK, Text,
} from "@vkontakte/vkui";
import PanelTemplate from "./PanelTemplate";
import { panels } from "../App";


interface Props {
    id: string
    setPanel: any
    
}

const PanelEmpty: FC<Props> = ({ id, setPanel }) => {

    return (
        <PanelTemplate id={id} header="Позже" onClickBack={() => setPanel(panels.main)}>
            <Div>
                <Text>
                    Эта часть приложения ещё не готова, пожалуйста, приходите позже.
                </Text>
            </Div>
        </PanelTemplate>
    )
}

export default PanelEmpty