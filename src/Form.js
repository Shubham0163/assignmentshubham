import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Checkbox, Radio, Button, FormControlLabel } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addRow } from './store/action';

const Form = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const submitForm = (data) => {
    dispatch(addRow(data));
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} style={{width:"250px",margin:"auto",display:"grid"}}>
      <TextField {...register('name', { required: true })} label="Name" error={!!errors.name} />
      <br />
      <TextField {...register('email', { required: true, pattern: /^\S+@\S+$/i })} label="Email" error={!!errors.email} />
      <br />
      <TextField {...register('contact', { required: true, pattern: /^[0-9]{10}$/ })} label="Contact" error={!!errors.contact} />
      <br />
      <FormControlLabel control={<Checkbox {...register('weekday')} />} label="Weekday" />
      <br />
      <FormControlLabel control={<Radio {...register('gender')} value="male" />} label="Male" />
      <FormControlLabel control={<Radio {...register('gender')} value="female" />} label="Female" />
      <br />
      <TextField {...register('dob', { required: true })} type="date" label="Date of Birth" error={!!errors.dob} InputLabelProps={{ shrink: true }} />
      <br />
      <Button type="submit" variant="contained">Submit</Button>
    </form>
  );
};

export default Form;
