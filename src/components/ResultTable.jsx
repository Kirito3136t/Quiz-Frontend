import React from 'react';

function ResultTable({earnPoints,attempts,flag}) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Results History</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Attempts</th>
            <th className="py-2 px-4 border-b">Points</th>
            <th className="py-2 px-4 border-b">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">Daily Tuition</td>
            <td className="py-2 px-4 border-b">{attempts||0}</td>
            <td className="py-2 px-4 border-b">{earnPoints || 0}</td>
            <td className={`text-lg ${flag ? 'text-green-500' : 'text-red-500'}`}>{flag ?"Passed" :"Failed" }</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
