import React from 'react'
import styles from'./SideSection.module.css';

export default function SideSection(props) {
    return (
        <div className= { styles.container }>
        <span className={ styles.header }>{ props.topic }Luetuimmat</span> { props.body }
        <hr  style={{
              color: '#000000',
             backgroundColor: '#000000',
             borderColor : '#000000'
        }}/>
        <span className={ styles.number }>{ props.topic }1.</span> { props.body }
        <span className={ styles.headline }>{ props.topic }Oulu  |</span> { props.body }
        <span className={ styles.text }>{ props.topic }Kodittomille työtiloja Raksilaan. Oulun kaupunki on panostanut suuria summia työttömyyden ehkäisyyn.</span> { props.body }
        <hr  style={{
              color: '#000000',
             backgroundColor: '#000000',
             borderColor : 'light-gray'
        }}/>
           <span className={ styles.number }>{ props.topic }2.</span> { props.body }
           <span className={ styles.headline }>{ props.topic } Hyvinvointi  |</span> { props.body }
        <span className={ styles.text }>{ props.topic }Tiesitkö, että olet aina syönyt väärin? Tässä neljä tapaa, josta et ennen tiennyt.</span> { props.body }
        <hr  style={{
              color: '#000000',
             backgroundColor: '#000000',
             borderColor : 'light-gray'
        }}/>
           <span className={ styles.number }>{ props.topic }3.</span> { props.body }
           <span className={ styles.headline }>{ props.topic } Koulutus |</span> { props.body }
        <span className={ styles.text }>{ props.topic }Oulun yliopisto on ajautunut konkurssiin. Opiskelijoita siirretään Seinäjoen korkeakouluun.</span> { props.body }
        <hr  style={{
              color: '#000000',
             backgroundColor: '#000000',
             borderColor : 'light-gray'
        }}/>
       </div>
    )
}
