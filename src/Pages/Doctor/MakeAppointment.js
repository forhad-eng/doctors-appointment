import { faBell, faCircle, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Examinations from './Examinations'

const MakeAppointment = () => {
    const today = new Date().getUTCDate() //getting today's date.

    return (
        <div className="pr-4">
            <div className="flex justify-between">
                <h3 className="text-xl font-bold mt-6">Make An appointment, That Will Help You! Choose A Doctor</h3>
                <span className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
                    <FontAwesomeIcon icon={faBell} />
                </span>
            </div>

            {/* Consults For Today Part */}
            <div className="mt-8 mb-6 bg-[#F1E9FE] rounded-2xl p-4">
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

            {/* Examinations Part */}
            <div className="my-6 bg-[#F1E9FE] rounded-2xl p-4">
                <div className="flex justify-between">
                    <h3 className="text-xl font-bold">Examinations</h3>
                    <h4 className="text-primary font-bold cursor-pointer">See All</h4>
                </div>

                <div className="flex gap-5 mt-6">
                    <Examinations date="23 Dec 2020" specialized="Heart Surgeon" doctor="Ellen Bradly" />
                    <Examinations date="24 Nov 2020" specialized="Medicine Specialist" doctor="Luke McKinney" />
                    <Examinations date="15 May 2020" specialized="Backpain Specialist" doctor="Cameroon Holland" />
                </div>
            </div>

            {/* Treatment Part */}
            <div className="my-6 bg-[#F1E9FE] rounded-2xl p-4">
                <h3 className="text-xl font-bold">Treatment</h3>
                <div className="treatment mt-3">
                    <div className="border-r-2 border-gray-300 pr-10">
                        <p className="text-gray-500">November 2020</p>
                        <div className="text-primary font-bold bg-white rounded-2xl flex justify-center gap-5 mt-6 py-6 px-10">
                            &lt;
                            <span className="line-through cursor-pointer">26</span>{' '}
                            <span className="flex flex-col justify-center items-center cursor-pointer">
                                27 <FontAwesomeIcon icon={faCircle} className="w-1 h-1 text-secondary" />
                            </span>{' '}
                            <span className="flex flex-col justify-center items-center cursor-pointer">
                                28 <FontAwesomeIcon icon={faCircle} className="w-1 h-1 text-secondary" />
                            </span>{' '}
                            <span className="line-through cursor-pointer">29</span>{' '}
                            <span className="line-through cursor-pointer">30</span>{' '}
                            <span className="line-through cursor-pointer">31</span>{' '}
                            <span className="line-through cursor-pointer">01</span>
                            &gt;
                        </div>
                    </div>
                    <div className="flex gap-3 bg-[#F5F7F9] rounded-2xl p-4">
                        <div className="text-white bg-secondary rounded-xl flex flex-col justify-center items-center py-7">
                            <p className="text-2xl font-bold">27</p>
                            <p className="px-2">November</p>
                        </div>
                        <div>
                            <p className="font-bold">Medicine</p>
                            <p className="text-gray-500">
                                <small>11:30 AM</small>
                            </p>

                            <div className="flex gap-2 ml-8 mt-4">
                                <button className="w-10 h-10 bg-white rounded-full">
                                    <FontAwesomeIcon icon={faPhone} className="text-secondary" />
                                </button>
                                <button className="w-10 h-10 bg-white rounded-full">
                                    <FontAwesomeIcon icon={faVideo} className="text-primary" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeAppointment
