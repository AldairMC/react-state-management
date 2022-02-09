import React, { useContext } from 'react'

//Context
import UserContext from '../../context/users/UserContext'

const Pagination = () => {

    const { pag, changePag } = useContext(UserContext)

    return (
        <div className="_pagination_container_">
            {console.log(pag)}
            <span 
                className='_button_prev_'
                onClick={() => changePag(1)}
            >
                Prev
            </span>
            <span 
                className='_button_next_'
                onClick={() => changePag(2)}
            >
                Next
            </span>
        </div>
    )
}

export default Pagination