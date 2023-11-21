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
                            { header: 'Спереди', descr: 'Оголите передние зубы так, словно вы улыбаетесь.', imgSrc: 'https://za-rozhdenie.ru/wp-content/uploads/2019/08/xqymbm3k.jpg' },
                            { header: 'Слева', descr: 'В частности, базовый вектор развития, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. ', imgSrc: 'https://za-rozhdenie.ru/wp-content/uploads/2019/08/xqymbm3k.jpg' },
                            { header: 'Справа', descr: 'В частности, базовый вектор развития, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. ', imgSrc: 'https://za-rozhdenie.ru/wp-content/uploads/2019/08/xqymbm3k.jpg' },
                            { header: 'Нижние зубы внутри', descr: 'В частности, базовый вектор развития, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. ', imgSrc: 'https://za-rozhdenie.ru/wp-content/uploads/2019/08/xqymbm3k.jpg' },
                            { header: 'Верхние зубы внутри', descr: 'В частности, базовый вектор развития, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. ', imgSrc: 'https://za-rozhdenie.ru/wp-content/uploads/2019/08/xqymbm3k.jpg' }
                        ].map((item) => <ExampleItem header={item.header} descr={item.descr} imgSrc={item.imgSrc}></ExampleItem>)
                    }
                </List>
            </Div>
        </ModalTemplate>
    )
}

export default Examples