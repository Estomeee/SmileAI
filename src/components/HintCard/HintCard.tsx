import { FC, PropsWithChildren } from "react";
import { Spacing, Card, Text, Div } from "@vkontakte/vkui";
import classes from './HintCard.module.css'

interface Props extends PropsWithChildren {
    title: string,
    description: string,
}

const HintCard: FC<Props> = ({ title, description }) => {

    return (
        <Card mode="shadow" style={{marginTop: 10, marginBottom: 10}}>
            <Div className={classes.cont}>
                <div className={classes.wrapper}>
                    <Spacing size={16}>
                        
                            <Text weight="2">{title}</Text>
                            <Spacing></Spacing>
                            <Text>{description}</Text>
                        
                    </Spacing>
                </div>
            </Div>
        </Card>
    )
}

export default HintCard