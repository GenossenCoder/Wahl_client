import React from 'react'
import '../styles/Poll.css'
import {Tooltip, PieChart, Pie} from "recharts";


const Poll = (props) =>{
  let  pieChartData= [];
  let voters =[]
  let vote = {}
  let i=0
  const colors = ['#005f73','#0a9396','#94d2bd','#e9d8a6','#ee9b00','#ca6702']
  console.log(props.deadline)
  props.graph.map(obj=>{
    voters.push(obj.voters.length);
    vote["name"]=props.competitors[i];
    vote["votes"]=obj.voters.length;
    vote["fill"]=colors[i];
    pieChartData.push(vote)
    i=i+1
    vote={}
    return "hi"
  })
  if(props.deadline< new Date()){
  return (
    <div className="poll-container">
        <h1 className="poll-title">{props.title}</h1>
        <div className="poll-text">{props.text}</div>
        <div className="poll-deadline">Deadline: {props.deadline.toISOString()}</div>
        <div className="poll-chart">
        <PieChart height={400} width={400}>
         <Tooltip/>
         <Pie  data= {pieChartData} dataKey="votes"  cx="50%" cy="50%" outerRadius="60%" fill="blue" label/>
       </PieChart>
      </div>
    </div>
  )}
  else return (
    <div className="poll-container">
      <h1 className="poll-title">{props.title}</h1>
        <div className="poll-text">{props.text}</div>
        <div className="poll-deadline">Deadline: {props.deadline.toISOString()}</div>
      <h2>Diese Abstimmung ist noch nicht beendet</h2>
    </div>
  )
}

export default Poll