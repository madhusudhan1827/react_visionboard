import logo from './logo.svg';
import './App.css';

function App() {
  const VisionBoxobj ={title:'Health',list1:'The Miracle Morning',list2:'Mini habits',list3:'Feeling Good',list4:'Make Time'}
  
  const VisionBoxArr =[
    {title:'health',list1:'The Miracle Morning',list2:'Mini habits',list3:'Feeling Good',list4:'Make Time'},
    {title:'carrer',list1:'The 7 habits of highly effective people',list2:'Deep work',list3:'Thinking, fast and slow',list4:'Experience'},
    {title:'wealth',list1:'Living Forward',list2:'The 4-hour workweek',list3:'168 hours',list4:'Declutter your Mind'},
    {title:'travel',list1:'The Miracle Morning',list2:'Beyond order',list3:'The Maic of Thinking Big',list4:'Make Time'},
    {title:'family',list1:'Eat the frog',list2:'Make your bed',list3:'12 Rules for life',list4:"Can't hurt me"},
    {title:'lifestyle',list1:'Essentialism',list2:'Make time',list3:'Declutter your Mind',list4:'Make your bed'},
    {title:'hobbies',list1:'Music',list2:'Future Dreaming',list3:'Motoring',list4:'Trying to add new Friends'},
    {title:'Knowledge',list1:'Education',list2:'Life lesson',list3:'Family Politics',list4:'Never stop dreaming'},
    {title:'Love',list1:'Essential',list2:'Make time',list3:'Set a goal',list4:'Make a path to Goal'}
  ]


  const VisionBoard = VisionBoxArr.map((product) =>{
  console.log(product)
  
  return (
  <div className="VisionBox">
    <div className="VisionBoxHead">
      <h5>{product.title}</h5>
    </div>
    <div className="VisionBoxList">
     <ul>
      <li>{product.list1}</li>
      <li>{product.list2}</li>
      <li>{product.list3}</li>
      <li>{product.list4}</li>
     </ul>
    </div>
  </div>
  )
  }

  )
  return (
    <div className="App">
      <div className="VisionHeading">
        <h1>Vision Board</h1>
        <h4>Make it happen</h4>
      </div>

      <div className="VisionBoxCenter"></div>
      {VisionBoard}
    </div>
  );
}

export default App;
