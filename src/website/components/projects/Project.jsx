import '../../css/project.css'
import { forwardRef } from 'react'

const Project = forwardRef(function(props,ref){
    return(
        <div className={props.containerClass} ref={ref}>
            <p className='heading'>Project</p>
        </div>
    )
})

export default Project