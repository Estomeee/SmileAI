import { AspectRatio, Button, Caption, Card, Cell, Div, IconButton, Spacing, Spinner, Text } from "@vkontakte/vkui";
import { FC, useState } from "react";
import classes from './TariffIndex.module.css'

import { IProduct } from "../../api/requests/Store.requests";
import { ITariff } from "../../api/requests/Tariff.requst";

interface Props {
    width?: string
    tariff: ITariff
    onClickBtn?: () => void
}

const TariffItem: FC<Props> = ({ tariff, onClickBtn }) => {

    return (
        <Card mode="shadow" className={classes.cont} onClick={onClickBtn&& onClickBtn}>
            <Cell className={classes.tariff}>
                <Text>{tariff.name}</Text>
            </Cell>
        </Card>
    )
}

export default TariffItem