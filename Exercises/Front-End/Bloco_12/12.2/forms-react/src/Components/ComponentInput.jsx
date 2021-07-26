import React from 'react';

export default class InputText extends React.Component {
 render() {
   const { label, name, maxWord, hadleChange } = this.props
   return(
     <div>
         <label htmlFor={label} className="form-label"> {label}:
           <input type='text' id={label} name={name} maxLength={maxWord} className="inputText form-control w-auto" onChange={hadleChange}/>
         </label>
     </div>
   );
 }
}