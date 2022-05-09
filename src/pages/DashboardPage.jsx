import React from "react";

import Header from '../components/organisms/HeaderStandard';
import SectionGraph from '../components/organisms/SectionGraph';

const HeaderLeft = () => {
    return (
        <h1>Enjoy access to <br/> all the tools you need</h1>
    )
}
import SpinningCoin from "../components/atoms/SpinningCoin";
const HeaderRight = () => {
    return (
        <SpinningCoin floating={true}/>
    )
}


class DashboardPage extends React.Component {

    constructor(props) {
        super(props);

        this.lpContributionsRef = React.createRef();
        this.purchasesRef = React.createRef();

        this.fetchData = async () => {
            let data = await fetch('adress')
            .then(res => res.json())
            .then(data => data);

            return data;
        }

        this.updatePlot = (xData, yData, ref) => {
            let plot = ref.current;
            
            plot.setState({
                xValues: xData,
                yValues: yData,
            })
        }
        setTimeout(() => {

            this.updatePlot(
                [
                    new Date(2021, 11, 27),
                    new Date(2021, 11, 28),
                    new Date(2021, 11, 29),
                    new Date(2021, 11, 30),
                    new Date(2021, 11, 31),
                    new Date(2022, 0, 1),
                    new Date(2022, 0, 2),
                    new Date(2022, 0, 3),
                    new Date(2022, 0, 5),
                    new Date(2022, 0, 7),
                    new Date(2022, 0, 10),
                    new Date(2022, 0, 12),

                    new Date(2022, 0, 14),
                    new Date(2022, 0, 16),

                    new Date(2022, 0, 25),
                    new Date(2022, 0, 27),
                    new Date(2022, 0, 28),
                ],
                [
                    118510.7,
                    27678.03,
                    45747.26,
                    71627.14,
                    38071.3,
                    7944.962,
                    69094.31,
                    2192.752,
                    19214.07,
                    316108.6,
                    44407.15,
                    45125.11,
                    978.22,
                    46609.01,
                    4338.188,
                    207499,
                    254203.6,
                ],
                this.purchasesRef)
        }, 100);
        
    }

    render() {
        return (
            <>
                <Header childrenLeft={<HeaderLeft/>} childrenRight={<HeaderRight/>}/>

                <SectionGraph ref={this.purchasesRef}
                    name="Purchases of NC coin"
                    xAxisName="Date"
                    yAxisName="Quantity"
                />
            </>
        )
    }
}

export default DashboardPage;