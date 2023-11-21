import { FC, PropsWithChildren } from "react";
import { Card, Text, Div, Separator } from "@vkontakte/vkui";

interface Props extends PropsWithChildren {
    header: string,
}

const CustomCard: FC<Props> = ({ header, children }) => {

    return (
        <Card mode="shadow">
            <Div>
                <Text weight="1">{header}</Text>
            </Div>
            <Separator wide></Separator>

            {children}

        </Card>
    )
}

export default CustomCard