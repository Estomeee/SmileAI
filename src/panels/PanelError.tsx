import { FC, PropsWithChildren } from "react";
import { PanelHeaderBack, Panel, PanelHeader } from "@vkontakte/vkui";

interface Props extends PropsWithChildren {
    id: string
}

const PanelError: FC<Props> = ({  id }) => {
    return (
        <Panel id={id}>
            <p>Что-то пошло не так, попробуйте позже</p>
        </Panel>
    )
}

export default PanelError