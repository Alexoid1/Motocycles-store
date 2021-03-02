import './TestMoto.css'


const TestMoto = ({id, motocycle, date, city }) => {
    
    return (
    <div className="testBox">
        
       <p><strong>Model:</strong> {motocycle.name}</p>
       <div><img className="imageTe" src={motocycle.image}/></div>
       <p><strong>Date:</strong> {date}</p>
       <p><strong>City:</strong> {city}</p>
    </div>
    );
}
  
export default TestMoto;