import Landing from '../components/Landing'
import Coursesslider from '../components/Courses-slider'
import PremiumHome from '../components/PremiumHome'
import Subscribe from '../components/Subscribe'
import Community from '../components/Community'
import { useEffect } from 'react'

function HomePage({userEmail}) {
    useEffect(()=>{
        if(userEmail){
            console.log(userEmail);
        }
    },[userEmail])
    return (
        <>
            <Landing />
            <Coursesslider />
            <PremiumHome />
            <Subscribe />
            <Community />
        </>
    )
}

export default HomePage