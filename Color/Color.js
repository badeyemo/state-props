import React, { Component } from 'react';
import ColorDiv from '../../Components/ColorDiv/ColorDiv';
import classes from './Color.module.css';

class Color extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors: [
                {id: 1, color: 'blue'},
                {id: 2, color: 'purple'},
                {id: 3, color: 'orange'},
                {id: 4, color: 'green'},
                {id: 5, color: 'red'},
                {id: 6, color: 'yellow'},
                {id: 7, color: 'brown'},
                {id: 8, color: 'wheat'},
                {id: 9, color: 'grey'},
                {id: 10, color: 'lightblue'},
                {id: 11, color: 'violet'},
                {id: 12, color: 'green'},
                {id: 13, color: 'indigo'},
                {id: 14, color: 'khaki'},
                {id: 15, color: 'indigo'},
                {id: 16, color: 'orange'},
                {id: 17, color: 'red'},
                {id: 18, color: 'blue'},
                {id: 19, color: 'purple'},
                {id: 20, color: 'black'},
                {id: 21, color: 'whitesmoke'},
                {id: 22, color: 'violet'},
                {id: 23, color: 'yellow'},
                {id: 24, color: 'khaki'}
            ]
        }
    }

    render() {
        var swatch = ['rgb(82, 161, 82)', 'rgb(12, 100, 12)', 'rgb(117, 119, 21)', 'rgb(230, 144, 15', 'rgb(189, 17, 103)', 'rgb(138, 19, 21)', 'rgb(230, 218, 51)', 'whitesmoke', 'khaki', 'yellow', 'black', 'blue', 'indigo'];

        const picker = (id) => {
            const newColors = [...this.state.colors];
            const selectedColor = newColors.filter(newColor => {
                return id === newColor.id
            });

            let randomIndex = Math.floor(Math.random() * swatch.length);
            selectedColor[0].color = swatch[randomIndex];
            this.setState({colors: newColors});
        }

        var myColors = this.state.colors.map( myColor => {
            return (
                <ColorDiv 
                    key={myColor.id}
                    id={myColor.id}
                    color={myColor.color}
                    picker={picker}
                />
            )
        })
        return (
            <div className={classes.Color}>
                <h1>Color Palette</h1>
                <div className={classes.MyColor}>
                    {myColors}
                </div>
            </div>
        )
    }
}

export default Color;