import React from 'react'
import { ListProducts } from '../components'
type Props = object

const Container = (props: Props) => {
    return (
        <div>
            <ListProducts />       
        </div>
    )
}

export default Container