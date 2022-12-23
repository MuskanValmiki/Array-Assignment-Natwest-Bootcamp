function App(){
    const questionList = [
        {description: 'How to render list in React?', key: 0},
        {description: 'Do you like JS?', key: 1},
        {description: 'Do you know CSS?', key: 2}
      ];
    render(
        <ol>
            {questionList.map(question => {
            return (
                <li key={question.key}>{question.description}</li>
            );
            })}
        </ol>
    ) 
  }
  
export default App;