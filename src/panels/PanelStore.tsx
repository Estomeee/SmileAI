import  { FC } from "react";
import { Group as GroupVK, Button} from "@vkontakte/vkui";

import Category from "../components/Category/Category";
import FixedDownBtns from "../components/FixedDownBtns/FixedDownBtns";
import PanelTemplate from "./PanelTemplate";

interface panel {
    id: string
    setPanel: any
    bucket: number[]
    setBucket: any
}


const PanelStore: FC<panel> = ({ id, setPanel, bucket, setBucket }) => {

    const onClickAdd = (id: number) => {
        if (bucket.includes(id)) return
        setBucket([...bucket, id])
    }

    let categories = [
        {
            nameCategory: 'Зубные пасты',
            products: [
                {
                    id: 1, name: 'Зубная паста "ЧитоЗубец"', price: 99,
                    imgLink: 'https://pharmmedprom.ru/wp-content/uploads/2023/06/istock-1096108406.jpg'

                },
                {
                    id: 2, name: 'Зубная паста "ЧитоЗубец"', price: 99,
                    imgLink: 'https://gipermix.ru/upload/iblock/0a1/0a157744f4947999979c47c965ef1ff7.jpg'
                },
                {
                    id: 3, name: 'Зубная паста "ЧитоЗубец"', price: 99,
                    imgLink: 'https://gipermix.ru/upload/iblock/0a1/0a157744f4947999979c47c965ef1ff7.jpg',
                },
                {
                    id: 4, name: 'Зубная паста "ЧитоЗубец"', price: 99,
                    imgLink: 'https://gipermix.ru/upload/iblock/0a1/0a157744f4947999979c47c965ef1ff7.jpg',
                },
            ]
        },
        {
            nameCategory: 'Зубные пасты1',
            products: [
                {
                    id: 5, name: 'Зубная паста "ЧитоЗубец"', price: 99,
                    imgLink: 'https://pharmmedprom.ru/wp-content/uploads/2023/06/istock-1096108406.jpg',
                },
                {
                    id: 6, name: 'Зубная паста "ЧитоЗубец"', price: 99,
                    imgLink: 'https://cdn1.ozone.ru/s3/multimedia-9/6665697729.jpg',
                },
                {
                    id: 7, name: 'Зубная паста "ЧитоЗубец"', price: 99,
                    imgLink: 'https://gipermix.ru/upload/iblock/0a1/0a157744f4947999979c47c965ef1ff7.jpg',
                },
                {
                    id: 8, name: 'Зубная паста "ЧитоЗубец"', price: 99,
                    imgLink: 'https://gipermix.ru/upload/iblock/0a1/0a157744f4947999979c47c965ef1ff7.jpg',
                },
            ]
        },
        {
            nameCategory: 'Зубные пасты2',
            products: [
                {
                    id: 9, name: 'Зубная паста "ЧитоЗубец"', price: 99,
                    imgLink: 'https://pharmmedprom.ru/wp-content/uploads/2023/06/istock-1096108406.jpg',
                },
                {
                    id: 10, name: 'Зубная паста "ЧитоЗубец"', price: 99,
                    imgLink: 'https://cdn1.ozone.ru/s3/multimedia-9/6665697729.jpg',
                },
                {
                    id: 11, name: 'Зубная паста "ЧитоЗубец"', price: 99,
                    imgLink: 'https://gipermix.ru/upload/iblock/0a1/0a157744f4947999979c47c965ef1ff7.jpg',
                },
                {
                    id: 12, name: 'Зубная паста "ЧитоЗубец"', price: 99,
                    imgLink: 'https://gipermix.ru/upload/iblock/0a1/0a157744f4947999979c47c965ef1ff7.jpg',
                },
            ]
        }
    ]

    return (
        <PanelTemplate id={id} header="Магазин" onClickBack={() => setPanel('main')}>
            <GroupVK style={{ marginBottom: 100 }}>
                {categories.map((e) => {
                    return (
                        <Category
                            bucket={bucket}
                            nameCategory={e.nameCategory}
                            products={e.products}
                            onClickBtn={(id) => onClickAdd(id)}
                            onClickItem={(id) => console.log(id)}
                        />
                    )
                })}
            </GroupVK>

            <FixedDownBtns btns={[
                (<Button
                    size="m"
                    stretched
                    mode="secondary"
                    onClick={() => setPanel('bucket')}>
                    {'Корзина(' + bucket.length + ')'}
                </Button>)
            ]}>
            </FixedDownBtns>
        </PanelTemplate>
    )
}

export default PanelStore