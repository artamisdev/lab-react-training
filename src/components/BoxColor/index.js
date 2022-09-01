
function BoxColor({r, g, b}) {

    return (
        
        <div style={{backgroundColor: `rgb(${r},${g},${b})`, width: "500px", heigth:"600px", border: "2px solid black"}}>
            <p>rgb({r},{g},{b})</p>
        </div>
    )

}

export default BoxColor;