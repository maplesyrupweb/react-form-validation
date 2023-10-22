/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/





export const name_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'write your name ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const city_validation = {
  name: 'city',
  label: 'city',
  type: 'text',
  id: 'city',
  placeholder: 'write your city ...',
  validation: {
    required: {
      value: true,
      message: 'city required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const state_validation = {
  name: 'state',
  label: 'state',
  type: 'text',
  id: 'state',
  placeholder: 'write your state/province ...',
  validation: {
    required: {
      value: true,
      message: 'state required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const country_validation = {
  name: 'country',
  label: 'country',
  type: 'text',
  id: 'country',
  placeholder: 'write your country ...',
  validation: {
    required: {
      value: true,
      message: 'country required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}



export const desc_validation = {
  name: 'description',
  label: 'description',
  multiline: true,
  id: 'description',
  placeholder: 'write description ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
}

export const password_validation = {
  name: 'password',
  label: 'password',
  type: 'password',
  id: 'password',
  placeholder: 'type password ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 8,
      message: 'min 8 characters',
    },
    pattern: {
      value:
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/,
      message: '1 uppercase, 1 lowercase, 1 number',
    },
  },
}

export const phone_number_validation = {
  name: 'phone_number',
  label: 'phone number',
  type: 'phone_number',
  id: 'phone_number',
  placeholder: 'phone number',
  validation: {
    required: {
      value: true,
      message: 'phone number required',
    },
    minLength: {
      value: 10,
      message: 'min 10 characters'
    },
    maxLength: {
      value: 14,
      message: 'max 14 characters',
    },
  },
}

export const email_validation = {
  name: 'email',
  label: 'email address',
  type: 'email',
  id: 'email',
  placeholder: 'write a random email address',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}


//add a dropdown validation