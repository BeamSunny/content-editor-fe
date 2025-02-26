import * as Yup from 'yup'

const yupDemo = Yup.object().shape({
  inputDate: Yup.string().required('Plese Enter'),
  inputNumber: Yup.number().min(1, 'Plese Enter').required('Plese Enter'),
  inputDateRange: Yup.array()
    .of(Yup.date().typeError('Plese Enter').required('Plese Enter'))
    .min(2, 'Plese Enter')
    .required('Plese Enter'),
  inputText: Yup.string().required('Plese Enter'),
  inputPassword: Yup.string().required('Plese Enter'),
  inputRadio: Yup.string().required('Plese Enter'),
  inputCheckbox: Yup.array().min(1, 'Plese Enter').required('Plese Enter'),
  inputPhoneNumber: Yup.string().required('Plese Enter'),
  inputTextarea: Yup.string().required('Plese Enter'),
  inputAutoComplete: Yup.array().min(1, 'Plese Enter').required('Plese Enter'),
  inputAutoCompleteMultiple: Yup.array().min(1, 'Plese Enter').required('Plese Enter'),
  inputSelect: Yup.string().required('Plese Enter'),
})

export default yupDemo
