import * as React from 'react'

import * as styles from './UserCard.module.css'

const UserCard = ({ user }) => {

    const {id, name, rate, bio, image, specialSubjects, subjects} = user

    const [show, setShow] = React.useState(false)
    const [fade, setFade] = React.useState(false)

    React.useEffect(() => {
        document.getElementById(id+name+rate).style.setProperty('--img-url', `url(${image})`)
    }, [id, name, rate, image])

    return (
        <div 
        className={`user-card ${styles.card} m-3`}
        onMouseEnter={() => { 
            setFade(true)
            setShow(true)
        }}
        onMouseLeave={() => { 
            setShow(false)
            setFade(false)
        }}
        >
            <div 
            id={id+name+rate}
            className={`${styles.body}`}>

                <div 
                className={`${styles.image}`}
                styles={{
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center'
                }}
                >   
                    {
                        !show ?
                        specialSubjects && specialSubjects.length > 0 && (
                            specialSubjects.map((subject, index) => (
                                <div 
                                className={`${styles.specialSubject} ${fade ? styles.fadeOutAnim : ''}`} 
                                key={index}
                                >
                                    {subject}
                                </div>
                            ))
                        ) : null
                    }

                </div>
                
                <div className={`${styles.content}`} >

                    <span className={`${styles.title} fs-3`}>{name}</span>
                    <h6 className={`${styles.subtitle} mb-1 text-muted`}>RATE</h6>
                    <p className={`${styles.text} mb-0`}>${rate}/hr</p>
                    <p className={`${styles.bio} text-start`}>{bio}</p>

                    { show ?
                    <h5 className={`${styles.subtitle} ${styles.fadeInAnim} text-muted`}>Subjects</h5>
                    : null 
                    }

                    <div className={`${styles.subjects} d-flex flex-wrap p-0`}>
                        {
                            show ?
                            subjects && subjects.length > 0 && (
                                subjects.map((subject, index) => (
                                    <div className={`${styles.specialSubject} ${styles.fadeInAnim}`} key={index}>
                                        {subject}
                                    </div>
                                ))
                            ) : null
                        }
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default UserCard