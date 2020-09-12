import React from 'react';
import Aux from '../HOC/Aux';

const layout = (props)=>(
    <Aux>
        <div> Toolbar, sideDrawer, BackDrop </div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;