import React from 'react';
import UseFetch from "../Hook/useFetch";
import {useNavigate} from "react-router";

function Candidates() {
  const navigate = useNavigate()
  const {data} = UseFetch('https://driving-licence-app.herokuapp.com/user/all');
  console.log(data)
  return (
    <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
      <div className="flex justify-between">
      <h1 className="text-3xl font-medium py-8">Candidates</h1>
        <button onClick={() => navigate('/')} className="px-3 h-12 font-medium rounded-md text-white bg-red-400">logout</button>
      </div>
      <div className="overflow-hidden shadow-md sm:rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                First Name
              </th>
              <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                Last Name
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                Score
              </th>


            </tr>
          </thead>

          <tbody >
          {data &&
            data.users.map((candidate:any) => (

          <tr key={candidate._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {candidate.firstname}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {candidate.lastname}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {candidate.score}
            </td>
          </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Candidates;
