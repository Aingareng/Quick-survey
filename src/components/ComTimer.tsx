import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSurvey } from "../contexts/SurveyContext";

const ComTimer = () => {
  const { state, dispatch } = useSurvey();

  const navigate = useNavigate();

  useEffect(() => {
    if (state.timer === 0) {
      navigate("/results");
    }
    const interval = setInterval(() => {
      dispatch({ type: "SET_TIMER", payload: state.timer - 1 });
    }, 1000);

    return () => clearInterval(interval);
  }, [state.timer, dispatch, navigate]);

  return (
    <div>
      <p className="text-3xl flex flex-row gap-1">
        <span 
          className=" border-b-2 border-purple-700 inline-block w-10"
          >
          {Math.floor(state.timer / 60)}
        </span>
        <span className=" inline-block w-10 border-b-2 border-purple-700">
          {String(state.timer % 60).padStart(2, "0")}
        </span>
      </p>
    </div>
  );
};

export default ComTimer;
