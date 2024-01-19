// Quiz.jsx

import React, { useEffect, useState } from 'react';
import Questions from '../components/Questions';
import { useSelector, useDispatch } from 'react-redux';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/fetchQuestion';
import { PushAnswer } from '../hooks/setResult';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(result)
    // console.log(state)
  }, [result]);

  const onNext = () => {
    // console.log("next")
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());

      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }

    setCheck(undefined);
  };

  const onPrev = () => {
    // console.log("prev")
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  };

  const onChecked = (check) => {
    setCheck(check);
  };

  // finish exam
  if (result.length && result.length >= queue.length) {
    navigate('/result');
  }

  return (
    <div className="container bg-white text-black p-4 rounded-md shadow-lg my-4">

      {/* Display Question */}
      <Questions onChecked={onChecked} />

      <div className={`grid mt-4 ${trace > 0 ? 'grid-cols-2' : 'justify-center'}`}>
        {trace > 0 ? (
          <button
            className="btn prev bg-blue-500 hover:bg-blue-700 my-[10px] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            onClick={onPrev}
          >
            Prev
          </button>
        ) : (
          <></>
        )}
        <button
          className={`btn next bg-green-500 hover:bg-green-700 text-white font-bold my-[10px] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ${trace > 0 ? 'ml-2' : 'mt-4'}`}
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
