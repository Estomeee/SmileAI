import React, { FC, useState } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
    useAdaptivityWithJSMediaQueries,
    Panel, PanelHeader, PanelHeaderBack, PanelHeaderButton,
    CardScroll, Group as GroupVK, CardGrid, Card, Cell,
    List, Div, Avatar, Counter,
    ButtonGroup, Button,
    Header, Title, Text,

    Spacing, Separator,
}
    from "@vkontakte/vkui";
import PanelTemplate from "./PanelTemplate";

interface panel {
    id: string
    setPanel: any
    bucket: number[]
}

const PanelBucket: FC<panel> = ({ id, setPanel, bucket }) => {

    const { isDesktop } = useAdaptivityWithJSMediaQueries()

    return (
        <PanelTemplate id={id} header="Коризна" onClickBack={() => setPanel('main')}>
            <GroupVK>
                {bucket}
            </GroupVK>
        </PanelTemplate>
    )
}

export default PanelBucket