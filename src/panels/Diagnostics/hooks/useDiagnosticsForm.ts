import { useState } from 'react'

export interface DiagnosticsForm {
    front: File | null
    left: File| null
    right: File| null
    insideUp: File| null
    insideDown: File| null
}

export const useDiagnosticsForm = () => {
    const [form, setForm] = useState<DiagnosticsForm>({
        front: null,
        left: null,
        right: null,
        insideUp: null,
        insideDown: null,
    })

    const onChange = <TKey extends keyof DiagnosticsForm>(field: TKey, value: DiagnosticsForm[TKey]) => {
        
        
        setForm(prev => ({
            ...prev,
            [field]: value, 
        }))
    }

    return { form, onChange }
}