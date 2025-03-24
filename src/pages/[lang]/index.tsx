// Lib
import React from 'react'
import type { NextPage } from 'next'
import { withFormik, Form } from 'formik'
import { TValueOption } from '@datability/8ui'

// Include in project
import Layout from '@layouts/index'
import { getLanguage } from '@i18n/index'
import yupHome from '@validations/yupHome.validate'
import { TTable } from '@components/base/Table'
import dynamic from 'next/dynamic'

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

const Editor: NextPage = () => {
  let EditorPage = dynamic(() => import('../../components/shared/EditorComponent'), { ssr: false })

  return (
    <Layout>
      <Form className="column">
        <div className="p-6">
          <EditorPage />

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LXb3EKWsInQ?si=k-Cr7GXY4_JfrlQw"
            title="YouTube video player"
            // fra="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </Form>
    </Layout>
  )
}

export async function getServerSideProps({ params }: any) {
  const language = getLanguage(params.lang)
  return { props: { language } }
}

const EnhanceEditor = withFormik({
  mapPropsToValues: () => ({ ...intitialValue }),
  validationSchema: yupHome,
  handleSubmit: () => null,
})(Editor)

export default EnhanceEditor
