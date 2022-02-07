import React from 'react';
import { RecVids } from './notesReducer'

interface VideoListProps {
    recVids: (String | RecVids)[]
}

export const VideoList:React.FC<VideoListProps> = ({recVids}) => {
    return (
        <>
        {recVids.map((recVid: String|RecVids, i:number) => {
            console.log('Loop happening!!!')
            return (
                <div key={i}>
                    <video 
                        poster="https://stuff.fendergarage.com/images/5/o/7/play-unsubscribed-teaser-poster-opt.jpg"
                        src="https://videos.fendergarage.com/WhatIsFenderPlay_60_v35.mp4/A/L/b/mp4/720p/WhatIsFenderPlay_60_v35.mp4.mp4" 
                        autoPlay={false} 
                        controls
                        className="w-100 bg-black" 
                        controlsList="nodownload" 
                        data-id="video-player-basic" 
                        style={{maxHeight: "46vh"}}>
                    </video>
                </div>
            )
        })}
            

        </>
    )
}