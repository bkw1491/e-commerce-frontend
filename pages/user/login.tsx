import Form from "@components/Form";
import Router from "next/router";
import React from "react";

import { useEffect } from "react";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { userLogin } from "@store/auth/actions";
import { IUser } from "@interfaces/IUser";

export default function Login() {
	//bring in pre-typed custom dispatch and selector hooks
	const { error, authed } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (authed) Router.push("/");
	}, [authed]);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		//stops page refeshing on submit
		e.preventDefault();
		//constructs set of key value pairs from form fields
		const form = new FormData(e.currentTarget);
		//convert key-value pairs into obj
		const creds = Object.fromEntries(form.entries()) as Omit<
			IUser,
			"id" | "confirm"
		>;

		dispatch(userLogin(creds));
	}

	return <Form type={"login"} error={error} submit={handleSubmit} />;
}
