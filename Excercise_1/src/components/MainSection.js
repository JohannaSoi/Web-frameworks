import React from 'react'
import styles from'./MainSection.module.css';


export default function MainSection(props) {
    return (
        <div>
            
        <div className= { styles.container }>
        <hr  style={{
              color: '#000000',
             backgroundColor: '#000000',
             borderColor : 'light-gray'
        }}/>
        <span className={ styles.header }>{ props.topic }Eläimet</span> { props.body }
            
              
                <img

                  src="https://www.spiik.net/wp-content/uploads/2020/04/kittens.jpg" 
                  height={450}
                  width={750}
                  />

<span className={ styles.some}>{ props.topic }Kissaeläimet  |</span> { props.body }
<span className={ styles.much}>{ props.topic }Kissan kehräämisen on havaittu ehkäisevän verenpainetautia ja sydänongelmien muodostumista. </span> { props.body }

<hr  style={{
              color: '#000000',
             backgroundColor: '#000000',
             borderColor : 'light-gray'
        }}/>

       <div>
                <span className={ styles.header }>{ props.topic }Ulkomaat</span> { props.body }

                <img

                src="https://images.hindustantimes.com/img/2021/09/14/550x309/pjimage_(32)_1631589148734_1631589172689.jpg" 
                height={450}
                width={750}
                />
<span className={ styles.some}>{ props.topic }Met-gala  |</span> { props.body }
<span className={ styles.much}>{ props.topic }Amerikassa järjestettyn Met-gaalan puvuston hitit ja hudit.</span> { props.body }
         
<hr  style={{
              color: '#000000',
             backgroundColor: '#000000',
             borderColor : 'light-gray'
        }}/>

         '</div>
        </div>
        </div>
    )
}

