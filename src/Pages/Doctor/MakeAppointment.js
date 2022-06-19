import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Examinations from './Examinations'

const MakeAppointment = () => {
    const today = new Date().getUTCDate()

    return (
        <div className="pr-4">
            <div className="flex justify-between">
                <h3 className="text-xl font-bold mt-6">Make An appointment, That Will Help You! Choose A Doctor</h3>
                <span className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
                    <FontAwesomeIcon icon={faBell} />
                </span>
            </div>

            <div className="my-8 bg-[#F1E9FE] rounded-2xl p-4">
                <h3 className="text-xl font-bold">Consults For Today</h3>
                <div className="my-4">
                    {[...Array(31).keys()].map(key => (
                        <button
                            className={`w-9 h-9 mr-3 mt-2 text-primary font-bold ${
                                key + 1 === today ? 'bg-secondary text-white' : 'bg-white'
                            } rounded-full`}
                        >
                            {key + 1}
                        </button>
                    ))}
                </div>
            </div>

            <div className="my-8 bg-[#F1E9FE] rounded-2xl p-4">
                <div className="flex justify-between">
                    <h3 className="text-xl font-bold">Examinations</h3>
                    <h4 className="text-primary font-bold">See All</h4>
                </div>

                <div className="flex gap-5 mt-6">
                    <Examinations date="23 Dec 2020" specialized="Heart Surgeon" doctor="Ellen Bradly" />
                    <Examinations date="24 Nov 2020" specialized="Medicine Specialist" doctor="Luke McKinney" />
                    <Examinations date="15 May 2020" specialized="Backpain Specialist" doctor="Cameroon Holland" />
                </div>
            </div>
        </div>
    )
}

export default MakeAppointment
