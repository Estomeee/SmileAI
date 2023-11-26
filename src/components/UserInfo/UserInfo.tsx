import { FC, useState, useEffect } from "react";
import { Button, Avatar, Title, Text, Div } from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

import classes from "./UserInfo.module.css"
import { IUserVK } from "../../api/requests/User.requests";

interface Props {
    user: IUserVK
    onClick: () => void
}

const UserInfo: FC<Props> = ({user, onClick}) => {
    return (
        <Div className={classes.cont}>
            <Avatar src={user.img} size={96}></Avatar>
            <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="2">
                {user.name} {user.surname}
            </Title>
            <div style={{display: 'flex', alignItems: 'baseline'}}>
                <Text
                    style={{
                        marginBottom: 24,
                        color: 'var(--vkui--color_text_secondary)',
                    }}
                >
                    Ваш тариф: &nbsp;
                </Text>
                <Button size="s" mode="link" stretched onClick={onClick} >{'Бесплтаный'}</Button></div>
        </Div>
    )
}

export default UserInfo