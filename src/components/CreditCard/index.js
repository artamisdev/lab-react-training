


function CreditCard({type, number,expirationMonth, expirationYear, bank, owner, bgColor, color}) {

    return(
        <div style={{width: "500px", heigth:"600px", BorderRadius: "30px", display: "flex", backgroundColor: `${bgColor}`, color: `${color}`,  }}>
            {type}
            <p> {number}</p>
            {expirationMonth}
            {expirationYear}
            {bank}
            {owner}
    
        </div>
    )
}
export default CreditCard;