// Lib
import React from 'react'
import type { NextPage } from 'next'
import { withFormik, Form } from 'formik'
import { Divider, TValueOption } from '@datability/8ui'

// Images
import LogoPNG from '@images/commons/logo.png?webp'

// Include in project
import Layout from '@layouts/index'
import { getLanguage } from '@i18n/index'
import yupHome from '@validations/yupHome.validate'
import {
  ButtonSection,
  DividerSection,
  InputSection,
  ManuSection,
  NotificationSection,
  LoadingSection,
  ModalConfirmSection,
  TableSection,
  ChipSection,
} from '@components/pages/Home'
import { TTable } from '@components/base/Table'

export type THome = {
  inputDate: string
  inputDateRange: (Date | null)[]
  inputNumber: number
  inputText: string
  inputPassword: string
  inputRadio: string
  inputCheckbox: string[]
  inputPhoneNumber: string
  inputTextarea: string
  inputAutoComplete: TValueOption[]
  inputAutoCompleteMultiple: TValueOption[]
  inputSelect: TValueOption | null
  table: TTable
}

const intitialValue: THome = {
  inputDate: '',
  inputDateRange: [null, null],
  inputNumber: 100.99,
  inputText: '',
  inputPassword: '',
  inputRadio: 'MALE',
  inputCheckbox: ['IPHONE'],
  inputPhoneNumber: '',
  inputTextarea: '',
  inputAutoComplete: ['MAC'],
  inputAutoCompleteMultiple: [],
  inputSelect: 'MAC',
  table: {
    filter: {
      name: '',
      nameShow: '',
      status: [],
      statusShow: [],
      ageMin: null,
      ageMax: null,
      ageMinShow: 0,
      ageMaxShow: 0,
      createdAt: [null, null],
    },
    sorts: {
      name: null,
      status: null,
      age: null,
      createdAt: null,
    },
    pagination: {
      pageSize: 25,
      totalPage: 3,
      totalItem: 75,
      currentPage: 1,
    },
  },
}

const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_STATE)
  return (
    <Layout>
      <Form className="column">
        <img src={LogoPNG} alt="Logo Datability" width={150} className="align-self" />
        <ButtonSection />
        <Divider />
        <ChipSection />
        <Divider />
        <DividerSection />
        <Divider />
        <ManuSection />
        <NotificationSection />
        <Divider />
        <LoadingSection />
        <Divider />
        <ModalConfirmSection />
        <Divider />
        <InputSection />
        <Divider />
        <TableSection />
        <Divider />
      </Form>
    </Layout>
  )
}

export async function getServerSideProps({ params }: any) {
  const language = getLanguage(params.lang)

  return {
    props: {
      language,
    },
  }
}

const EnhancedHome = withFormik({
  mapPropsToValues: () => ({
    ...intitialValue,
  }),
  validationSchema: yupHome,
  handleSubmit: () => {
    console.log('Skip')
  },
})(Home)

export default EnhancedHome
