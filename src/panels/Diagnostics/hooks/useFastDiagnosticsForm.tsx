import { useState } from 'react'

export interface DiagnosticsForm {
    name: string
    file: File | null
}

export const useFastDiagnosticsForm = () => {
    const [form, setForm] = useState<DiagnosticsForm>({
        name: '',
        file: null
    })

    const onChange = <TKey extends keyof DiagnosticsForm>(field: TKey, value: DiagnosticsForm[TKey]) => {

        setForm(prev => ({
            ...prev,
            [field]: value,
        }))
    }

    return { form, onChange }
}