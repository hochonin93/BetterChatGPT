import React, { useEffect, useRef } from 'react';
import { Adsense } from '@ctrl/react-adsense';
import useStore from '@store/store';


const Ads = () => {
    const hideAds = useStore((state) => state.hideAds);
    const setHideAds = useStore((state) => state.setHideAds);
    const windowWidthRef = useRef<number>(window.innerWidth);

    useEffect(() => {
        if (window.innerWidth < 768) setHideAds(true);
        window.addEventListener('resize', () => {
            if (
                windowWidthRef.current !== window.innerWidth &&
                window.innerWidth < 768
            )
                setHideAds(true);
        });
    }, []);

    return (
        <div className={`group/menu dark bg-gray-900 fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col transition-transform z-[999] top-0 right-0 h-full max-md:w-3/4 ${hideAds ? 'hidden' : ''}`}>
            <Adsense
                client="ca-pub-9272842344184040"
                slot="8709450567"
                style={{ display: 'inline-block', width: 260, height: 500 }}
            />
        </div>
    )
}

export default Ads;