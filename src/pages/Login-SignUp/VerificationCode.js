import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import verificationImage from "../../assets/images/verification-image.webp"
import "./login-signup.css";
import { IoIosArrowBack } from "react-icons/io";

export default function VerificationCode() {

    return(
        <Fragment>
            <div className="md:grid md:grid-cols-2 ">
                <div className="">
                    <img src={verificationImage} className="h-screen w-full" alt="clothes"/>
                </div>

                <div className="mx-14 pt-10 md:mx-auto md:px-4">
                    <div className="">
                    <h2 className="font-bold text-3xl text-darkText md:text-left  text-center ">Check Email</h2>
                    <h3 className="mt-8 ">Please check your email inbox and click on the provided link to reset your
                    password.<br/> If you don’t receive email, <button className="text-primary font-bold">Click here to resend</button></h3>

                    

                    <div className="mt-8 flex items-center">
                    <IoIosArrowBack className="text-grayText mr-2"/>
                    <h4 className="font-medium text-base text-grayText">Back to <Link className="underline">Login</Link></h4>
                    </div>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}