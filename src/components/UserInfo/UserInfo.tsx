import { FC, useState, useEffect } from "react";
import { Button, Avatar, Title, Text, Div } from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

import classes from "./UserInfo.module.css"

const UserInfo: FC = () => {

    interface Props {
        img: string,
        fn: string,
        ln: string
    }

    const [user, setState] = useState<Props>({ img: '', fn: '', ln: '' })

    useEffect(() => {
        bridge.send('VKWebAppGetUserInfo', {}).then(
            (data) => {
                setState({ img: data.photo_200, fn: data.first_name, ln: data.last_name })
            }
        )
    }, [])

    return (
        <Div className={classes.cont}>
            <Avatar src={user.img} size={96}></Avatar>
            <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="2">
                {user.fn} {user.ln}
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
                <Button size="s" mode="link" stretched onClick={() => console.log('sdf')} >{'Бесплтаный'}</Button></div>
        </Div>
    )
}

export default UserInfo