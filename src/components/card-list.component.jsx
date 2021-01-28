import React, { useState } from 'react';
import { Card } from './card.component';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import '../styles/card-component.css';
import '../styles/slider-component.css';

const Cardlist = (props) => {
    const [current, setCurrent] = useState(0);
    if(props.characters == null ) {
        return null;
    }
    
    const heroes = Object.entries(props.characters);
    const length = heroes.length;


    if(!Array.isArray(heroes) || heroes.length <= 0) {
        return <div><h2>No heroes here</h2></div>
    }

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    console.log(current);
    const currentCard = heroes[current][1];
    console.log(currentCard);
    return(
        <div className='card-list'>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    {heroes.map(([index, value]) => {
        console.log(value);
        console.log(`index, current ${index}, ${current}`)
           return <section key={index}  className='cards'>
                <Card character={value} />
            </section>
    })}
        </div>
    );
};

export default Cardlist;
// export function CardList (props) {
//     const [current, setCurrent] = useState(0);

    


//     if(props.characters) {
//         const heroes = Object.entries(props.characters);
//         const lenght = heroes.length;

        
        // return  <div className='card-list'>
        //     <FaArrowAltCircleLeft className="left-arrow"/>
        //     <FaArrowAltCircleRight className="right-arrow" />
        //     {heroes.map(([index, value]) => (
        //         <div  key={index} className="cards">

        //             <Card character={value}/>
        //         </div>
           
        // ))}
        // </div>
//     }
//    else {
//        return <h1>No characters here</h1>
//    }
// }


     