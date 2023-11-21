import { FC, useState } from 'react'
import { Div, Button, ButtonGroup, useAdaptivityWithJSMediaQueries, usePlatform } from "@vkontakte/vkui";

interface Props {
    setPanel: any
}

const MainButtonGroup: FC<Props> = ({setPanel}) => {

    const { isDesktop } = useAdaptivityWithJSMediaQueries()
    //const pltf = usePlatform()

    return (
        <Div>
            <ButtonGroup stretched align="center">
                <ButtonGroup stretched={!isDesktop} mode="vertical" align="center">
                    <Button onClick={() => setPanel('diagnostics')} stretched>Провести диагностику</Button>
                    <ButtonGroup stretched={!isDesktop}>
                        <Button stretched={!isDesktop} appearance="neutral" onClick={() => setPanel('store')}>Магазин</Button>
                        <Button stretched={!isDesktop} appearance="neutral" onClick={() => setPanel('bucket')}>Корзина</Button>
                    </ButtonGroup>
                </ButtonGroup>
            </ButtonGroup>
        </Div>
    )
}

export default MainButtonGroup