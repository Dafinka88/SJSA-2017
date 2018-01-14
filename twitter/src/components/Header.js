import React from "react";

export class Header extends React.Component {
	render(){
		
		return(
              <header>
              <div className="content">
                 <div className="header-item">
					<img width="50" src={require('../assets/images/tweet.jpg.jpg')} />
                 	<a href="https://twitter.com/Twitch?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitch</a>
                 	<span class="FullNameGroup"> @Twitch 12 January</span>
                   <p>Twitch Weekly is live in 5 minutes!</p>
                    <p>
Join us to learn about Twitch updates, upcoming events, trending streamers, and more!</p>
                 <a href="https://www.twitch.tv/twitch">Watch</a>


                 </div>
                 </div>
              </header>


			);
	}
}


