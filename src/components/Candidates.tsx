import React from 'react';

function Candidates() {
  return (
    <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden shadow-md sm:rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                FullName
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                Score
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                Licence
              </th>
              <th scope="col" className="relative py-3 px-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    </div>
  );
}

export default Candidates;
