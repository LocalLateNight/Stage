import React from 'react';

import ArticleList from './ArticleList.jsx'
import VideoPlayer from './VideoPlayer.jsx'
// <VideoPlayer type="youtube" youtubeId="-rSDUsMwakI" />
				// <VideoPlayer type="html5" src={videoSrc} />


export default class FeaturePresentation extends React.Component {
	render() {
		// let videoSrc = {
		// 	url: 'mov_bbb.mp4',
		// 	mime: 'video/mp4',
		//  poster: 'poster.jpg'
		// }
		let articlesList = Array.isArray(this.props.articlesList) ? (<ArticleList articles={this.props.articles} />) : null
		return (
			<div className="feature-presentation">
				{articlesList}
				<VideoPlayer type="youtube" youtubeId="JdrdkwnJihQ" />
			</div>
		)
	}
}