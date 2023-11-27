import { FC } from 'react'
import { List, Cell, Text, Div } from '@vkontakte/vkui'

interface Props {
    list: { name: string, description: string }[]
}

const VerticalList: FC<Props> = ({ list }) => {

    return (
        <>
            <List>
                {list.map((item, index) => (
                    <>
                        <Div key={index} >
                            <Text>
                                {item.name}
                            </Text>
                        </Div>

                    </>

                ))}
            </List>
        </>
    )
}

export default VerticalList