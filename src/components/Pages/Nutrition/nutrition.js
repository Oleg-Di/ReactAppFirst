import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Card } from "../../UI/Card/card";
import './nutrition.scss'

const Nutrition = () => {
const [state, setState] = useState({
    setLoading: true,
    nutrition: [
        {name: "Creatin", img:"https://firefit.com.ua/image/cache/catalog/ALL/71y7xq-R3mL._AC_SL1500_-228x228.jpg", descr:`Organic compound (nitric carboxylic acid) with the nominal formula (H2N) (HN) CN (CH3) CH2CO2H. Contained in vertebrates, where it participates in energy metabolism in muscle and nerve cells, facilitating the processing of adenosine triphosphate. Creatine was first isolated in 1832 by Chevrolet from skeletal muscle.`},
        {name: "Protein", img:"https://content.rozetka.com.ua/goods/images/big/167930389.jpg", descr:'This is an important part of animal and human nutrition (main sources: meat, poultry, fish, milk, nuts, legumes, grains; to a lesser extent: vegetables, fruits, berries and mushrooms), because their bodies can not synthesize all the essential amino acids. and part should come with protein foods. In the process of digestion, enzymes break down the proteins consumed into amino acids, which are used for the biosynthesis of the bodys own proteins or undergo further decomposition to obtain energy.'},
        {name: "Amino", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6xmv5wAzKOZIl4cP8LMSmz0eunYZm4SgQQ&usqp=CAU", descr:`
        organic compounds, the molecule of which simultaneously contains carboxyl and amine groups. The main chemical elements of amino acids are carbon (C), hydrogen (H), oxygen (O) and nitrogen (N), although other elements are also found in the radical of certain amino acids.`},
    ]
})
useEffect(()=>{
    setTimeout(()=> {
        setState({...state, setLoading: false})
    }, 2000)
}, [state])

    return (
        <div className='Nutrition'>
            {state.nutrition.map((item, id)=> {
                return(
                <div key={id}>
                <div  className='Nutrition__items'>
                    <Card  clsbody={'cbody'} size={'1rem'} width={'8rem'} setLoading={state.setLoading} id={id} text={item.name} url={item.img}/>
                    <div className='Nutrition__descr'>
                        <p>{item.descr}</p>
                    </div>
                </div>
                <hr/>
                </div>
                )
            })}
          
        </div>
     
    )
}

export default Nutrition