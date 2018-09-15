import React,{Component} from 'react';
import PersonalitySunburstChart from './sunburst-chart/charts/v3-d3v4';

export default class SunburstChart extends Component{
    componentDidMount(){
        var chart = new PersonalitySunburstChart({
            element : this.sunburstChart,
            version : 'v3'
        });
        chart.show({}, '');
    }
    render(){
        return (
            <div ref={elem => (this.sunburstChart = elem)}>
            </div>
        );
    }
}