console.log("hello");
   class New extends React.Component{
    render(){
  return(<div id="draw">
           <li>Home</li>
           <li>Search</li>
           <li>Location</li>
           <li>Settings</li>
           <li>Log in</li>
           <li>Help</li>
           </div>)}
        }
        
    ReactDOM.render(
        <New/>,
        document.getElementById('root_1')
    )
  class Slid extends React.Component{
    render(){
    return(<div><table>
      <tr><td><img width="100%" src="https://cdn.pixabay.com/photo/2017/09/28/14/05/scissors-2795641__480.png"/>salon</td>
      
    <td><img width="70%" src="https://cdn.pixabay.com/photo/2012/04/30/10/05/alligator-44598__480.png"/>Geyser</td>
    <td><img width="100%" src="https://cdn.pixabay.com/photo/2020/11/06/05/55/wall-5716894__480.png"/>Painting</td>
      </tr>
      <tr>
    <td><img width="50%" src="https://cdn.pixabay.com/photo/2020/06/15/16/57/hand-sanitizer-5302594__480.png"/>DisInfectant</td>
    <td>
        <img width="40%" src="https://cdn.pixabay.com/photo/2012/04/12/10/41/fly-swatter-29407__480.png"/><br/>Pest Control
    </td>
    <td><img width="100%" src="https://cdn.pixabay.com/photo/2020/12/07/19/32/laptop-5812675__480.png"/>Shiping</td>
      </tr>
  </table> </div>)
    }
  }
  
 ReactDOM.render(
   <Slid/>,document.getElementById('upco')
   )
   
 class Newro extends React.Component{
   render(){
     return(<div><div id="service">
     <img id="tap_ser" src="https://cdn.pixabay.com/photo/2017/09/26/11/11/plumber-2788334__480.jpg" width="40%"/>

     
     <img id="sink_bl" src="https://cdn.pixabay.com/photo/2021/01/23/07/49/pastel-color-5941889__480.png" width="40%"/>
    
     
     <img id="Floor" src="https://cdn.pixabay.com/photo/2021/02/02/19/38/pissuar-5975081__480.jpg" width="40%"/>
     <img id="Pest" src="https://cdn.pixabay.com/photo/2018/04/07/08/34/spider-3298007__480.png" width="40%"/>

     
     <img id="flush" src="https://cdn.pixabay.com/photo/2020/09/18/11/01/toilet-5581516__480.png" width="40%"/>
     <img id="body_mas" src="https://cdn.pixabay.com/photo/2020/11/29/07/06/aroma-5786653__480.png" width="40%"/>
 <p id="ser">TapService</p><p id="sar">SinkBlockage</p>
 <p id="saq">FloorTiles</p><p id="soq">PestControl</p>
 <p id="qos">Flush service</p>
 <p id="pes">Pesticide</p>
 </div></div>)
   }
 }
 ReactDOM.render(
   <Newro/>, document.getElementById('root_2')
   )