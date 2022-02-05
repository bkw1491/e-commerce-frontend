import React from "react";
import Router from "next/router";
import Form from "@components/Form";

import { useEffect } from "react";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { userRegister } from "@store/auth/actions";
import { IUser } from "@interfaces/IUser";
import { useAppSelector } from "@hooks/useAppSelector";

export default function Register() {
	//bring in pre-typed custom dispatch and selector hooks
	const { error, authed } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!authed) Router.push("/user/login");
	}, [authed]);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		//stops page refeshing on submit
		e.preventDefault();
		//constructs set of key value pairs from form fields
		const form = new FormData(e.currentTarget);
		//convert key-value pairs into obj
		const creds = Object.fromEntries(form.entries()) as Omit<IUser, "id">;
		//event triggered by dispatch contains call to api
		dispatch(userRegister(creds));
	}

	return <Form type={"register"} error={error} submit={handleSubmit} />;
}
