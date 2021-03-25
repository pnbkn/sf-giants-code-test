import React from 'react';
import axios from 'axios';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import Stadium from './components/Stadium/Stadium';
import Slider from './components/Slider/Slider';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import './css/App.scss';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebookSquare, faTwitterSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import {faBaseballBall} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faFacebookSquare, faTwitterSquare, faInstagramSquare, faBaseballBall);



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      giants: []
    }
  }
  async componentDidMount() {
    
    await axios.get('https://thesportsdb.com/api/v1/json/1/searchteams.php?t=san_francisco_giants')
    .then((response) => {
      this.setState({giants: response.data.teams[0]})
    }); 
  }

  render() {
    const {giants} = this.state;
    console.log("GIANTS ", giants)
    return( 
      <div className="container">
        <Navigation initials={giants.strTeamShort}/>
        <Hero team={giants.strTeam} year={giants.intFormedYear} image={giants.strTeamFanart1}/>
        <Description description={giants.strDescriptionEN}/>
        <Stadium name={giants.strStadium} image={giants.strStadiumThumb} description={giants.strStadiumDescription} location={giants.strStadiumLocation} capacity={giants.intStadiumCapacity}/>
        <Slider fanart={[{url: giants.strTeamFanart1}, {url: giants.strTeamFanart2}, {url: giants.strTeamFanart3}, {url: giants.strTeamFanart4}]}/>
        <Banner url={giants.strTeamBanner}/>
        <Footer social= {[{url: giants.strWebsite, icon: faBaseballBall}, {url: giants.strFacebook, icon: faFacebookSquare}, {url: giants.strTwitter, icon: faTwitterSquare}, {url: giants.strInstagram, icon: faInstagramSquare}]} name={giants.strStadium} location={giants.strStadiumLocation}/>
      </div>
    )
  }
}

export default App;
