import { useState } from 'react';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Panel, PanelHeader, Root, ModalRoot, ModalPage, ModalCard, ModalPageHeader, PanelHeaderClose, PanelHeaderButton, useAdaptivityWithJSMediaQueries, usePlatform } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import PanelMain from "./panels/PanelMain"
import PanelStore from './panels/PanelStore';
import PanelBucket from './panels/PanelBucket';
import PanelDiagnostics from './panels/Diagnostics/PanelDiagnostics';
import PanelResultDiagnostics from './panels/PanelResultDiagnostics';
import Examples from './modals/Examples/Examples';

function App() {
    const [panel, setPanel] = useState('main')
    const [modal, setModal] = useState('')

    const closeModal = () => setModal('')

    const platform = usePlatform();
    const { isDesktop } = useAdaptivityWithJSMediaQueries();

    const [bucket, setBucket] = useState<number[]>([1, 2])

    return (
        <div className="App">
            <ConfigProvider>
                <AdaptivityProvider>
                    <AppRoot>
                        <SplitLayout modal={
                            <ModalRoot activeModal={modal}>
                                <Examples id='examples'  closeModal={closeModal} />
                            </ModalRoot>
                        }>
                            <Root activeView='mainView'>
                                <View id="mainView" activePanel={panel}>
                                    <PanelMain setPanel={setPanel} id='main' />
                                    <PanelDiagnostics id='diagnostics' setPanel={setPanel} setModal={setModal} />
                                    <PanelStore id='store' setPanel={setPanel} bucket={bucket} setBucket={setBucket}/>
                                    <PanelBucket bucket={bucket} id='bucket' setPanel={setPanel} />
                                    <PanelResultDiagnostics id='resultDiagnostics' setPanel={setPanel} />
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
