import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Content, Footer } from './styles';

//Graph tool
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

//Array to span type 
const span = {
  type: "span",
  timestamp: "",
  begin: "",
  end: "",
};

//Array to start type 
const start = {
  type: "start",
  timestamp: "",
  select: ["min_response_time", "max_response_time"],
  group: ["os", "browser"]
};

//Array to stop type
const stop = {
  type: "stop",
  timestamp: ""
};

export default function Home(){

  //Array created to data type 
  //for the purpose of creating an array list
  const EMPTY_OBJECT = {
    type: "data",
    os: "",
    browser: "",
    min_response_time: "",
    max_response_time: "",
    timestamp: Math.floor(Date.now() / 1000)
  };

  //object variables to maintain and save data
  const [tempObject, setTempObject] = useState(EMPTY_OBJECT);
  const [inputData, setInputData] = useState([]);
  const [inputStart, setInputStart] = useState([]);
  const [inputSpan, setInputSpan] = useState([]);
  const [inputStop, setInputStop] = useState([]);

  //Function to save data save data from manual data entries
  const handleInputData = e => {
    const { name, value } = e.target;
    setTempObject({ ...tempObject, [name]: value });
  };

  //Function remove data before function of deleting an array after it is created
  const handleRemoveData = index => {
    const list = [...inputData];
    list.splice(index, 1);
    setInputData(list);
  };

  //Function for adding data from manual user entries to the list of object arrays
  const handleAddData = () => {
    setInputData([...inputData, tempObject]);
    setTempObject(EMPTY_OBJECT);

    //Save first timestamp data in arrays
    //who need the first timestamp
    if(inputData.length > 0 && inputData.length<=1){
      start.timestamp = inputData[0].timestamp;
      span.timestamp = inputData[0].timestamp;
      span.begin = inputData[0].timestamp;
      setInputStart([...inputStart, start]);
  
      stop.timestamp = inputData[0].timestamp;
      span.begin = inputData[0].timestamp;
    
      setInputSpan([...inputSpan, span]);
      setInputStop([...inputStop, stop]);
  
    }
    //Save last timestamp data in arrays
    //who need the last timestamp
    if(inputData.length > 0 && inputStop.length > 0 && inputSpan.length > 0){
      inputStop[0].timestamp = inputData[inputData.length-1].timestamp;
      inputSpan[0].end = inputData[inputData.length-1].timestamp;
    }

  };

  //Temporary array in order to receive new manual entry data
  const {
    os,
    browser,
    min_response_time,
    max_response_time,
    timestamp
  } = tempObject;
  
  //convert object to string array
  const convert = inputData.map(function(obj) {
    return Object.keys(obj).map(function(chave) {
        return obj[chave];
    });
  });

  /**XAxys is timestamp data in convert array is position 5
   * YAxys is max_response_time in convert array is position 4
   * Legend is the os and browser in convert array
   * 
   * 
    all functions and variables used in this project were 
    chosen according to the ease of development and 
    application, aiming to make the project simple and punctual
    
    In relation to dealing with a large amount of data, one solution would be to 
    limit the amount that can be inserted or to use temporary variables
  */

  return (
    <>
      <Header>
        <h1>Bianca's Challenge</h1>
      </Header>

      <Content>
        <div id="Box">
          <select name="os" value={os} onChange={e => handleInputData(e)}>
            <option value="" disabled>
              browser
            </option>
            <option>windows</option>
            <option>mac</option>
            <option>linux</option>
          </select>
          <select
            name="browser"
            value={browser}
            onChange={e => handleInputData(e)}
          >
            <option value="" disabled>
              os
            </option>
            <option>chrome</option>
            <option>firefox</option>
            <option>edge</option>
          </select>
          <input
            type="number"
            name="min_response_time"
            min="0"
            step="0.1"
            placeholder="Min response time"
            value={min_response_time}
            onChange={e => handleInputData(e)}
          />
          <input
            type="number"
            name="max_response_time"
            min="0"
            step="0.1"
            placeholder="Max response time"
            value={max_response_time}
            onChange={e => handleInputData(e)}
          />
          <input
            type="number"
            name="timestamp"
            id="time"
            value={timestamp}
            onChange={e => handleInputData(e)}
          />
          <button onClick={handleAddData}> + </button>

          <ol>
            {inputStart.map((st) => (
              <li>{JSON.stringify(st)}</li>
            ))}

            {inputSpan.map((sp) => (
              <li>{JSON.stringify(sp)}</li>
            ))}

            
                {inputData.map((x, i) => {
                  return (
                    <li>
                      {JSON.stringify(x)}
                      <button onClick={e => handleRemoveData(i)}> - </button>
                    </li>);
                })}
           

            {inputStop.map((stp) => (
              <li>{JSON.stringify(stp)}</li>
            ))}

          </ol>

        </div>

        <div id="graph">
        <LineChart width={730} height={250} data={convert}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="5" />
        <YAxis dataKey="4"/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="1" stroke="#8884d8" />
        <Line type="monotone" dataKey="2" stroke="#82ca9d" />
      </LineChart>
        </div>
      </Content>
    <Footer>
    <Link to="/">Generate Chart</Link>
      </Footer>
    </>
  );
} 