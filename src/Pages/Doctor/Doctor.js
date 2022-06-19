import '../../Styles/doctor.css'
import MakeAppointment from './MakeAppointment'
import YourTreatment from './YourTreatment'

const Doctor = () => {
    return (
        <div className="doctor-section mt-10">
            <YourTreatment />
            <MakeAppointment />
        </div>
    )
}

export default Doctor
