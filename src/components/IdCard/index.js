
function IdCard(props) {
  
    console.log(props)

    return (
        <div style = {{border: "2px solid black", margin: "15px", display: "flex", justifyContent: "flex-start",
        alignItems:"center"}}>

            <img src={props.picture} alt="profile" style={{margin: "0px", padding: "0px"}}/>
            <div>
                <p style={{fontSize: "11px", textAlign: "left"}}><strong>First Name:</strong> {props.firstName}</p>
                <p style={{fontSize: "11px", textAlign: "left"}}><strong>Last Name:</strong> {props.lastName}</p>
                <p style={{fontSize: "11px", textAlign: "left"}}><strong>Gender:</strong> {props.gender}</p>
                <p style={{fontSize: "11px", textAlign: "left"}}><strong>Height:</strong> {props.height}</p>
                <p style={{fontSize: "11px", textAlign: "left"}}><strong>Birth:</strong>{props.birth}</p>
                
            </div>
           
        </div>
    )
};
export default IdCard;


