'use client'
import { useEffect, useRef } from 'react';

function HeroSection() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch(error => {
               
                console.error('Autoplay was prevented:', error);
            });
        }
    }, []);

    return (
        <div className=''>
            <div className='mt-2'>
                <video ref={videoRef} poster="https://www.foodpanda.com/wp-content/uploads/2023/03/fp-home-video-poster.jpg" className="bg-video__content h-auto lg:h-[450px] w-full object-cover" autoPlay muted loop>
                    <source src="https://player.vimeo.com/progressive_redirect/playback/887673049/rendition/1080p/file.mp4?loc=external&log_user=0&signature=d2fb16e953bceb3394adfc2bdb6da0705e4fcfd9e7e60047193939fd2a7a7e46" type="video/mp4"/>
                </video>
                <div className='absolute  p-4 item-center lg:ml-28 top-48 lg:top-64'>
                    <h1 className='text-white font-bold text-2xl lg:text-6xl font-mono'>
                        Food and groceries
                        <br />
                        in a tap
                    </h1>
                </div>
            </div>
            </div>
        
    );
}

export default HeroSection;
