import { faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Specialist = ({ img, name, title, specialization, study, bg }) => {
    return (
        <div className={`mt-6 p-4 bg-${bg} rounded-3xl`}>
            <div className="flex justify-between">
                <img src={img} className="w-12 h-12 rounded-full" alt="" />
                <div>
                    <h5 className="font-bold">{name}</h5>
                    <small className="text-primary">{study}</small>
                </div>
            </div>
            <div>
                <div className="mt-3">
                    <h5 className="font-bold">{specialization}</h5>
                    <p>
                        <small className="text-primary">{title}</small>
                    </p>
                </div>

                <div className="flex justify-between mt-3">
                    <div>
                        <p>
                            <small className="text-primary">Date</small>
                        </p>
                        <p className="font-bold">20 Nov 2020</p>
                    </div>

                    <div>
                        <p>
                            <small className="text-primary">Time</small>
                        </p>
                        <p className="font-bold">10:00 AM</p>
                    </div>
                </div>

                <div className="flex justify-between mt-2">
                    <button className={`btn btn-sm btn-ghost ${bg === 'white' ? 'bg-[#F1E9FE]' : 'bg-white'} `}>
                        Appointment
                    </button>

                    <div className="flex gap-2">
                        <button className={`w-8 h-8 ${bg === 'white' ? 'bg-[#F1E9FE]' : 'bg-white'} rounded-full`}>
                            <FontAwesomeIcon icon={faPhone} className="text-secondary" />
                        </button>
                        <button className={`w-8 h-8 ${bg === 'white' ? 'bg-[#F1E9FE]' : 'bg-white'} rounded-full`}>
                            <FontAwesomeIcon icon={faVideo} className="text-primary" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialist
