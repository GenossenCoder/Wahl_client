import './App.css';
import Poll from './components/Poll'
import {useQuery,gql} from "@apollo/client"




const GET_POLLS = gql`
query{
  events {
    text
    title
    createdAt
    competitors
    deadline
    votes {
      voters
    }
  }
}
`


function App() {
  const Polls=useQuery(GET_POLLS)
  if(Polls.loading){
    return (
      <div className="App">
      <h1>Abstimmungen in der KVV</h1>
      <h1>loading...</h1>
    </div>
    )
  }
  else{
    return (
      <div className="App">
        <h1>Abstimmungen in der KVV</h1>
        {Polls.data.events.map(obj=>{
          return <Poll title={obj.title}text={obj.text} deadline={new Date(obj.deadline)} graph={obj.votes} competitors={obj.competitors}/>
        })}
      </div>
    )
  }}

export default App;
