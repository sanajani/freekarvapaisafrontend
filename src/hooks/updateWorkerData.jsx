import { useSelector } from "react-redux";
export const useWorkerUpdateValues = () => {
    const {user} = useSelector((state) => state.user)
    return (
     {
        name:user?.name,
        lastName: user?.lastName,
        email:user?.email,
        job: user?.job,
        experience: user?.experience,
        phoneNumber1: user?.phoneNumber1,
        phoneNumber2: user?.phoneNumber2,
        profileImageURL: user?.profileImageURL,
        province: user?.province,
        personalInfo: user?.personalInfo,
    }
    )
}

