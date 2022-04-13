import React from 'react';
import {useNavigate} from "react-router";

const inputStyle = `appearance-none  relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm `

function CandidateInfo({score}: any) {

    const [firstname, setFirstName] = React.useState('');
    const [lastname, setLastName] = React.useState('');

    const navigate = useNavigate();

    const saveCandidate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        fetch('https://driving-licence-app.herokuapp.com/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname,
                lastname,
                score
            })
        }).then(r =>navigate('/'))
    }
    return (
        <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-ehe-100">
            <div className="max-w-md w-full space-y-8">
                <div>
                    {/* <img className="mx-auto h-12 w-auto" src="" alt="logo" /> */}
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-poppins">
                        Save Your Score
                    </h2>
                </div>
                <form className="mt-8 space-y-8 ">
                    <div className="rounded-md shadow-sm flex flex-col gap-3">
                        <div>
                            <label className="font-medium">
                                First name
                            </label>
                            <input
                                name="firstName"
                                type="text"
                                required
                                className={inputStyle}
                                placeholder="firstName"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="font-medium" >
                                Last name
                            </label>
                            <input
                                name="lastName"
                                type="text"
                                autoComplete="current-password"
                                required
                                className={inputStyle}
                                placeholder="lastName"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="font-medium" >
                                Score
                            </label>
                            <input
                                type="text"
                                value={score}
                                readOnly={true}
                                className={inputStyle}

                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={(e) => saveCandidate(e)}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save Score
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CandidateInfo;