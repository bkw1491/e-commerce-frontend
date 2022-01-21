import Form from '@components/Form';
import Router from 'next/router';
import React from 'react';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { userLogin } from '@store/auth/actions';
import { IUser } from '@interfaces/IUser';


export default function Login() {
  //bring in pre-typed custom dispatch and selector hooks
  const { error } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    //stops page refeshing on submit
    e.preventDefault();
    //constructs set of key value pairs from form fields
    const form = new FormData(e.currentTarget);
    //convert key-value pairs into obj
    const creds = Object.fromEntries(form.entries()) as 
      Omit<IUser, "id" | "confirm">;
    //event triggered by dispatch contains call to api
    dispatch(userLogin(creds));
    //navigate to home page if success
    if(!error) { Router.push('/') }
  }

  return (

    <Form
      type={"login"}
      error={error}
      submit={handleSubmit}/>
  )
}
