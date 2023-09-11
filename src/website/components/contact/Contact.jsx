// import '../../css/contact.css'
import '../../css/responsivecontact.css'
import { forwardRef } from 'react'

const Contact = forwardRef(function(props, ref){
    return(
        <div className={props.containerClass} ref={ref}>
            <p className='heading'>Contact</p>
        </div>
    )
})

export default Contact