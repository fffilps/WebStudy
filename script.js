const HTMLQuestionsDiv = document.getElementById('HTMLQuestionsDiv');
const CSSQuestionsDiv = document.getElementById('CSSQuestionsDiv');
const JSQuestionsDiv = document.getElementById('JSQuestionsDiv');
const GeneralDiv = document.getElementById('GeneralDiv');
const StringDiv = document.getElementById('StringDiv');
const ArrayDiv = document.getElementById('ArrayDiv');
const FunctionDiv = document.getElementById('FunctionDiv');

let HTML_QUESTIONS = QUESTIONS[0]['HTML']
let CSS_QUESTIONS = QUESTIONS[1]['CSS']
let JAVASCRIPT_QUESTIONS = QUESTIONS[2]['Javascript']
let GENERAL_QUESTIONS = JAVASCRIPT_QUESTIONS[0]['General']
let STRING_QUESTIONS = JAVASCRIPT_QUESTIONS[1]['String']
let ARRAY_QUESTIONS = JAVASCRIPT_QUESTIONS[2]['Array']
let FUNCTION_QUESTIONS = JAVASCRIPT_QUESTIONS[3]['Function']


for (let x = 0; x < HTML_QUESTIONS.length; x++) 
{
   
    HTMLQuestionsDiv.innerHTML += `<figure class="card">
    <img src='./MockBackground-01.png' alt='grainy sand looking background by J'mari'>
    <figcaption>
    <h3>${HTML_QUESTIONS[x].question}</h3>
    <p>${HTML_QUESTIONS[x].answer1}
    </p>
    <p>${HTML_QUESTIONS[x].answer2}</p>
    ${HTML_QUESTIONS[x].answer3 ? `<p>${HTML_QUESTIONS[x].answer3}</p>` : '<p style="display: none;"></p>'}
    </figcaption>
    </figure>`
}

for (let x = 0; x < CSS_QUESTIONS.length; x++) 
{
    CSSQuestionsDiv.innerHTML += `<figure class="card">
    <img src='./MockBackground-01.png' alt='grainy sand looking background by J'mari'>
    <figcaption>
    <h3>${CSS_QUESTIONS[x].question}</h3>
    <p>${CSS_QUESTIONS[x].answer1}
    </p>
    <p>${CSS_QUESTIONS[x].answer2}</p>
    ${CSS_QUESTIONS[x].answer3 ? `<p>${CSS_QUESTIONS[x].answer3}</p>` : '<p style="display: none;"></p>'}
    ${CSS_QUESTIONS[x].answer4 ? `<p>${CSS_QUESTIONS[x].answer4}</p>` : '<p style="display: none;"></p>'}
    </figcaption>
    </figure>`
}

for(let x = 0; x < GENERAL_QUESTIONS.length; x++) {
   
    GeneralDiv.innerHTML += `<figure class="card">
    <img src='./MockBackground-01.png' alt='grainy sand looking background by J'mari'>
    <figcaption>
    <h3>${GENERAL_QUESTIONS[x].question}</h3>
    <p>${GENERAL_QUESTIONS[x].answer1}
    </p>
    <p>${GENERAL_QUESTIONS[x].answer2}</p>
    ${GENERAL_QUESTIONS[x].answer3 ? `<p>${GENERAL_QUESTIONS[x].answer3}</p>` : '<p style="display: none;"></p>'}
    
    </figcaption>
    </figure>`
}

for(let x = 0; x < STRING_QUESTIONS.length; x++) {
   
    StringDiv.innerHTML += `<figure class="card">
    <img src='./MockBackground-01.png' alt='grainy sand looking background by J'mari'>
    <figcaption>
    <h3>${STRING_QUESTIONS[x].question}</h3>
    <p>${STRING_QUESTIONS[x].answer1}
    </p>
    <p>${STRING_QUESTIONS[x].answer2}</p>
    ${STRING_QUESTIONS[x].answer3 ? `<p>${STRING_QUESTIONS[x].answer3}</p>` : '<p style="display: none;"></p>'}
    </figcaption>
    </figure>`
}

for(let x = 0; x < ARRAY_QUESTIONS.length; x++) {
   
    ArrayDiv.innerHTML += `<figure class="card">
    <img src='./MockBackground-01.png' alt='grainy sand looking background by J'mari'>
    <figcaption>
    <h3>${ARRAY_QUESTIONS[x].question}</h3>
    <p>${ARRAY_QUESTIONS[x].answer1}
    </p>
    <p>${ARRAY_QUESTIONS[x].answer2}</p>
    ${ARRAY_QUESTIONS[x].answer3 ? `<p>${ARRAY_QUESTIONS[x].answer3}</p>` : '<p style="display: none;"></p>'}
    </figcaption>
    </figure>`
}

for(let x = 0; x < FUNCTION_QUESTIONS.length; x++) {
   
    FunctionDiv.innerHTML += `<figure class="card">
    <img src='./MockBackground-01.png' alt='grainy sand looking background by J'mari'>
    <figcaption>
    <h3>${FUNCTION_QUESTIONS[x].question}</h3>
    <p>${FUNCTION_QUESTIONS[x].answer1}
    </p>
    <p>${FUNCTION_QUESTIONS[x].answer2}</p>
    ${FUNCTION_QUESTIONS[x].answer3 ? `<p>${FUNCTION_QUESTIONS[x].answer3}</p>` : '<p style="display: none;"></p>'}
    </figcaption>
    </figure>`
}

