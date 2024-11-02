'use client';

import Button from "./components/Button";
import Input from "./components/Input";
import Content from "./components/Content";
import Container from "./components/Container";
import { useState } from "react";

export default function Home() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [digiting, setDigiting] = useState(false);
  const [isResult, setIsResult] = useState(false);

  const handleOnClear = () => { 
    setCurrentNumber('0');
    setFirstNumber('0');
    setDigiting(false);
  }
  const handleAddNumber = (number:String) => {
    //setCurrentNumber(prev =>  (  (prev == '0' ? '' : String(prev)) + number))
    if (digiting == false) {
      setCurrentNumber(prev => '' + number );
      setDigiting(true);
      console.log('começando a digitar');
    }else{
      setCurrentNumber(prev => String(prev) + number );
      console.log('já começei a digitar');
    }

  } 
  const handleSumNumbers = () => {
    if(firstNumber == '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('+');
      setDigiting(false);
      console.log('primeiro numero a somar: '+ firstNumber);
    }else {
      const sum: number = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber(String(sum));
      setOperation('');
      setDigiting(false);
      setIsResult(true);
      console.log('somou, first number: '+ firstNumber);
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber == '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('-');
      setDigiting(false);
    }else {
      const rem: number = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(rem));
      setFirstNumber(String(rem))
      setOperation('');
      setDigiting(false)
      
    }
  }
  const handleMultiplyNumbers = () => {
    if(firstNumber == '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('*');
    }else {
      const mult: number = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber('0');
      setOperation('');
    }
  }
  const handleDivideNumbers = () => {
    if(firstNumber == '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('/');
    }else {
      const div: number = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setFirstNumber('0');
      setOperation('');
    }
  }
  

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;  
        case '/':
          handleDivideNumbers();
          break;  
        default:
          break;
      }
    }
  } 
  


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <div className="h-80 grid grid-rows-4 grid-flow-col  ">
          <Button label="X" onClick={handleMultiplyNumbers} />
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="1" onClick={() => handleAddNumber('1')} />

          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />

          <Button label="C" onClick={() => handleOnClear()} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />

          <Button label="Calc" onClick={() => handleAddNumber('')} />
          <Button label="-" onClick={handleMinusNumbers} />
          <Button label="+" onClick={handleSumNumbers} />
          <Button label="=" onClick={handleEquals} />

        </div>


      </Content>
    </Container>
  );
}
