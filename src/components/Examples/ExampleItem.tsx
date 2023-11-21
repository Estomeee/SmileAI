import { Caption, Text } from '@vkontakte/vkui'
import { FC } from 'react'
import classes from './ExampleItem.module.css'


interface Props {
    header: string,
    descr: string,
    imgSrc: string
}

const ExampleItem: FC<Props> = ({ header, descr, imgSrc }) => {
    return (
        <div className={classes.cont}>
            <Text className={classes.text} weight="1">{header}</Text>
            <Text className={classes.text}>{descr}</Text>
            <img className={classes.img} src={imgSrc} alt="Изображение примера" />
        </div>
    )
}

export default ExampleItem