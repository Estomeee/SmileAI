import { FC, PropsWithChildren } from "react";
import { PanelHeaderBack, Panel, PanelHeader } from "@vkontakte/vkui";

interface Props extends PropsWithChildren {
    id: string
    header: string
    onClickBack?: () => void
}

const PanelTemplate: FC<Props> = ({ header, id, children, onClickBack }) => {
    return (
        <Panel id={id}>
            <PanelHeader
                before={onClickBack &&
                    <PanelHeaderBack
                        onClick={onClickBack}
                    // label={platform === Platform.VKCOM ? 'Назад' : undefined}
                    />}>
                {header}
            </PanelHeader>
            <div style={{ paddingBottom: 0, background: "var(--vkui--color_background_content)" }}>
                {children}
            </div>
        </Panel>
    )
}

export default PanelTemplate