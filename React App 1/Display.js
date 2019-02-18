import React, { Component } from 'react';
class Display extends Component {
render() {
console.log(this.props);
//const { name,age,birthMonth } =this.props;
const {displayInfos}=this.props;
const displayList= displayInfos.map(info => {
  if (info.age >30){
  return (
    <div key={info.id}>
     <h3>this is my display component</h3>
     <div>NAME: {info.name} </div>
     <div>AGE: {info.age} </div>
     <div>BIRTHMONTH {info.birtmonth}</div>
    </div>
  )
}else{
  return null;
}
});
return (
  <div>
  { displayList }
  </div>
);
}
}

export default Display;
