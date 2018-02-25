import React, {Component} from 'react'

export class OverLay extends Component{
  render(){
    return(
    <div>
      <div id="blur"> </div>
      <div id="cMenu">
        <div id="cCardContainer">
          <div id="cCard">
            <i class="fas fa-camera-retro"/>
            <div id="fcCard">Math</div>
          </div>
          <div id="cCard">
            <i class="fas fa-camera-retro"/>
            <div id="fcCard">Science</div>
          </div>
          <div id="cCard">
            <i class="fas fa-camera-retro"/>
            <div id="fcCard">Coding</div>
          </div>
          <div id="cCard">
            <i class="fas fa-camera-retro"/>
            <div id="fcCard">General</div>
          </div>

        </div>
      </div>
    </div>);
      }
}
