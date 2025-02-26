// Lib
import React from 'react'
import {
  Input,
  InputAutoComplete,
  InputCheckbox,
  InputDateRangePicker,
  InputNumber,
  InputPassword,
  InputRadio,
  InputSelect,
  InputTextarea,
} from '@datability/8ui'

// Images

// Include in project
import styles from '../ButtonSection/index.module.scss'

const InputSection: React.FC = () => {
  return (
    <div className={`column ${styles.gap}`}>
      <h2>Input</h2>
      <p>
        The <small className={styles.code}>Input</small> have props name, label, type, placeholder, disabled, require
        and fullWidth.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <Input name="inputDate" label="Type Date" type="date" require />
        <Input name="inputText" label="Type Text" require placeholder="placeholder" />
      </div>
      <p>
        The <small className={styles.code}>InputNumber</small> have props name, label, placeholder, disabled, require,
        fullWidth and isPhoneNumber.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <InputNumber name="inputNumber" label="Number" require />
        <InputNumber name="inputPhoneNumber" label="Phone Number" require isPhoneNumber />
      </div>
      <p>
        The <small className={styles.code}>InputDateRangePicker</small> have props name, label, disabled, require and
        fullWidth.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <InputDateRangePicker name="inputDateRange" label="Date Range" require />
      </div>
      <p>
        The <small className={styles.code}>InputPassword</small> have props name, label, placeholder, disabled, require
        and fullWidth.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <InputPassword name="inputPassword" label="Password" require />
      </div>
      <p>
        The <small className={styles.code}>InputRadio</small> have props name, label, disabled, require, fullWidth and
        options.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <InputRadio
          name="inputRadio"
          label="Radio"
          require
          options={[
            { label: 'Male', value: 'MALE' },
            { label: 'Female', value: 'FEMALE' },
          ]}
        />
      </div>
      <p>
        The <small className={styles.code}>InputCheckbox</small> have props name, label, disabled, require, fullWidth
        and options.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <InputCheckbox
          name="inputCheckbox"
          label="Checkbox"
          require
          options={[
            { label: 'IPhone', value: 'IPHONE' },
            { label: 'OPPO', value: 'OPPO' },
          ]}
        />
      </div>
      <p>
        The <small className={styles.code}>InputTextarea</small> have props name, label, placeholder, disabled, require,
        fullWidth, rows and cols.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <InputTextarea name="inputTextarea" label="Input Textarea" require />
      </div>
      <p>
        The <small className={styles.code}>InputAutoComplete</small> have props name, label, placeholder, disabled,
        require, fullWidth, options and isMultiple.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <InputAutoComplete
          name="inputAutoComplete"
          label="Input AutoComplete"
          require
          options={[
            { label: 'Mac', value: 'MAC' },
            { label: 'Win', value: 'WIN' },
          ]}
        />

        <InputAutoComplete
          name="inputAutoCompleteMultiple"
          label="Input AutoComplete Multiple"
          require
          options={[
            { label: 'Mac', value: 'MAC' },
            { label: 'Win', value: 'WIN' },
          ]}
          isMultiple
        />
      </div>

      <p>
        The <small className={styles.code}>InputSelect</small> have props name, label, placeholder, disabled, require,
        fullWidth, onChange and options.
      </p>
      <div className={`${styles.box} row justify-center align-center flex-wrap`}>
        <InputSelect
          name="inputSelect"
          label="Input Select"
          require
          options={[
            { label: 'Mac', value: 'MAC' },
            { label: 'Win', value: 'WIN' },
          ]}
        />
      </div>
    </div>
  )
}

export default InputSection
