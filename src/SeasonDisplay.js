import React from "react";
import { ReactDOM } from "react";

//study module 66 & 67 in course 
const seasonConfig = {
    summer : {
        text: 'Lets hit the beach',
        iconName:'sun'
    },
    winter: {
        text: 'Bur it is cold',
        iconName: 'snowflake'
    }
}; 

//logic for the getSeason output below we use the function with the props as input 
const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
       return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    };

}; 
//add props for the state prop 

const SeasonDisplay = props => {
    console.log(props.lat); 
    const season = getSeason(props.lat, new Date().getMonth()); 
/*seasonconfig allows us to remove these 
const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach' */
const {text,iconName} = seasonConfig[season] /*return object {text, iconeName}*/
    return <div>
       <h1>{text}</h1>
    </div>
};

export default SeasonDisplay; 