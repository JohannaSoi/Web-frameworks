import React from "react";
import styles from'./Header.module.css';

export default function Header() {
  
    return (
        <div className={ styles.headerBackground }>
            <div className={ styles.container }>
                <div className={ styles.brand }>HELSINGIN SANOMAT</div>
                <div> Etusivu</div>
                <div>Uutiset</div>
                <div>Lehdet</div>  
                <div>Asiakaspalvelu</div>
                
                <div style={{color: 'blue', backgroundColor: 'white', padding: 8, borderRadius: 20, lenght: 3, "padding-top": 8, "padding-bottom": 8, "padding-left": 20, "padding-right":  20,  }}>    Tilaa    </div>
              <div> 
                  Kirjaudu
                Valikko</div>
            </div>
        </div>
    )
}