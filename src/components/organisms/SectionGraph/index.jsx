import React, { Suspense, lazy } from "react";

const Plot = lazy(() => import("react-plotly.js"));

//SCSS
import './SectionGraph.scss';

import SectionStandard from "../SectionStandard";

class SectionGraph extends React.Component{
    constructor (props) {
        super(props);
        
        this.state = {
            xValues: [],
            yValues: []
        }
        
        this.plotData = [{
                type: 'bar',
                x: this.state.xValues,
                y: this.state.yValues
            },
        ]
        this.plotLayout = {
            font: {
                family: 'Arial',
                size: 16,
                color: '#F4F3F3'
            },
            xaxis: {
                title: this.props.xAxisName,
            },
            yaxis: {
                title: this.props.yAxisName,
            },
            margin: {
                l: 100,
                r: 40,
                t: 80,
                b: 60,
                pad: 0
            },
            plot_bgcolor: "ffffff00",
            paper_bgcolor: "ffffff00",
        }
    }

    render() {
        return (

            <SectionStandard customClass="section-graph" modifiers={['vertical']}>
                <h3 className="section-graph__title">{this.props.name}</h3>

                <div className="section-graph__graph-container">
                    <Suspense
                        fallback={<p>Loading Plotly...</p>}
                    >
                        <Plot 
                            data={[{
                                type: 'bar',
                                x: this.state.xValues,
                                y: this.state.yValues
                            }]}
                            layout={this.plotLayout}
                            useResizeHandler={true}
                            model={{ width: '100%', top: '100%' }}
                            style={{width: "100%", height: "100%"}}
                        />
                    </Suspense>
                </div>
            </SectionStandard>
        )
    }
}


export default SectionGraph;