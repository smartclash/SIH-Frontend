import { NextPage } from "next"
import TimelineInterface from "@/interfaces/timeline/TimelineInterface"

const TimeLineCard: NextPage<TimelineInterface> = props => (
    <>
        <div className='card-content'>
            <div className='field'>
                <label className='label'>Title</label>
                <div className='control'>
                    <input className='input' type='text' />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Message</label>
                <div className='control'>
                    <input className='input' type='text' />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Start at</label>
                <div className='control'>
                    <input className='input' type='time' />
                </div>
            </div>
            <div className='field pt-2'>
                <div className='control'>
                    <input type='submit' value='Add Timeline' className='button is-primary is-outlined is-fullwidth' />
                </div>
            </div>
        </div>
    </>

)

export default TimeLineCard