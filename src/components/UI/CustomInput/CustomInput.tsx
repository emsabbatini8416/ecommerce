import React from "react";

type CustomInputProps = {
  id?: string;
  name?: string;
  type?: 'text';
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  value?: string;
  infoMessage?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const CustomInput = ({
  id,
  name,
  label,
  error,
  errorMessage,
  infoMessage,
  onChange,
  ...rest
}: CustomInputProps, _ref: React.Ref<HTMLInputElement>) => {
  
  const innerRef = React.useRef<HTMLInputElement | null>(null);

  const handleRegisterAndStoreRef = React.useCallback((ref: any) => {
    if (_ref) {
      (_ref as Function)(ref);
    }
    innerRef.current = ref;
  }, [_ref]);
  console.log(name, error)
  return (
    <>
      <label htmlFor={id} className="form-label">{label}</label>
      <input 
        id={id}
        ref={handleRegisterAndStoreRef}
        name={name}
        className="form-control" 
        onChange={onChange}
        {...rest}
      />
      {
        infoMessage && (
          <small className="text-muted">{infoMessage}</small>
        )
      }
      {
        error && (
          <div className="invalid-feedback d-block">
            {errorMessage}
          </div>
        )
      }
    </>
  )

}

const ForwardedRefCustomInput = React.forwardRef(CustomInput);

export default ForwardedRefCustomInput;