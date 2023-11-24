import { FC, useState } from "react";
import {
    FixedLayout,
    Panel, PanelHeader, PanelHeaderBack,
    Div,
    Button, ButtonGroup, Spacing,
    Caption,
} from "@vkontakte/vkui";
import Group from "../../components/Group/Group";

import InputImgCell from "../../components/InputImgCell/InputImgCell";
import { useDiagnosticsForm, DiagnosticsForm } from "./hooks/useDiagnosticsForm";
import classes from "./PanelDiagnostics.module.css"
import FixedDownBtns from "../../components/FixedDownBtns/FixedDownBtns";
import PanelTemplate from "../PanelTemplate";

interface panel {
    id: string
    setPanel: any,
    setModal: any
}

interface Step {
    step: number,
    key: keyof DiagnosticsForm,
    angle: string,
    nextState: number,
    btnLabel: string,
    text: string
}

interface Steps {
    [key: number]: Step;
}

const steps: Steps = {
    0: {
        step: 1,
        key: "front",
        angle: 'Спереди',
        btnLabel: "Далее",
        text: 'Текст 0',
        nextState: 1,
    },
    1: {
        step: 2,
        key: 'left',
        angle: 'Слева',
        nextState: 2,
        btnLabel: "Далее",
        text: 'Теперь сфотографируйте зубы слева. Оттяните щеку, чтобы были видны и дальние зубы.'
    },
    2: {
        step: 3,
        key: 'right',
        angle: 'Справа',
        nextState: 3,
        btnLabel: "Далее",
        text: 'Текст 2'
    },
    3: {
        step: 4,
        key: 'insideUp',
        angle: 'Внитри 1',
        nextState: 4,
        btnLabel: "Далее",
        text: 'Текст 3'
    },
    4: {

        step: 5,
        key: 'insideDown',
        angle: 'Внутри 2',
        nextState: 5,
        btnLabel: "Отправить",
        text: 'Текст 4'
    },
}



const PanelDiagnostics: FC<panel> = ({ id, setPanel, setModal }) => {
    const [isDisabled, setIsDisabled] = useState(true)
    const [img, setImg] = useState<File | null>(null)
    const { form, onChange } = useDiagnosticsForm()
    const [step, setStep] = useState(steps[0])

    const handleChange = (file: File | null, isUpload: boolean, key: keyof DiagnosticsForm) => {
        onChange(key, file)
        setImg(file);
        setIsDisabled(!isUpload)
    }

    const onClickMainBtn = () => {
        setIsDisabled(true)
        if (step.nextState < 5) {
            setStep(steps[step.nextState])
            setImg(null)
        }
        else {
            console.log(form)
            setPanel('resultDiagnostics')
        }
    }
    

    return (
        <PanelTemplate id={id} header="Диагностика" onClickBack={() => setPanel('main')}>
            <Group header={step.angle} subTitle={step.text}>

                <Div>
                    <InputImgCell file={img} onChange={(file, isUpload) => handleChange(file, isUpload, step.key)} />
                </Div>

                <FixedDownBtns btns={[
                    (<Button size="m" mode="secondary" onClick={() => setModal('examples')} stretched>Показать примеры</Button>),
                    (<Button size="m" onClick={onClickMainBtn} disabled={isDisabled} stretched>{step.btnLabel}</Button>)
                ]}>
                    <Caption>Шаг {(step.step).toString()} из {Object.keys(steps).length}</Caption>
                </FixedDownBtns>
            </Group>
        </PanelTemplate>
    )
}

export default PanelDiagnostics