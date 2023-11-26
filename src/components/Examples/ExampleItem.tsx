import { AspectRatio, Caption, List, Text } from '@vkontakte/vkui'
import { FC } from 'react'
import classes from './ExampleItem.module.css'


interface Props {
    header: string,
    descr: string,
    imgs: string[]
}

const ExampleItem: FC<Props> = ({ header, descr, imgs }) => {
    return (
        <div className={classes.cont}>
            <Text className={classes.text} weight="1">{header}</Text>
            <Caption className={classes.text}>{descr}</Caption>
            <List className={classes.ul}>
                {imgs.map((img, index) => {
                    return (
                        <AspectRatio className={classes.li} ratio={1 / 1}>
                            <img className={classes.img} src={img} alt="Пример фотографии" />
                        </AspectRatio>
                    )
                })}

            </List>
        </div>
    )
}

export default ExampleItem