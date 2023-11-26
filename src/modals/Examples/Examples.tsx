import { Icon24Dismiss } from '@vkontakte/icons'
import { Div, List, ModalPage, ModalPageHeader, PanelHeaderButton, PanelHeaderClose, Platform, useAdaptivityConditionalRender, useAdaptivityWithJSMediaQueries, usePlatform } from '@vkontakte/vkui'
import { FC } from 'react'
import ModalTemplate from '../ModalTemplate'
import ExamplesList from '../../components/Examples/ExamplesList'
import ExampleItem from '../../components/Examples/ExampleItem'

interface Props {
    id: string,
    closeModal: () => void
}

const Examples: FC<Props> = ({ id, closeModal }) => {

    return (
        <ModalTemplate id={id} header='Примеры' closeModal={closeModal} >
            <Div>
                <List>
                    {
                        [
                            {
                                header: 'Передние зубы',
                                descr: 'Оголите передние зубы так, словно вы улыбаетесь.',
                                imgSrc: [
                                    'https://storage.yandexcloud.net/products-url/front.jpg',
                                    'https://storage.yandexcloud.net/products-url/front.jpg',
                                    'https://storage.yandexcloud.net/products-url/front.jpg'
                                ]
                            },
                            {
                                header: 'Верхние зубы',
                                descr: 'Оголите передние зубы так, словно вы улыбаетесь.',
                                imgSrc: [
                                    'https://storage.yandexcloud.net/products-url/upper.jpg',
                                ]
                            },
                            {
                                header: 'Нижние зубы',
                                descr: 'Оголите передние зубы так, словно вы улыбаетесь.',
                                imgSrc: [
                                    'https://storage.yandexcloud.net/products-url/lower.jpg',
                                ]
                            },
                        ].map((item) => <ExampleItem header={item.header} descr={item.descr} imgs={item.imgSrc} />)
                    }
                </List>
            </Div>
        </ModalTemplate>
    )
}

export default Examples