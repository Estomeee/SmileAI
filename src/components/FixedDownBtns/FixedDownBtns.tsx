import { Button, ButtonGroup, Caption, Div, FixedLayout, Spacing, ButtonProps } from "@vkontakte/vkui";
import { FC, memo, PropsWithChildren } from "react";
import classes from './FixedDownBtns.module.css'

interface Props extends PropsWithChildren {
    btns: React.JSX.Element[]

}

const FixedDownBtns: FC<Props> = ({ btns, children }) => {
    return (
        <FixedLayout vertical="bottom" filled>
            <Div className={classes.cont}>

                {children}

                <Spacing size={16}></Spacing>

                <ButtonGroup stretched mode="vertical" align="center">
                    {btns.map((btn => { return (btn) }))}
                </ButtonGroup>
            </Div>
        </FixedLayout>
    )
}

export default memo(FixedDownBtns)