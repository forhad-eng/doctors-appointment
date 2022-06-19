const Examinations = ({ date, specialized, doctor }) => {
    return (
        <div className="bg-[#F5F7F9] rounded-2xl w-full p-5">
            <p className="text-sm text-primary">{date}</p>
            <p className="font-bold">{specialized}</p>
            <p className="text-sm text-primary">{doctor}</p>
        </div>
    )
}

export default Examinations
