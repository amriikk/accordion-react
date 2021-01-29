import React, { useState } from 'react';
import TechQuestion from './Question';
import data from './data';

function App() {
  const [questions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>17 Tech Interview Questions</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <TechQuestion key={question.id} {...question}></TechQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
