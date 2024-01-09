import FormikComponents from "../components/formik/FormikComponents"
import { useState } from 'react';
import * as Yup from 'yup'
import {useSelector} from 'react-redux'
// import {api} from '../../utils/api'
import { api } from "../utils/api";
import { useNavigate } from 'react-router-dom'
// import { showToast } from '../toast/showToast';
import { showToast } from "../components/toast/showToast";

const HireDataPage = () => {
  const navigate = useNavigate();
  const creatorPhoneNumber = useSelector((state) => state.phoneNumber)
  const [selectCity, setSelectCity] = useState(null);
  const [skills, setSkills] = useState([]);

  const initialValues = {
      phoneNumber:'',
      jobLocation:'',
      jobTitle:'',
      cityOfJob:'',
      requiredSkillsForJob:[],
      kindOfWorkerNeeded: [],
      possibleToWorkFromLongDistance:'',
      educationLevelNeededForJob:'',
      amoundOfPeopleToGetHire:'',
      languagesNeededForJob:[],
      genderOFApplier:'',
      SingleOrMerried:'',
      jobDesc:'',
      nameOfJobPoster:'',
      contactNumberOfJobPoster:''
  }

  const validationSchema = Yup.object({
      jobLocation: Yup.string().required("لطفا موقعیت وظیفه را ذکر کنید"),
      jobTitle: Yup.string().required("لطفا نام پوست یا وظیفه را ذکر کنید"),
      jobDesc: Yup.string().required("لطفا درمورد وظیفه معلومات بدهید "),
      // cityOfJob: Yup.string().required("لطفا شعر وظیفه را ذکر کنید"),
      nameOfJobPoster: Yup.string().required("لطفا نام ارتباط گیرنده را ذکر کنید"),
      contactNumberOfJobPoster: Yup.string().required("لطفا یک شماره ارتباطی را ذکر کنید"),
  })

  const onSubmit = async (values,onSubmitProps) => {
      values.cityOfJob = selectCity.value
      values.requiredSkillsForJob = skills
      values.phoneNumber = creatorPhoneNumber.phoneNumber
      try {
          await api.post('/api/v1/job',values)
          onSubmitProps.resetForm();
          navigate('/jobs')
          showToast('اعلان کاریابی شما موفقانه ثبت شد','success')
      } catch (error) {
          console.log(error);
          showToast('لطفا فورم را درست خانه پوری کنید')
      }
  }

  return (
    <div>
        <FormikComponents
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          setSelectCity={setSelectCity}
          setSkills={setSkills}
          skills={skills}
          selectCity={selectCity}
          isHireDataPage={true}
        />
    </div>
  )
}

export default HireDataPage