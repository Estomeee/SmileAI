import { useEffect, useState, useLayoutEffect } from 'react';
import {
    AdaptivityProvider, ConfigProvider,
    AppRoot, Root, ModalRoot,
    SplitLayout, View,
    useAdaptivityWithJSMediaQueries, usePlatform,
    ScreenSpinner, Spinner
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import PanelMain from "./panels/PanelMain"
import PanelStore from './panels/PanelStore';
import PanelBucket from './panels/PanelBucket';
import PanelDiagnostics from './panels/Diagnostics/PanelDiagnostics';
import PanelResultDiagnostics from './panels/PanelResultDiagnostics';

import Examples from './modals/Examples/Examples'; // Переименовать с modal
import { getBucket } from './api/requests/Bucket.requets';
import { init } from './init';
import PanelError from './panels/PanelError';
import { IUserAPI } from './api/requests/User.requests';
import { ICategory, IProduct } from './api/requests/Store.requests';
import { useInit } from './hooks/useInit';




function App() {
    const [panel, setPanel] = useState('main')
    const [modal, setModal] = useState('')
    const [popout, setPopout] = useState(null)
    const [categories, setCategories] = useState<string[]>([])
    const [productsByCategories, setProductsByCategories] = useState<ICategory[]>([])

    const closeModal = () => setModal('')

    const { user, userVK, bucket, load, setBucket, data, hints } = useInit(() => setPanel('error'))

    const platform = usePlatform();
    const { isDesktop } = useAdaptivityWithJSMediaQueries();

    // const [bucket, setBucket] = useState<number[]>([1, 2])

    return (
        <>
            {!load ? <Spinner size='medium' /> :
                <div className="App">
                    <ConfigProvider>
                        <AdaptivityProvider>
                            <AppRoot>
                                <SplitLayout
                                    modal={
                                        <ModalRoot activeModal={modal}>
                                            <Examples id='examples' closeModal={closeModal} />
                                        </ModalRoot>
                                    }
                                    popout={popout}>
                                    <Root activeView='mainView'>
                                        <View id="mainView" activePanel={panel}>
                                            <PanelMain data={data} hints={hints} setPanel={setPanel} id='main' user={userVK} />
                                            <PanelDiagnostics id='diagnostics' setPanel={setPanel} setModal={setModal} />
                                            <PanelStore
                                                id='store'
                                                productsByCategories={productsByCategories}
                                                setProductsByCategories={setProductsByCategories}
                                                setPanel={setPanel}
                                                setCategories={setCategories}
                                                categories={categories}
                                                bucket={bucket}
                                                setBucket={setBucket} />
                                            <PanelBucket apiID={user? user.id : -1} setBucket={setBucket} bucket={bucket} vkID={userVK.id} id='bucket' setPanel={setPanel} />
                                            <PanelResultDiagnostics id='resultDiagnostics' setPanel={setPanel} />
                                            <PanelError id='error' />
                                        </View>
                                    </Root>
                                </SplitLayout>
                            </AppRoot>
                        </AdaptivityProvider>
                    </ConfigProvider>
                </div>
            }
        </>

    );
}

export default App;
