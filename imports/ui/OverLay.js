import React, {Component} from 'react'

export class OverLay extends Component{
  render(){
    return(
    <div>
      <div id="blur"> </div>
      <div id="cMenu">
        <div id="cCardContainer">

          <div id="cCard">
            <i class="fas fa-baseball-ball"></i>
            <div id="fcCard">Baseball</div>
          </div>

          <div id="cCard">
            <i class="fas fa-basketball-ball"></i>
            <div id="fcCard">Basketball</div>
          </div>

          <div id="cCard">
            <i class="fas fa-bowling-ball"></i>
            <div id="fcCard">Bowling</div>
          </div>

          <div id="cCard">
            <i class="fas fa-football-ball"></i>
            <div id="fcCard">Football</div>
          </div>

          <div id="cCard">
            <i class="fas fa-golf-ball"></i>
            <div id="fcCard">Golf</div>
          </div>

          <div id="cCard">
            <i class="fas fa-volleyball-ball"></i>
            <div id="fcCard">Volleyball</div>
          </div>


        </div>
      </div>
    </div>);
      }
}
