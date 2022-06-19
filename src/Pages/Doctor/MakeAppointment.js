import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        </div>
    )
}

export default MakeAppointment
