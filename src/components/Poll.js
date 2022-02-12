import React from 'react'
import '../styles/Poll.css'
import {Tooltip, PieChart, Pie} from "recharts";


const Poll = (props) =>{
  let  pieChartData= [];
  let voters =[]
  let vote = {}
  let i=0
  props.graph.map(obj=>{
    voters.push(obj.voters.length);
    vote["name"]=props.competitors[i]
    vote["votes"]=obj.voters.length;
    pieChartData.push(vote)
    console.log(obj.voters)
    i=i+1
    
    vote={}
    return "hi"
  })
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
  )
}

export default Poll