import { FormControl, IInputProps, Input } from 'native-base'

interface InputProps extends IInputProps {
    label?: string
}

export default function InputComponent({label, placeholder, type} : InputProps) {
  return (
      <FormControl
          marginTop={3}
      >
          <FormControl.Label>{label}</FormControl.Label>
          
          <Input
              placeholder={placeholder}
              width={'full'}
              size={'lg'}
              borderRadius={'lg'}
              bgColor={'gray.100'}
              shadow={3}
              type={type}
          />
      </FormControl>
  )
}
