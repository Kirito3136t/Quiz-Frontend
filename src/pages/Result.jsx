import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResultTable from '../components/ResultTable';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { resetAllAction } from '../features/auth/question/questionReducer';
import { resetResultAction } from '../features/auth/result/resultReducer';
import { attempts_Number, earnPointsNumber, flagResult } from '../helper/Helper';
import { usePublishResult } from '../hooks/setResult';

function Result() {
  const dispatch = useDispatch();

  const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);

  useEffect(() => {
    console.log(flag);
  }, []);

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPointsNumber(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  const onRestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
    console.log("restart");
  };

  const {user} = useSelector(state=>state.auth)

  usePublishResult({result:result,username:user.email,attempts,points:earnPoints,achieved:flag ? "Passed" : "Failed"})

  console.log({result:result,username:user.email,attempts,points:earnPoints,achieved:flag ? "Passed" : "Failed"})

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Quiz Result</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="result-item">
          <span className="text-lg font-bold">Username:</span>
          <span className="text-lg"> {user.email || "Anonymous"}</span>
        </div>
        <div className="result-item">
          <span className="text-lg font-bold">Total Quiz Points:</span>
          <span className="text-lg"> {totalPoints || 0}</span>
        </div>
        <div className="result-item">
          <span className="text-lg font-bold">Total Questions:</span>
          <span className="text-lg"> {queue.length || 0}</span>
        </div>
        <div className="result-item">
          <span className="text-lg font-bold">Total Attempts:</span>
          <span className="text-lg"> {attempts || 0}</span>
        </div>
        <div className="result-item">
          <span className="text-lg font-bold">Total Earn Points:</span>
          <span className="text-lg"> {earnPoints || 0}</span>
        </div>
        <div className="result-item">
          <span className="text-lg font-bold">Quiz Result:</span>
          <span className={`text-lg ${flag ? 'text-green-500' : 'text-red-500'}`}> {flag ? 'Passed' : 'Failed'}</span>
        </div>
      </div>
      <ResultTable earnPoints={earnPoints} attempts={attempts} flag={flag}/>
      <div className="result-item mt-10">
        <Link
          to="/"
          onClick={onRestart}
          className="text-lg font-bold text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded shadow-md transition duration-300 ease-in-out"
        >
          Restart
        </Link>
      </div>
    </div>
  );
  
}

export default Result;
