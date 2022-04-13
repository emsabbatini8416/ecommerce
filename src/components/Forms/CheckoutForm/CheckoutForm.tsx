import React from "react";
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { useAppDispatch } from "../../../app/hooks";
import CustomInput from "../../UI/CustomInput";
import CustomSelect from "../../UI/CustomSelect";
import { clear } from '../../../slices/cartSlice';

const CheckoutForm = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const {
    control,
    formState,
    register,
    handleSubmit
  } = useForm({
    mode: "onChange"
  });

  const {
    errors
  } = formState;

  const onSubmit = React.useCallback((data) => {
    console.log(data)
    dispatch(clear());
    alert('Successfully!!!');
    history.push('/products')
  }, [history])

  return (
    <>
      <h4 className="mb-3">Billing address</h4>
      <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <CustomInput
              {...register('firstName', { required: true })}
              label="First name"
              type="text"
              error={!!errors.firstName}
              errorMessage="Valid first name is required"
            />
          </div>
          <div className="col-md-6 mb-3">
            <CustomInput
              {...register('lastName', { required: true })}
              label="Last name"
              type="text"
              error={!!errors.lastName}
              errorMessage="Valid last name is required"
            />
          </div>
        </div>
        <div className="mb-3">
          <CustomInput
            {...register('username', { required: true })}
            label="Username"
            type="text"
            error={!!errors.username}
            errorMessage="Your username is required"
          />
        </div>
        <div className="mb-3">
          <CustomInput
            {...register('email', { required: true })}
            label="Email"
            type="text"
            placeholder="you@example.com"
            error={!!errors.email}
            errorMessage="Please enter a valid email address for shipping updates"
          />
        </div>
        <div className="mb-3">
          <CustomInput
            {...register('address', { required: true })}
            label="Address"
            type="text"
            error={!!errors.address}
            errorMessage="Please enter your shipping address."
          />
        </div>
        <div className="mb-3">
          <CustomInput
            {...register('address2')}
            label="Address 2"
            type="text"
          />
        </div>

        <div className="row">
            <div className="col-md-5 mb-3">
              <Controller
                control={control}
                name="country"
                rules={{ required: true }}
                render={({ field: { value, onChange }, formState: { errors } }) => (
                  <CustomSelect 
                    value={value}
                    placeholder="Choose..."
                    label="Country"
                    onChange={onChange}
                    options={[{value: 'US', label: 'United States'}]}
                    error={!!errors.country}
                    errorMessage="Please provide a valid country."
                  />
                )}
              />
            </div>
            <div className="col-md-4 mb-3">
              <Controller
                control={control}
                name="state"
                rules={{ required: true }}
                render={({ field: { value, onChange }, formState: { errors } }) => (
                  <CustomSelect 
                    value={value}
                    placeholder="Choose..."
                    label="State"
                    onChange={onChange}
                    options={[{value: 'FL', label: 'Florida'}]}
                    error={!!errors.state}
                    errorMessage="Please provide a valid state."
                  />
                )}
              />
            </div>
            <div className="col-md-3 mb-3">
              <CustomInput
                {...register('zip', { required: true })}
                label="Zip"
                type="text"
                error={!!errors.zip}
                errorMessage="Zip code required."
              />
            </div>
        </div>
        
        <hr className="mb-4" />

        <div className="row">
          <div className="col-md-6 mb-3">
            <CustomInput
              {...register('cc-name', { required: true })}
              label="Name on card"
              type="text"
              error={!!errors['cc-name']}
              errorMessage="Name on card is required"
              infoMessage="Full name as displayed on card"
            />
          </div>
          <div className="col-md-6 mb-3">
            <CustomInput
              {...register('cc-number', { required: true })}
              label="Credit card number"
              type="text"
              error={!!errors['cc-number']}
              errorMessage="Credit card number is required"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <CustomInput
              {...register('cc-expiration', { required: true })}
              label="Expiration"
              type="text"
              error={!!errors['cc-expiration']}
              errorMessage="Expiration date required"
            />
          </div>
          <div className="col-md-3 mb-3">
            <CustomInput
              {...register('cc-security', { required: true })}
              label="CVV"
              type="text"
              error={!!errors['cc-security']}
              errorMessage="Security code required"
            />
          </div>
        </div>
        <hr className="mb-4" />
        <button className="btn btn-dark px-4 rounded-pill" type="submit">Place Order</button>
      </form>
    </>
  )
}

export default CheckoutForm;