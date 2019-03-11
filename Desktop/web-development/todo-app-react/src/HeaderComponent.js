import React from 'react';
function HeaderComponent()
{
  return (
      <header  className="bg-dark text-white p-4 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
                <h1 id="header-title">Todo-React</h1>
            </div>
             </div>
        </div>
      </header>
        );
}
export default HeaderComponent;