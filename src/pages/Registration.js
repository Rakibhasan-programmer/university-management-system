import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/seu_low.png";
import svgImage from '../assets/svg/registration.svg'
import Error from "../Components/ui/Error";
import { toast } from 'react-toastify';

export default function Registration() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("mehedi@gmail.com");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [firstName, setFirstName] = useState("mehedi");
    const [lastName, setLastName] = useState("hasan");
    const [phone, setPhone] = useState("01732490071");
    const [address, setAddress] = useState("dhaka");
    const [birthday, setBirthday] = useState("12 april, 1999");
    const [gender, setGender] = useState("male");
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault();

        if(password === repeatPassword){
            if(email && imageUrl && firstName && lastName && phone && address && birthday && gender){
                const obj = {
                    username: firstName + " " + lastName,
                    email,
                    password,
                    phone,
                    gender,
                    birthday,
                    address,
                    imageUrl
                }
                console.log(obj);
                fetch("https://seu-ums-api.herokuapp.com/api/auth/register", {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                })
                .then(res => res.json())
                .then(data => {
                    toast.success(data?.data?.message);
                    navigate("/")
                })
                .catch(err => toast.error(err?.error?.message))
            }
        }else{
            setError("Password not matched!")
        }
    }




  return (
    <div className="md:flex justify-center items-center h-screen ">
      <div
        className="mx-auto md:flex  justify-between items-center animate-zoomIn  bg-white py-6 rounded-lg"
        // style={{ boxShadow: "rgb(51 51 51 / 60%) 0px 0px 0px 1000px" }}
      >
        <form onSubmit={handleSubmit} className="w-96 mx-auto">
          <img
            className="w-24 mx-auto mt-0 md:-mt-14"
            src={logo}
            alt="seu_logo"
          />
          <h2 className="mb-6 mt-4 text-3xl font-bold text-center ">
            Create your Account
          </h2>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              id="floating_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlhtmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlhtmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="password"
                name="repeat_password"
                id="floating_repeat_password"
                value={repeatPassword}
                onChange={(e) => {
                  setError('');
                  setRepeatPassword(e.target.value);
                }}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlhtmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="url"
              name="imageUrl"
              id="imageUrl"
                value={imageUrl}
                onChange={(e) => {
                  setError('');
                  setImageUrl(e.target.value);
                }}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlhtmlFor="imageUrl"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Image url
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="firstName"
                id="floating_first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlhtmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="lastName"
                id="floating_last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlhtmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                name="phone"
                id="floating_phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlhtmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="address"
                id="floating_address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlhtmlFor="floating_address"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="birthday"
                id="floating_birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlhtmlFor="floating_birthday"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Birthday
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="gender"
                id="floating_gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlhtmlFor="floating_gender"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Gender
              </label>
            </div>
          </div>
          {error && <Error messages={error} />}
          <p className="mb-4 text-sm">
            Already have an account?{" "}
            <Link to="/">
              <span className="hover:underline text-red-500">Sign in</span>
            </Link>
          </p>
          <button
            // disabled={isLoading}
            type="submit"
            className="text-white bg-blue-700 disabled:cursor-not-allowed hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
          >
            {/* {isLoading ? "Loading..." : "Submit"} */} Submit
          </button>
        </form>
        <div className="w-1/2 mx-auto">
          <img className="w-full" src={svgImage} alt="" />
        </div>
      </div>
    </div>
  );
}
