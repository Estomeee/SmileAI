import { AspectRatio, Button, Caption, Card, Div, IconButton, Spacing, Spinner, Text } from "@vkontakte/vkui";
import { FC, useState } from "react";
import classes from './TariffIndex.module.css'

import { IProduct } from "../../api/requests/Store.requests";
import { ITariff } from "../../api/requests/Tariff.requst";

interface Props {
    width?: string
    tariff: ITariff
    onClickBtn?: (id: IProduct) => Promise<void>
}

const TariffItem: FC<Props> = ({ tariff, onClickBtn }) => {

    return (
        <Card mode="shadow" className={classes.cont}>
            <Div className={classes.tariff}>
                <Text>{tariff.name}</Text>
            </Div>
        </Card>
    )
}

export default TariffItem