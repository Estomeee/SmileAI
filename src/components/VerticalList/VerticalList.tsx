import { FC, PropsWithChildren, useState } from 'react'
import { List, Cell, Text, Button, Separator } from '@vkontakte/vkui'

interface Props extends PropsWithChildren {
    list: { key: number, val: string }[]
}

const VerticalList: FC<Props> = ({ list }) => {
    const [listState, setListState] = useState(list)

    function showMore() {
        setListState((prev) => {
            return prev.concat(prev)
        })
    }

    return (
        <>
            <List>
                {listState.map((item) => (
                    <>
                        <Cell key={item.key} >
                            <Text>
                                {item.val}
                            </Text>
                        </Cell>

                    </>

                ))}
            </List>
            <Separator wide></Separator>
            <Button size="l" mode="link" stretched onClick={showMore} >Показать всю историю</Button>
        </>
    )
}

export default VerticalList