// import FormikComponents from "../components/formik/FormikComponents"
import FormikComponents from '../../components/formik/FormikComponents';
import { useState } from 'react';
import * as Yup from 'yup'
import { api } from '../../utils/api';
import { useNavigate, useLocation } from 'react-router-dom'
import { showToast } from '../../components/toast/showToast';

const UpdateJob = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectCity, setSelectCity] = useState();
  const [skills, setSkills] = useState([]);

  const initialValues = {
      jobLocation: location?.state?.jobLocation,
      jobTitle: location?.state?.jobTitle,
      cityOfJob: '',
      requiredSkillsForJob:[],
      kindOfWorkerNeeded: [],
      possibleToWorkFromLongDistance: location?.state?.possibleToWorkFromLongDistance,
      educationLevelNeededForJob: location?.state?.educationLevelNeededForJob,
      amoundOfPeopleToGetHire: location?.state?.amoundOfPeopleToGetHire,
      languagesNeededForJob:[],
      genderOFApplier: location?.state?.genderOFApplier,
      SingleOrMerried: location?.state?.SingleOrMerried,
      jobDesc: location?.state?.jobDesc,
      nameOfJobPoster: location?.state?.nameOfJobPoster,
      contactNumberOfJobPoster: location?.state?.contactNumberOfJobPoster,
  }

  const validationSchema = Yup.object({
      jobLocation: Yup.string().required("لطفا موقعیت وظیفه را ذکر کنید"),
      jobTitle: Yup.string().required("لطفا نام پوست یا وظیفه را ذکر کنید"),
      jobDesc: Yup.string().required("لطفا درمورد وظیفه معلومات بدهید "),
      nameOfJobPoster: Yup.string().required("لطفا نام ارتباط گیرنده را ذکر کنید"),
      contactNumberOfJobPoster: Yup.string().required("لطفا یک شماره ارتباطی را ذکر کنید"),
  })
  const onSubmit = async (values, onSubmitProps) => {
      values.cityOfJob = selectCity.value
      values.requiredSkillsForJob = skills
      try {
          await api.put(`/api/v1/user/admin/jobs/${location?.state?._id}`,values)
          onSubmitProps.resetForm();
          navigate('/jobs')
          showToast('اعلان کاریابی شما موفقانه به روز رسانی شد','success')
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
            skills={skills}
            setSkills={setSkills}
            selectCity={selectCity}
            setSelectCity={setSelectCity}
            isHireDataPage={false}
        />
    </div>
  )
}

export default UpdateJob