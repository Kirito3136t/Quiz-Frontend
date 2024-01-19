// Questions.jsx

import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchQuestion } from '../hooks/fetchQuestion';
import { updateResult } from '../hooks/setResult';

function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const questions = useSelector((state) => state.questions.queue[state.questions.trace]);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log({ trace, checked });
    dispatch(updateResult({ trace, checked }));
  }, [dispatch, trace, checked]);

  const onSelect = (i) => {
    onChecked(i);
    setChecked(i);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-white text-black p-4 rounded-md ">
      <h1 className="text-xl font-bold mb-4">{questions?.question}</h1>

      <ul key={questions?.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {questions?.options.map((q, i) => (
          <li key={i} className="bg-gray-200 hover:bg-gray-300 text-black p-3 rounded-md cursor-pointer">
            <input
              type="radio"
              value={true}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />
            <label htmlFor={`q${i}-option`} className="ml-2 cursor-pointer">
              {q}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
