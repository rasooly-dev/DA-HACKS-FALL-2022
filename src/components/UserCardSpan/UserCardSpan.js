import * as React from 'react';

import * as styles from './UserCardSpan.module.scss'

import { navigate } from 'gatsby'

const UserCardSpan = ({ user }) => {
    const {
        id, 
        name,
        rate, 
        bio, 
        image, 
        subjects, 
        availability
    } = user

    React.useEffect(() => {
        document.getElementById(id+name+rate).style.setProperty('--img-url', `url(${image})`)
    }, [id, name, rate, image])

    return (
        <div
        className={`user-card-span ${styles.card} mb-3`}
        onClick={() => navigate('/listing', {
            state: {user}
        })}
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
                />  

                <div className={`${styles.content} ms-3 d-flex flex-column`}>
                    <div className={`${styles.name} fs-2 text-dark`}>
                        {name}
                    </div>

                    <div className={`${styles.subjects} d-flex flex-wrap p-0`}>
                        {
                            subjects.map((subject, index) => (
                                <div className={`${styles.specialSubject}`} key={index}>
                                    {subject}
                                </div>
                            ))
                        }
                    </div>

                    <div className={`${styles.rateHeader} fs-5 text-muted`}>
                        ABOUT
                    </div>

                    <div className={`${styles.bio} text-dark`}>
                        {bio}
                    </div>

                </div>

                <div className={`${styles.rateContainer} ms-3 d-flex flex-column`}>
                    <div className={`${styles.rateHeader} fs-4 text-muted`}>
                        RATE
                    </div>

                    <div className={`${styles.rateAmount} fs-3`}>
                        ${rate}/hr
                    </div>

                    <div className={`${styles.availability} fs-5 text-muted`}>
                        {availability}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserCardSpan