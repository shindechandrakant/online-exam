import React from "react"
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import "../style/question.css"

const Options = ({options}) => {

    return (

        <div className="question_options">
            <p>
                <input type="radio" id="optionA"/>
                <label htmlFor="optionA">{options[0]}</label>
            </p>
            <p>
                <input type="radio" id="optionB"/>
                <label htmlFor="optionB">{options[1]}</label>
            </p>

            <p>
                <input type="radio" id="optionC"/>
                <label htmlFor="optionC">{options[2]}</label>
            </p>
            <p>
                <input type="radio" id="optionD"/>
                <label htmlFor="optionD">{options[3]}</label>
            </p>
        </div>

    )

}


function Question() {

    const options = ["Queue", "Stack", "Tree", "Heap"]

    return (
        <div className="question__panel">
            {/* Banner */}
            <div className="banner">
                <h3 className="host">Cs.. Exam project</h3>
                <h3 className="exam__counter">23.20</h3>
            </div>
            {/* Question Body */}
            <div className="question_body">
                <h4>The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line. The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line. The flex item's margin box is centered in the cross axis within the line.</h4>
                <Options options={options} />
            </div>
            {/* Question Actions */}
            <div className="actions">
                <button className="prev">Previous</button>
                <button><EmojiFlagsIcon/>Mark</button>
                <button>Save & next</button>
            </div>
        </div>
    )

}


export default Question;