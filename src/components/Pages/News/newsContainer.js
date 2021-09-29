import React, { useState } from "react";
import News from './news';




const NewsContainer = () => {

    const [newsData, setNewsData] = useState({
        img: [
            {image:'https://i.weltbild.de/p/say-yes-to-strong-200224074.jpg?v=3&wp=p5'},
            {image:'https://images.7news.com.au/publication/6258135373001/473377a656dcefb57332b69b1d5de5bff97174ee.jpg?imwidth=1024&impolicy=sevennews_v2'},
            {image:'https://pro.ideafit.com/files/image-sizer/2da59e4336f67a16f77d7fbfd34c8686-card-wide.jpg'},
        ],
        url:[
            {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEU4gZRndwLPwMDKwooFsve39AkjidFX17Zg&usqp=CAU'},
            {image: 'https://www.tidelandshealth.org/app/files/public/3176/6-weightlifting-healthpoint-small-news.jpg'}
        ],
        id: 1,
        isModal: false,
        text: 'It works',
        isLoading: false,
        width: '40rem',
        height: '40rem',
        slideNumber: false,
        slideImageFit: '100% 100%',
        setLoading: false
    })

    const modalOn = () => {
        setNewsData({...newsData, isModal: true})
    }
     
    return(
        <News newsData = {newsData} modalOn = {modalOn}/>
    )
}

export default NewsContainer