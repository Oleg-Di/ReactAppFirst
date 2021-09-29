import React from "react";
import { Route, Switch } from "react-router";
import About from "./About/about";
import HomeContainer from "./Home/homeContainer";
import './pages.scss'
import NewsContainer from "./News/newsContainer";
import { CalculatorContainer } from "./Calculator/calculatorContainer";
import Tranings from "./Tranings/tranings";
import Nutrition from "./Nutrition/nutrition";
import Rec from "./Recomendations/rec";


const Pages = () => {

    

    return(
        <div className='Pages'>
            <Switch>
                <Route path='/' exact component={HomeContainer}/>
                <Route path='/about' component={About}/>
                <Route path='/news' component={NewsContainer}/>
                <Route path='/calc' component={CalculatorContainer}/>
                <Route path='/trainings' component={Tranings}/>
                <Route path='/nutrition' component={Nutrition}/>
                <Route path='/rec' component={Rec}/>
            </Switch>
        </div>
    )
}

export default Pages