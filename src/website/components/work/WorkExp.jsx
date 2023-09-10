import '../../css/workExperienceStyles.css'
import { forwardRef } from "react"

const WorkExp = forwardRef(function(props,ref){
    const {experience} = props
    return(
        <div ref={ref} className={props.containerClass}>
            <div className='all-exp-container-main'>
                <div className='company-name-container'>
                    <a className='companyName' target="_blank" href={experience.link}>{experience.company}
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
                        </svg>
                    </a>
                </div>
                <table className='responsibilities-and-technologies-table'>
                    <tbody>
                        <tr className='responsibilities-and-technologies-row'>
                            <td className='responsibilities-data-container'>
                                <table className='key-points-table'>
                                    <tbody>
                                        {
                                        experience.key_points.map((key_point, index) => (
                                            <tr className='key-point' key={index}>
                                            <td className='key-point-content'>‣{" " + key_point}</td> 
                                            </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='technologies-data-container'>
                    {
                        experience.technologies.map((eact_tech, index) => (
                            <div className={'tech-container-outline '+props.containerColor} key={index}>
                                <span className='each-tech' key={index}>{eact_tech}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
})

export default WorkExp