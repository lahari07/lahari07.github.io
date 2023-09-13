// import '../../css/project.css'
// import github from '../../../images/GitHub-logo.png'
import '../../css/responsiveproject.css'
import { forwardRef } from 'react'

const Project = forwardRef(function(props,ref){
    return(
        <div className={props.containerClass} ref={ref}>
           {/* <img src={github} className='github-logo'></img> */}
        </div>
    )
})

export default Project