import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Card from './CourseCard'
import comingsoon from '../assets/ComingSoon.png'

function Coursesslider() {
    return (
        <section id='coursesSlider'>
            <h1>Learn The Best Courses</h1>
            <Splide options={{
                type: 'loop',
                gap: '20px',
                drag: 'free',
                arrows: true,
                pagination: true,
                autoScroll: {
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    rewind: false,
                    speed: 0.4,
                }
            }}
                extensions={{ AutoScroll }}
            >
                <SplideSlide>
                    <Card
                        image="https://i.pinimg.com/736x/42/18/e9/4218e916944cfe9c18132d6f15e38cbf.jpg"
                        heading="Shrimad Bhagavad Gita (श्रीमद्भगवद्गीता)"
                        // author="Prof. Samuel Thompson"
                        // price="699"
                        badge="Bestseller"
                    />
                </SplideSlide>
                <SplideSlide>
                    <Card
                        image={comingsoon}
                        heading="Coming Soon"
                        // author="To Be Revealed"
                        // price="699"
                        badge="Upcoming"
                    />
                </SplideSlide>
                <SplideSlide>
                    <Card
                        image={comingsoon}
                        heading="Coming Soon"
                        // author="To Be Revealed"
                        // price="699"
                        badge="Upcoming"
                    />
                </SplideSlide>
                <SplideSlide>
                    <Card
                        image={comingsoon}
                        heading="Coming Soon"
                        // author="To Be Revealed"
                        // price="699"
                        badge="Upcoming"
                    />
                </SplideSlide>
                <SplideSlide>
                    <Card
                        image={comingsoon}
                        heading="Coming Soon"
                        // author="To Be Revealed"
                        // price="699"
                        badge="Upcoming"
                    />
                </SplideSlide>
                <SplideSlide>
                    <Card
                        image={comingsoon}
                        heading="Coming Soon"
                        // author="To Be Revealed"
                        // price="699"
                        badge="Upcoming"
                    />
                </SplideSlide>

            </Splide>
        </section>
    )
}

export default Coursesslider