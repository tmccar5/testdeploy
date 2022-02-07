import React from 'react';
import { RecVids } from './notesReducer'

interface VideoListProps {
    recVids: RecVids[];
    deviceType: string;
}

export const VideoList:React.FC<VideoListProps> = ({recVids, deviceType}) => {
    const styles = {
        container:{
            columns: deviceType ==='mobile' ? '2 auto' : '3 auto',
            marginTop: '2%',
            marginBottom: '10%',
            marginLeft: deviceType ==='mobile' ? '20%' : '5%',
            marginRight: deviceType ==='mobile' ? '20%' : '5%',
            padding: '2%',
            backgroundColor: '#9B9FB5',
            borderRadius: '1%'
        }
    }

    if(deviceType === 'mobile') {
        recVids = recVids.slice(0, 4)
    }

    return (
        <>
        <div style={styles.container}>
        {recVids.map((recVid: RecVids, i:number) => {
            console.log('Loop happening!!!')
            return (
                <div key={i}>
                    <iframe width="100%" height="100%" src={recVid.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    {/* <video 
                        poster="https://stuff.fendergarage.com/images/5/o/7/play-unsubscribed-teaser-poster-opt.jpg"
                        src={recVid.url} 
                        autoPlay={false} 
                        controls
                        className="w-100 bg-black" 
                        controlsList="nodownload" 
                        data-id="video-player-basic" 
                        style={{maxHeight: "46vh",borderRadius: '1%'}}>
                    </video> */}
                </div>
            )
        })}
        </div>
            

        </>
    )
}