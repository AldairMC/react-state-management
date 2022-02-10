import React, { useContext } from 'react'

//Context
import UserContext from '../../context/users/UserContext'

const Pagination = () => {

    const { changePag } = useContext(UserContext)

    return (
        <div className="_pagination_container_">
            <span 
                className='_button_prev_'
                onClick={() => changePag(-1)}
            >
                Prev
            </span>
            <span 
                className='_button_next_'
                onClick={() => changePag(1)}
            >
                Next
            </span>
        </div>
    )
}

export default Pagination