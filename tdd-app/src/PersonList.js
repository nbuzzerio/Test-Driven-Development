import React from 'react';

//destructuring people out of props
export default ({ people = [] }) => 
<ul>{people.map( (person, i) => <li key={i}>{person.firstName} {person.lastName}</li> )}</ul>
    


//REFACTORED FROM 
// export default (props) => 
//     <ul>{props.people && props.people.length === 1 ? <li></li> : undefined }</ul>
//TO HANDLE MANY ITEMS

//REFACTORED FROM
// export default (props) => {       
//     if (props.people && props.people.length === 1) {
//         return <ul><li></li></ul>
//     } else {
//         return <ul></ul>
//     }
// }
//FOR 0 or 1 itmes

