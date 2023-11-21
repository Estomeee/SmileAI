import { FC, PropsWithChildren } from "react";
import { Group as GroupVK, Header, Spacing, Text } from "@vkontakte/vkui";

interface Props extends PropsWithChildren {
    header: string
    subTitle?: string
}

const Group: FC<Props> = ({ header, children, subTitle }) => {

    return (
        <GroupVK mode="plain" separator="hide" header={
            <>
                <Spacing></Spacing>
                <Header>{header}</Header>
                {subTitle&& <Text style={{padding: '0 var(--vkui--size_base_padding_horizontal--regular)'}}>{subTitle}</Text>}
                <Spacing size={20}></Spacing>
            </>
        }>
            {children}
        </GroupVK>
    )
}

export default Group