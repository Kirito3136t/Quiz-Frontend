// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  const { user } = useSelector(state => state.auth);

  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-start justify-start">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">
          Hello <span className="font-bold text-blue-500 uppercase">{user.name}</span>, Are you ready to take on the quiz
        </h1>

        <div className="text-left mb-8">
          <h2 className="text-2xl font-bold mb-4  text-red-500">Instructions:</h2>
          <ul className="list-disc pl-4">
            <li className="mb-2">You will be asked 05 questions one after another.</li>
            <li className="mb-2">10 points are awarded for the correct answer.</li>
            <li className="mb-2">Each question has three options. You can choose only one option.</li>
            <li className="mb-2">You can review and change answers before the quiz finishes.</li>
            <li>Results will be declared at the end of the quiz.</li>
          </ul>
        </div>

        <div className="start">
          <Link
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
            to="/quiz"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
