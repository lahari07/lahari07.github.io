import '../../css/responsivecontact.css'
import { forwardRef } from 'react'
import github from '../../../images/github-logo.png'
import email from '../../../images/email.png'

const Contact = forwardRef(function(props, ref){
    return(
        <div className={props.containerClass} ref={ref}>
            <div className='github'>
                <p className='projects-checkout'>You can check out some of the projects I've built @
                    <a href="https://github.com/lahari07" target='_blank'>
                        <img className='github-icon' src={github}></img>
                    </a>
                </p>
          
            </div>
            <div className='contact'>
                <p className='contact-content'>Feel free to reach out to me @
                    <span>
                        <a href="mailto:laharichepuri@gmail.com" target='_blank'>
                            <img className="email-icon" src={email}></img>
                        </a>
                    </span>
                </p>

            </div>
        </div>
    )
})

export default Contact