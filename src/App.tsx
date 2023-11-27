import { useState } from 'react';
import {
    AdaptivityProvider, ConfigProvider,
    AppRoot, Root, ModalRoot,
    SplitLayout, View,
    useAdaptivityWithJSMediaQueries, usePlatform,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import PanelMain from "./panels/PanelMain"
import PanelStore from './panels/PanelStore';
import PanelBucket from './panels/PanelBucket';
import PanelDiagnostics from './panels/Diagnostics/PanelDiagnostics';
import PanelResultDiagnostics from './panels/PanelResultDiagnostics';
import Examples from './modals/Examples/Examples'; // Переименовать с modal
import PanelError from './panels/PanelError';
import { ICategory } from './api/requests/Store.requests';
import { useInit } from './hooks/useInit';
import PanelFastDiagnostics from './panels/Diagnostics/PanelFastDiagnostics';
import PanelEmpty from './panels/PanelEmpty';
import PanelTariffs from './panels/Tariffs/PanelTariffs';
import ModalEmpty from './modals/ModalEmpty';

export const panels = {
    main: 'main',
    fullDiagnostics: 'fullDiagnostics',
    fastDiagnostics: 'fastDiagnositcs',
    store: 'store',
    bucket: 'bucket',
    error: 'error',
    empty: 'empty',
    resultDiagnostics: 'result',
    tarrifs: 'tariffs'
}

function App() {
    const [panel, setPanel] = useState(panels.main)
    const [modal, setModal] = useState('')
    const [popout, setPopout] = useState(null)
    const [categories, setCategories] = useState<string[]>([])
    const [productsByCategories, setProductsByCategories] = useState<ICategory[]>([])
    const [mark, setMark] = useState(0)

    const closeModal = () => setModal('')

    const { user, userVK, bucket, setBucket, data, hints } = useInit(() => setPanel(panels.error))

    const platform = usePlatform();
    const { isDesktop } = useAdaptivityWithJSMediaQueries();

    return (
        <div className="App">
            <ConfigProvider>
                <AdaptivityProvider>
                    <AppRoot>
                        <SplitLayout
                            modal={
                                <ModalRoot activeModal={modal}>
                                    <Examples id='examples' closeModal={closeModal} />
                                    <ModalEmpty id='ModalEmpty' closeModal={closeModal}/>
                                </ModalRoot>
                            }
                            popout={popout}>
                            <Root activeView='mainView'>
                                <View id="mainView" activePanel={panel}>
                                    <PanelMain
                                        id={panels.main}
                                        data={data}
                                        hints={hints}
                                        setPanel={setPanel}
                                        user={userVK} />
                                    <PanelDiagnostics
                                        id={panels.fullDiagnostics}
                                        setPanel={setPanel}
                                        setModal={setModal} />
                                    <PanelStore
                                        id={panels.store}
                                        productsByCategories={productsByCategories}
                                        setProductsByCategories={setProductsByCategories}
                                        setPanel={setPanel}
                                        setCategories={setCategories}
                                        categories={categories}
                                        bucket={bucket}
                                        setBucket={setBucket} />
                                    <PanelBucket
                                        id={panels.bucket}
                                        apiID={user ? user.id : -1}
                                        setBucket={setBucket}
                                        bucket={bucket}
                                        vkID={userVK.id}
                                        setPanel={setPanel} />
                                    <PanelResultDiagnostics
                                        id={panels.resultDiagnostics}
                                        setPanel={setPanel}
                                        mark={mark}
                                        hints={hints} />
                                    <PanelError
                                        id={panels.error}
                                        setPanel={setPanel} />
                                    <PanelFastDiagnostics
                                        id={panels.fastDiagnostics}
                                        apiID={user ? user.id : -1}
                                        setModal={setModal}
                                        setPanel={setPanel}
                                        setMark={setMark} />
                                    <PanelEmpty
                                        setPanel={setPanel}
                                        id={panels.empty} />
                                    <PanelTariffs 
                                        setPanel={setPanel}
                                        id={panels.tarrifs}
                                        onError={() => setPanel(panels.error)}
                                        setModal={setModal}/>
                                </View>
                            </Root>
                        </SplitLayout>
                    </AppRoot>
                </AdaptivityProvider>
            </ConfigProvider>
        </div>

    );
}

export default App;
