import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners'
import { HomePageStyles } from './HomePageStyles'
import { SiPremierleague } from 'react-icons/si';
import seria from '../../images/seria.png'
import laliga from '../../images/laliga.png'
import bundesliga from '../../images/bundesliga.png'

function HomePage() {

    const [scoreData, setScoreData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const classes = HomePageStyles()

    const checkLogo = (logo) => {
        switch (logo) {
            case "ENGLAND: Premier League":
                return (<SiPremierleague className='text-4xl' />)

            case "ITALY: Serie A":
                return (<img src={seria} className={classes.logo} alt={logo} />)

            case "SPAIN: La Liga":
                return (<img src={laliga} className={classes.logo} alt={logo} />)

            case "GERMANY: Bundesliga":
                return (<img src={bundesliga} className={classes.logo} alt={logo} />)

            default:
                return;
        }
    }

    useEffect(() => {
        setIsLoading(true)
        axios.get("https://www.scorebat.com/video-api/v3")
            .then(res => {
                setScoreData(res.data.response)
                console.log(res.data.response)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <h1 className='text-center text-6xl m-10 text-yellow-600'>The Match Highlights!</h1>
            <div className='flex justify-center items-center'>
                {isLoading && (
                    <FadeLoader
                        color='#AF730F'
                        margin={12}
                        radius={2}
                        height={35}
                        width={5}
                    />
                )}
            </div>
            <div className='flex justify-center items-center flex-wrap p-6'>
                {scoreData && scoreData.length > 0 && scoreData.map((item) => (
                    <Box key={item.id} className={`${classes.container} transition-all`}>
                        <a target="_blank" href={item.matchviewUrl} rel="noreferrer">
                            <img src={item.thumbnail} alt={item.title} />
                        </a>
                        <h1 className={classes.title}>{item.title}</h1>
                        <div className='flex justify-between'>
                            <a href={item.competitionUrl} className={classes.tableLeague} target="_blank" rel="noreferrer">League Cup: {item.competition}</a>
                            {/* {item.competition == "ENGLAND: Premier League" && (
                                <SiPremierleague className='text-4xl' />
                            )} */}
                            {checkLogo(item.competition)}
                        </div>
                    </Box>
                ))}
            </div>
        </>
    )
}

export default HomePage
