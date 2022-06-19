import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Specialist from './Specialist'

const YourTreatment = () => {
    //Two specialist details
    const specialists = {
        one: {
            img: 'https://api.lorem.space/image/face?hash=64318',
            name: 'Dr. Linda Gutierrez',
            title: 'Heart Surgeon',
            study: 'Heart Surgeon, London, England',
            specialization: 'Surgeon',
            bg: '[#F1E9FE]',
            date: '20 Nov 2020',
            time: '10:00 AM'
        },

        two: {
            img: 'https://api.lorem.space/image/face?hash=64322',
            name: 'Dr. Christina Frazier',
            title: 'Specialist',
            study: 'Medicine Specialist, London, England',
            specialization: 'Medicine',
            bg: 'white',
            date: '25 Nov 2020',
            time: '11:00 AM'
        }
    }

    return (
        <div className="pl-10">
            <h2 className="text-3xl tracking-wide font-bold mt-6">Your Treatment</h2>
            <Specialist specialist={specialists.one} />
            <Specialist specialist={specialists.two} />

            <div className="flex justify-between items-center my-6 px-4 bg-[#F1E9FE] rounded-3xl p-3">
                <div className="bg-[#4E95FF] text-white rounded-2xl p-3">
                    <p>5500 6677 000 99</p>
                    <div className="flex justify-between pt-2">
                        <p>
                            <small>Harold Mann</small>
                        </p>
                        <p>VISA</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <button className="w-11 h-11 bg-white rounded-xl">
                        <FontAwesomeIcon icon={faGear} className="w-5 h-5 mt-1" />
                    </button>
                    <p>
                        <small className="font-bold">Settings</small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default YourTreatment
