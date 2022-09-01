function Greetings({lang, children}) {

    return (
        <div style = {{border: "2px solid black", margin: "10px", display: "flex", fontSize: "18px"}}>

            {lang === 'de' &&
            <p style={{margin: "5px"}}>Hallo {children}</p>
            }
            {lang === 'en' &&
            <p style={{margin: "5px"}}>Hello {children}</p>
            }
            {lang === 'es' &&
            <p style={{margin: "5px"}}>Hola {children}</p>
            }
            {lang === 'fr' &&
            <p style={{margin: "5px"}}>Bonjour {children}</p>
            }

        </div>
    )
}

export default Greetings;