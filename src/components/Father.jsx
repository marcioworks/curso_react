import React from 'react'
import Son from './Son'

export default props =>{
    const notificarSaida = lugar =>
         alert(`liberado para ${lugar}`)
    
    return (
    <div>
        <Son notificarSaida = {notificarSaida}/>
    </div>
    )
}
    