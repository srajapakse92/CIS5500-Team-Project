import React from 'react';
import SideMenu from '../components/SideMenu';
import './HomePage.css'
import './VideoPage.css'
import { getHomeVideos, getSingleVideo } from '../fetcher'
import HeaderBar from '../components/HeaderBar';
import Grid from '../components/Grid';
import VideoThumbnail from '../components/VideoThumbnail';
import { useParams } from 'react-router-dom';

import {
  Table,
  Select
} from 'antd'

const { Column, ColumnGroup } = Table;
const { Option } = Select;


class VideoPage extends React.Component {

      state = {
        fullLink: "",
        videoInfo: [],
        videoId: ""
      };

    fetchVideoId = async () => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const videoId = urlParams.get("videoid");
      this.state.videoId = videoId;
      var linkBegin = "https://www.youtube.com/embed/";
      this.state.fullLink = linkBegin + `${this.state.videoId}`;
    };
  
    componentDidMount() {
      this.fetchVideoId();
      getSingleVideo(this.state.videoId).then(res => {
        this.setState({ videoInfo: res.results });
      })
    };
    
  
    render() {
  
      return (
        
        <div>
            <HeaderBar />
  
            <div id="page">
    
                <div id="sideBar">
                    <div>
                    <SideMenu />
                    </div>
                </div>
            
                <div className="videoInfo">

                  <iframe width="640" height="360" 
                      src={this.state.fullLink}>
                  </iframe>
    
                </div>
            
            
            </div>
        </div>
      )
    };
  
  }
  
  export default VideoPage