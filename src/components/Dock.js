import React, {Component} from 'react';
import propTypes from 'prop-types';
import Style from 'style-it'

class Dock extends Component{
    static propTypes = {
        className : propTypes.string,
        children: propTypes.node,
        items: propTypes.array
    }

    render(){
        const items = this.props.items.map(label =>
            <div className='dock-items' style={{display:'flex', alignItems:'center', justifyContent:'center', minWidth:'20vw'}}>
                <h5 style={{verticalAlign:'middle', margin:0}}>{label}</h5>
            </div>
        );
        return Style.it(
            `   .dock-items{
                    color: #dddddd
                }
                .dock-items:hover{

                    border-radius: 2px;
                    color: #d32f2f
                }
            `,
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'stretch', ...this.props.style, verticalAlign:'middle', height:50, overflowX:'scroll'}}>
                {items}
            </div>
        )
    }
}

export default Dock;