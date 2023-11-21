import { Text } from '@vkontakte/vkui'
import { FC } from 'react'
import ExampleItem from './ExampleItem'


interface Props {
    exampleList: { header: string, descr: string, imgSrc: string }[]
}

const ExamplesList: FC<Props> = ({ exampleList }) => {
    return (
        <ul>
            {exampleList.map((item) => {
                return (
                    <ExampleItem header={item.header} descr={item.descr} imgSrc={item.imgSrc}></ExampleItem>
                )
            })}
        </ul>
    )
}

export default ExamplesList