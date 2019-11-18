import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './component/SeasonDisplay';
import Spinner from './component/Spinner';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (error) => console.log(error)
//     )

//     return (
//         <div>계절 확인</div>
//     )
// }

// const SeasonDisplay = (props) => {
//     return (
//         <div>위도 : {props.lat}</div>
//     )
// }

class App extends React.Component {
    state = {
        lat: null,
        errMsg: null
    }
    // constructor(props){
    //     super(props);

        
    // }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    lat: position.coords.latitude
                })
            },
            (error) => {
                console.log(error)
                this.setState({
                    errMsg: error.message
                })
            }
        )
        console.log(this.state)
    }
    componentDidUpdate(){
        console.log('re-render되었음');
        console.log(this.state);
    }
    conditionalRender(){
        if(this.state.lat && !this.state.errMsg) {
            return(
                <div>
                    <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
                </div>
            )
        }
        if(!this.state.lat && this.state.errMsg) {
            return(
                <div>
                    거절 : {this.state.errMsg} <br/>
                    사용자 위치 정보 허용해주세요
                </div>
            )
        }
        return (
            <Spinner></Spinner>
        )
    }

    render() {
        return(
            this.conditionalRender()
        )       
    }
    // componentWillUnmount
}


ReactDOM.render(<App />, document.getElementById('root'));
