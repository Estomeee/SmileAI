import { Icon24Dismiss } from '@vkontakte/icons'
import { Div, List, ModalPage, ModalPageHeader, PanelHeaderButton, PanelHeaderClose, Platform, Text, useAdaptivityConditionalRender, useAdaptivityWithJSMediaQueries, usePlatform } from '@vkontakte/vkui'
import { FC } from 'react'
import ModalTemplate from './ModalTemplate'


interface Props {
    id: string,
    closeModal: () => void
}

const ModalEmpty: FC<Props> = ({ id, closeModal }) => {

    return (
        <ModalTemplate id={id} header='Примеры' closeModal={closeModal} >
            <Div>
                <Text>
                    На данный момент функция недоступна, мы сообщим, когда вы сможете сменить тариф.
                </Text>
            </Div>
        </ModalTemplate>
    )
}

export default ModalEmpty