type CustomSelectProps = {
  id?: string
  name?: string
  label?: string
  placeholder?: string
  options: any[],
  value: any | string
  error?: boolean
  errorMessage?: string
  onChange: (e: any) => void
}

const CustomSelect = ({ label, placeholder, options, error, errorMessage, ...rest }: CustomSelectProps) => {
  return (
    <>
      { 
        label &&
          <label htmlFor="country" className="form-label">{label}</label>
      }
      <select className="form-select d-block w-100" {...rest}>
        {
          placeholder &&
            <option value="">{placeholder}</option>
        }
        {
          options.map((opt: any) =>(<option key={opt.value} value={opt.value}>{opt.label}</option>) )
        } 
      </select>
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

export default CustomSelect;