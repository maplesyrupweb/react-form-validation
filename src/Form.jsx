/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🐯 Purpose: RENDERS FORM CONTEXT AND INPUTS
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Input } from './components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  message_validation,
  email_validation,
  phone_number_validation,
  password_validation,
  city_validation,
  state_validation,
  country_validation,
  start_date_validation,
  end_date_validation,
  number_adults_validation,
  number_children_validation
} from './utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'


export const Form = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation} />
          <Input {...email_validation} />
          <Input {...phone_number_validation} />
          <Input {...password_validation} />
          <Input {...city_validation} />
          <Input {...state_validation} />    
          
          
          
          
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          <Input {...start_date_validation}  />
          <Input {...end_date_validation}  />
          <Input {...number_adults_validation}  />
          <Input {...number_children_validation}  />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Input {...message_validation} className="md:col-span-2" />
        </div>

        <div className="mt-5">
          {success && (
            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
          <button
            onClick={onSubmit}
            className="p-5 rounded-md bg-blue-800 font-semibold text-white flex items-center gap-1 hover:bg-blue-400"
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
