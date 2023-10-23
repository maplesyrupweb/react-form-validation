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
  placeholder: 'Full name',
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
  placeholder: 'City',
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
  placeholder: 'state/province',
  validation: {
    required: {
      value: true,
      message: 'state/province',
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
  placeholder: 'country',
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



export const message_validation = {
  name: 'message',
  label: 'message',
  multiline: true,
  id: 'message',
  placeholder: 'message',
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

// 8 characters, 1 uppercase, 1 lowercase, 1 number
export const password_validation = {
  name: 'password',
  label: 'password',
  type: 'password',
  id: 'password',
  placeholder: 'password',
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

export const start_date_validation = {
  name: 'start_date',
  label: 'start date',
  type: 'date',
  id: 'start_date',
  placeholder: 'start date',
  validation: {
    required: {
      value: true,
      message: 'start date required',
    } 
  }
}

export const end_date_validation = {
  name: 'end_date',
  label: 'end date',
  type: 'date',
  id: 'end_date',
  placeholder: 'end date',
  validation: {
    required: {
      value: true,
      message: 'end date required',
    } 
  }
}


export const number_adults_validation = {
  name: 'number_adult',
  label: 'adult(s)',
  type: 'number',
  id: 'adult_number',
  placeholder: '0',
  validation: {
    required: {
      value: true,
      message: 'number required',
    } 
  }
}

export const number_children_validation = {
  name: 'number_children',
  label: 'children',
  type: 'number',
  id: 'number_children',
  placeholder: '0',
  validation: {
    required: {
      value: true,
      message: 'number required',
    } 
  }
}



export const email_validation = {
  name: 'email',
  label: 'email',
  type: 'email',
  id: 'email',
  placeholder: 'email',
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