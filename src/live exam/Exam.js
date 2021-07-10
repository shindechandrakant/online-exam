import React from "react"
import Actions from "./Actions";

import "../style/exam.css"

import Question from "./Question";
import QuestionPanel from "./QuestionPanel";




function Test() {

    return (
        <div className="exam__section">
            <div className="question">
                <Question />
            </div>
            <QuestionPanel />
        </div>
    )
}


export default Test;