import Specialist from './Specialist'

const YourTreatment = () => {
    return (
        <div className="pl-10">
            <h2 className="text-3xl tracking-wide font-bold">Your Treatment</h2>
            <Specialist
                img="https://api.lorem.space/image/face?hash=64318"
                name="Dr. Linda Gutierrez"
                title="Heart Surgeon"
                study="Heart Surgeon, London, England"
                specialization="Surgeon"
                bg="[#F1E9FE]"
            />
            <Specialist
                img="https://api.lorem.space/image/face?hash=64322"
                name="Dr. Christina Frazier"
                title="Specialist"
                study="Medicine Specialist, London, England"
                specialization="Medicine"
                bg="white"
            />
        </div>
    )
}

export default YourTreatment
