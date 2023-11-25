import { FC, useState } from 'react'
import PanelTemplate from '../PanelTemplate'
import { Button, Caption, Div, FormItem, FormLayout, Select, Spinner } from '@vkontakte/vkui'
import InputImgCell from '../../components/InputImgCell/InputImgCell'
import FixedDownBtns from '../../components/FixedDownBtns/FixedDownBtns'
import { useFastDiagnosticsForm } from './hooks/useFastDiagnosticsForm'
import Group from '../../components/Group/Group'
import { diagnostics } from '../../api/requests/FastDiagnostics'

interface Props {
    id: string
    setPanel: any
    setModal: any
    setMark: any
    apiID: number
}

interface IForm {
    name: string | null,
    file: File | null
}

const optoins = [
    { label: 'Спереди', value: 'Front' },
    { label: 'Сверху', value: 'Upper' },
    { label: 'Снизу', value: 'Lower' }]

const PanelFastDiagnostics: FC<Props> = ({ id, setPanel, setModal, apiID, setMark }) => {

    const [form, setForm] = useState<IForm>({ name: null, file: null })
    const [load, setLoad] = useState<boolean>(false)

    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setForm({ name: e.target.value, file: form.file })
    }

    const onChangeFile = (file: File | null, isUpload: boolean) => {
        setForm({ name: form.name, file: file })
    }

    const onClickBtn = () => {
        setLoad(true)
        const reuslt = diagnostics(apiID, form.file, form.name).then(
            (response) => {
                if (!response) setPanel('error')
                setMark(response?.jaw.percentage)
                setPanel('resultDiagnostics')
            }
        )
    }

    return (
        <PanelTemplate id={id} header="Диагностика" onClickBack={() => setPanel('main')}>
            <Group header={'Выберите категорию'}>
                <Div>
                    <Select
                        onChange={onChangeSelect}
                        id="select-id"
                        placeholder="Не выбран"
                        options={optoins}
                    />
                </Div>
            </Group>
            <Group header={'Загрузите фотографию'}>
                <Div>
                    <InputImgCell
                        file={form.file}
                        onChange={(file, isUpload) => onChangeFile(file, isUpload)} />
                </Div>
            </Group>

            <FixedDownBtns btns={[
                (<Button
                    size="m"
                    mode="secondary"
                    onClick={() => setModal('examples')}
                    stretched>Показать примеры</Button>),
                (<Button
                    size="m"
                    onClick={onClickBtn}
                    disabled={(form.file && form.name && !load) ? false : true}
                    stretched>{!load ? 'Отправить' : <Spinner />}</Button>)
            ]}>
            </FixedDownBtns>
        </PanelTemplate >
    )
}

export default PanelFastDiagnostics