function Random({min, max}) {

    const random = Math.floor(Math.random()* max + min) ;


    return(
        <div style = {{border: "2px solid black", margin: "5px", fontSize: "15px"}}>

          <p>Valor randômico entre {min} e {max} é: {random}</p> 
          
        </div>
    )
}

export default Random;