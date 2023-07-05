import React from 'react'
import Container from './Container'
import { BannerHome } from '../components'

type Props = object

const HomePages = (props: Props) => {
    return (
        <div>
            <BannerHome></BannerHome>
            <Container />
        </div>
    )
}

export default HomePages