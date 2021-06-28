import React, { useState } from "react";
import AddColorForm from "../components/AddColorForm";
import ColorList from "../components/ColorList";
import { v4 } from 'uuid';
import HiddenMessages from "../components/HiddenMessages";
import CountryList from "../components/CountryList";
import Timeline from "../components/Timeline";
import PeopleList from "../components/PeopleList";
import RandomMeUsers from "../components/RandomMeUsers";
import CountryDropDown from "../components/CountryDropDown";
import HiddenMessage from "../components/ShowHideMessage";
import PopUpButton from "../components/MenuButton";
import CountDown from "../components/CountDown";
import Calculator from "../boil/Calculator";

const historicDatesForSkiing = [
    {
        year: 1879,
        event: "Ski Manufacturing Begins"
    },
    {
        year: 1882,
        event: "US Ski Club Founded"
    },
    {
        year: 1924,
        event: "First Winter Olympics Held"
    },
    {
        year: 1926,
        event: "First US Ski Shop Opens"
    },
    {
        year: 1932,
        event: "North Americas First Rope Tow Spins"
    },
    {
        year: 1936,
        event: "First Chairlift Spins"
    },
    {
        year: 1949,
        event: "Squaw Valley, Mad River Glen Open"
    },
    {
        year: 1958,
        event: "First Gondola Spins"
    },
    {
        year: 1964,
        event: "Plastic Buckle Boots Available"
    }
  ]


const App = ({ store }) =>  {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         colors: []
    //     }
    //     this.addColor = this.addColor.bind(this);
    //     this.rateColor = this.rateColor.bind(this);
    //     this.removeColor = this.removeColor.bind(this);
    // }

    const [colors, setColors] = useState([]);

    const addColor = (title, color) => {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ]
        setColors({ colors })
    }

    // addColor(title, color) {
    //     this.setState(prevState => ({
    //         colors: [
    //             ...prevState.colors,
    //             {
    //                 id: v4(),
    //                 title,
    //                 color,
    //                 rating: 0
    //             }
    //         ]
    //     }))
    // }

    const rateColor = (id, rating) => {
        const colors = this.state.colors.map(color => 
            (color.id !== id) ? 
            color : 
            {...color, rating})
            setColors({colors});
    }

    // rateColor(id, rating) {
    //     this.setState(prevState => ({
    //         colors: prevState.colors.map(color =>
    //             (color.id !== id) ?
    //                 color :
    //                 {
    //                     ...color,
    //                     rating
    //                 }
    //         )
    //     }))
    // }

    const removeColor = (id) => {
        const colors = this.state.colors.filter(
            color => color.id !== id
        )
        setColors({colors})
    };

    // removeColor(id) {
    //     this.setState(prevState => ({
    //       colors: prevState.colors.filter(color => color.id !== id)
    //     }))
    // }

    // const { addColor, rateColor, removeColor } = this;
    // const { colors } = this.state;
    return (
        // <Calculator />
        // <CountDown />
        // <PopUpButton hidden={true} txt="팝업 토글">
        //     <h1>숨겨진 콘텐트</h1>
        //     <p>이 콘텐트는 처음에 숨겨져 있습니다.</p>
        // </PopUpButton>
        // <HiddenMessage hidden={true}>this is a hidden message</HiddenMessage>
        // <CountryDropDown selected="United States"/>
        // <RandomMeUsers/>
        // <PeopleList />
        // <Timeline name="스키의 역사" data={historicDatesForSkiing}/>
        // <CountryList />
        // <HiddenMessages />
        <div>
            <AddColorForm store={store}/>
            <ColorList store={store}/>
        </div>
    )
    
}

export default App;