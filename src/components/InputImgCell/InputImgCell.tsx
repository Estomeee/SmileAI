import React, { FC, useState } from "react";
import bridge from "@vkontakte/vk-bridge";
import { File, AspectRatio, IconButton } from "@vkontakte/vkui";
import { Icon20Add, Icon16CancelCircle } from '@vkontakte/icons';

import classes from './InputImgCell.module.css'

interface Props {
    id?: string,
    onChange: (file: File | null, isUpload: boolean) => void
    file: File | null
}

const InputImgCell: FC<Props> = ({ onChange, file }) => {
    return (
        <AspectRatio ratio={1 / 1} mode="stretch" className={classes.imgCell}>
            {file ?
                <>
                    <img className={classes.img} src={URL.createObjectURL(file)} />
                    <IconButton className={classes.btnDelete} onClick={() => onChange(null, false)}>
                        <Icon16CancelCircle color="#fff" />
                    </IconButton>
                </>
                :
                <File appearance="neutral" align="center" className={classes.input}
                    onChange={e => {
                        onChange(e.target.files ? e.target.files[0] : null, true)
                    }}>
                    <Icon20Add />
                </File>}
        </AspectRatio>
    )
}

export default InputImgCell