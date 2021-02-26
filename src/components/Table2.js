import './Table2.css'


const Table2 = ({model, speed, engine, power}) => {
    return (
    <table className="table2">
        <tr>
            <td className="td1"><strong>Model:</strong></td>
            <td className="td2">{model}</td>
        </tr>
        <tr>
            <td className="td1"><strong>Speed:</strong></td>
            <td className="td2">{speed} Km/h</td>
        </tr>
        <tr>
            <td className="td1"><strong>Engine:</strong></td>
            <td className="td2">{engine}</td>
        </tr>
        <tr>
            <td className="td1"><strong>Power:</strong></td>
            <td className="td2">{power}</td>
        </tr>
       
    </table>
    );
}
  
export default Table2;