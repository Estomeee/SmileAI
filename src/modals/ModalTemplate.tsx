import { Icon24Dismiss } from '@vkontakte/icons'
import { Header, ModalPage, ModalPageHeader, PanelHeaderButton, PanelHeaderClose, Platform, useAdaptivityConditionalRender, useAdaptivityWithJSMediaQueries, usePlatform } from '@vkontakte/vkui'
import { FC, PropsWithChildren } from 'react'


interface Props extends PropsWithChildren {
    id: string,
    closeModal: () => void
    header: string,

}

const ModalTemplate: FC<Props> = ({ id, closeModal, header, children }) => {

    const platform = usePlatform();
    const { sizeX } = useAdaptivityConditionalRender();

    return (
        <ModalPage
            id={id}
            onClose={closeModal}
            hideCloseButton={platform === Platform.IOS}            
            settlingHeight={100}
            
            header={
                <ModalPageHeader
                    before={
                        sizeX.compact &&
                        platform === Platform.ANDROID && (
                            <PanelHeaderClose className={sizeX.compact.className} onClick={closeModal} />
                        )
                    }
                    after={
                        platform === Platform.IOS && (
                            <PanelHeaderButton onClick={closeModal}>
                                <Icon24Dismiss />
                            </PanelHeaderButton>
                        )
                    }
                >
                    {header}
                </ModalPageHeader>
            }
        >
            {children}
        </ModalPage>
    )
}

export default ModalTemplate