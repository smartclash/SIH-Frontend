import {NextPage} from 'next'
import {useState} from 'react'

const CreateNotifications: NextPage = () => {
    const [L1Selected, setL1Selected] = useState(true)
    // Use this to send the date and time to show how long the nofication will be active
    const date = new Date()
    const a = date.toUTCString()

    return (
        <>
            <label className='label'>Title</label>
            <input className='input is-link mb-5' type='text' placeholder='What you want them to see...' />

            <div className='field mb-5'>
                <label className='label'>Notification Spread Level</label>
                <div className='control'>
                    <div className='select'>
                        <select onChange={event => {
                            console.log(event.target.value)
                            if (event.target.value === 'L1') {
                                setL1Selected(false)
                                console.log(L1Selected)
                            } else {
                                setL1Selected(true)
                            }
                        }}>
                            <option value='L3'>L3 - Just sends notification</option>
                            <option value='L2'>L2 - Sends email and SMS</option>
                            <option value='L1'>L1 - Makes a voicecall and plays the message</option>
                        </select>
                    </div>
                </div>
            </div>
            {
                (L1Selected) ? (
                    <div className='field'>
                        <label className='label'>Message</label>
                        <div className='control'>
                            <textarea className='textarea' placeholder='Express your thought' style={{minHeight: '15em'}}></textarea>
                        </div>
                    </div>
                ) : (
                    <div className='field mb-5'>
                        <label className='label'>⚠️ This notification make a emergency call to everyone ⚠️</label>
                    </div>

                )

            }
            <div className='field is-grouped'>
                <div className='control'>
                    <button className='button is-link'>Submit</button>
                </div>
                <div className='control'>
                    <button className='button is-link is-light'>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default CreateNotifications
