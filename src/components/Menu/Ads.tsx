import React, { useEffect, useRef } from 'react';
import { Adsense } from '@ctrl/react-adsense';
import useStore from '@store/store';


const Ads = () => {
    return (
        <div className={`group/menu dark bg-gray-900 fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col transition-transform z-[999] top-0 right-0 h-full max-md:w-3/4`}>
            fregerg
            <Adsense
                client="ca-pub-9272842344184040"
                slot="5960307417"
            />
        </div>
    )
}

export default Ads;