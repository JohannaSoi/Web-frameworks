import React from 'react';
import styles from './SearchResult.module.css';

export default function result(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div> 
            <img src={`/images/${props.image}`} 
            height={300}
            width={300}
          />
          </div>
          <div className={ styles.name }>{ props.name }</div>
          <div className={ styles.rating }>{ props.rating }</div>
<div>
<span className={ styles.price}>${ props.price }</span> 
<span className={ styles.prices}>{ props.price2 }</span>
</div>
<div className={ styles.info }>{ props.info }</div>      
        </div>
    </div>
  )
}