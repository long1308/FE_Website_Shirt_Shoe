import React from 'react'
import { HeaderHomeInfo, ListProducts } from '../components'

type Props = object

const Container = (props: Props) => {
    return (
        <div>
            <ListProducts />
            <HeaderHomeInfo />
        </div>
    )
}

export default Container