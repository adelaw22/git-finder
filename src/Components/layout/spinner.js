import React, {Fragment} from 'react'
import spinner from './200.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="Loading..." style={{margin:'auto', display:'block'}} />
        </Fragment>
    )
}


export default Spinner;
