import React from 'react'
import { Item } from '../..'

type Props = object

const ListProductNew = (props: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 mt-5">
            <Item icon={"AiOutlineHeart"} />
            <Item icon={"AiOutlineHeart"} />
            <Item icon={"AiOutlineHeart"} />
            <Item icon={"AiOutlineHeart"} />
            <Item icon={"AiOutlineHeart"} />
        </div>
    )
}

export default ListProductNew