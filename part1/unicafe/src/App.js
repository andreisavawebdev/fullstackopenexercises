import React, { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => (
  <table>
    <tbody>
      <tr>
        <td style={{ width: '3.5rem' }}>{text}</td>
        <td>
          {value}
          {text === 'positive' && '%'}
        </td>
      </tr>
    </tbody>
  </table>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  if (total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={total} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleClickGood} text='good' />
      <Button onClick={handleClickNeutral} text='neutral' />
      <Button onClick={handleClickBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
