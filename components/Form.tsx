import Link from 'next/link';
import InputField from '@components/InputField'
import React from 'react';


type FormProps = {
  type: "register" | "login"
  error: string
  submit: React.FormEventHandler<HTMLFormElement>
}


export default function Form({ type, error, submit }: FormProps) {

  return (

    <div className="relative top-24 w-full flex items-center justify-center py-12 px-5 sm:px-6 lg:px-8">

      <div className="max-w-md w-full space-y-12">

        {/* Title Section */}

        <section>
          <h2 className="text-center text-4xl font-semibold tracking-wide text-contrast">
            {type === "login" ? "Login" : "Register"}
          </h2>
          <p className="mt-2 text-center text-sm text-accent">
            Or{' '}

            <Link href={`/user/${type === "login" ? "register" : "login"}`}>
              <a className="font-medium text-accent_1 hover:text-accent_1_hover">
              {type === "login" ? "join the cause today" : "login to an existing account"}
              </a>
            </Link>

          </p>
        </section>

         {/* Error Messages */}
         <p className="text-center text-red-500">{error}</p>

        {/* Form Fields */}

        <form 
          className="mt-8"
          onSubmit={submit}>

            <InputField
              name={"email"}
              type={"email"}
              placeholder="Email address"/>


            <InputField
              name={"password"}
              type={"password"}
              placeholder="Password"/>
 
            {/* Confirm field rendered if form type register */}

            {type === "register" &&

              <InputField
                name={"confirm"}
                type={"password"}
                placeholder="Confirm password"/>
            }

          {/* Submit Button */}

          <button
            type="submit"
            className="relative w-full flex justify-center py-2 px-4 mt-10 border border-transparent text-sm font-medium rounded-md text-contrast bg-accent">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
