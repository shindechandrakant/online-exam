import React from "react"
import "../style/questionpanel.css"


function QuestionPanel() {


    let arr = new Array(60);

    for(let x = 1; x <= 60; x++)  {

        arr[x-1] = x;
    }
    return (

        <div className="question_panel">

            <div className="sub_name">
                <p>Data structure</p>
                <button>End Test</button>
            </div>
            <div className="invalid_clicks">
                <p>Questions</p>
                <p>Warnings : 3/10</p>
            </div>
            <div className="overview">
                <p>10 answered</p>
                <p>Marked</p>
                <p>25 unanswered</p>
            </div>

            <div className="all_questions">
                {
                    arr.map((key, val) => {
                        return (
                            <p className="question_number" key={key}>{val}</p>
                        )
                    })
                }
            </div>
        
        </div>
    )
}


export default QuestionPanel;