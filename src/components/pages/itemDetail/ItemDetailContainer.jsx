import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../asyncMock';
import { BeatLoader } from 'react-spinners';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getProduct(+id).then((resp) => {
            setItem(resp)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            {isLoading ? <BeatLoader /> : <ItemDetail {...item} />}
        </>
    )
}
