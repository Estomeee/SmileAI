import { FC, PropsWithChildren } from 'react'

import { Button, ButtonGroup, Div, ButtonProps } from '@vkontakte/vkui'

interface Props extends PropsWithChildren {
    content: React.JSX.Element,
    buttons: ButtonProps[]
}

const MainActionBlock: FC<Props> = ({content, buttons}) => {
    return (
        <>
            <Div>
                {content}
            </Div>
    
            <Div>
                <ButtonGroup stretched align="center" mode="vertical">
                    {buttons.map((props, index) => {
                        return(
                            <Button key={index} {...props} size='m'></Button>
                        )
                    })}
                </ButtonGroup>
            </Div>
        </>
    )
}

export default MainActionBlock