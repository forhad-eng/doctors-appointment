import { faBriefcaseMedical, faCommentDots, faHomeAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import doctorLogo from '../assets/doctor-logo.png'
import Doctor from './Doctor/Doctor'

const SideNav = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="appointment-nav" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <label for="appointment-nav" class="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
                <Doctor />
            </div>
            <div class="drawer-side">
                <label for="appointment-nav" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-28 bg-gradient-to-b from-[#E9DDFE] to-[#f4f6f8] text-base-content shadow-3xl rounded-3xl">
                    <img src={doctorLogo} alt="doctor-vector" className="w-14 h-14 rounded-full mx-auto" />

                    <div className="flex flex-col items-center gap-5 my-auto">
                        <li>
                            <div className="flex flex-col text-primary">
                                <FontAwesomeIcon icon={faHomeAlt} className="w-4 h-4" />
                                <a>Dashboard</a>
                            </div>
                        </li>

                        <div className="flex flex-col justify-center items-center bg-white w-[70px] h-28 rounded-full cursor-pointer">
                            <FontAwesomeIcon icon={faPlusCircle} className="text-secondary mb-1" />
                            <a className="font-bold">Doctor</a>
                        </div>

                        <li>
                            <div className="flex flex-col text-primary">
                                <FontAwesomeIcon icon={faCommentDots} className="w-4 h-4" />
                                <a>Contact</a>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col text-primary">
                                <FontAwesomeIcon icon={faBriefcaseMedical} className="w-4 h-4" />
                                <a>Medicine</a>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default SideNav
