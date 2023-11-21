import { FC } from 'react'
import { Text } from '@vkontakte/vkui'
import classses from './BigNumber.module.css'

interface Props {
    number: number,
    text: string
}

const BigNumber: FC<Props> = ({ number, text }) => {
    return (
        <div className={classses.cont}>
            <span className={classses.number} >{number}</span>
            <Text>{text}</Text>
        </div>
    )
}

export default BigNumber