import React from 'react'
var Tab = [
    {
        name: "John",
        age: 25,
        gender: "Male"
    },
    {
        name: "Jane",
        age: 22,
        gender: "Female"
    },
    {
        name: "Jack",
        age: 28,
        gender: "Male"
    },
    {
        name: "Jill",
        age: 30,
        gender: "Female"
    }
  ];
  Tab.push({
    name: "emna",
    age: 27,
    gender: "Female"
  });
  console.log("Tab",Tab)
   Tab.unshift( {
    name: "John",
    age: 40,
    gender: "Male"
  }); 
  console.log("tab"+Tab)
  
  for (let i = 0; i < Tab.length; i++) {
    
  
    Tab[i].identifiant=i
   
    
  }
  console.log(Tab)
  var datafilter=[]/*
var search = (id,tab) => {
    datafilter = tab.filter(
        element => element.identifiant = id);
        console.log(id+tab)
        
  };*/
  function search(id ,tab) { 
    datafilter = tab.filter(
        element => element.identifiant = id);
    return datafilter; 
 }
 
var datafilter2=search(2,Tab)
  console.log("data fonction.js")
        for (const element of datafilter2) {
            console.log("el"+element.identifiant);
          }
export default function fonction() {
  return (
    <div>fonction</div>
  )
}
