import React from 'react';

function HeaderComponent()
{
  return (
      <header style={{width:'100%'}}>
        <nav className="navbar navbar-expand-sm bg-success ">
        <ul className="navbar-nav">
           <li className="nav-item active">
            <h2>Catch it...</h2>
           </li>
         </ul>
        </nav>

      </header>
        );
}
export default HeaderComponent;