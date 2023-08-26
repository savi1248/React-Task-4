import Yarcaud1 from '../Images/yercaud1.jpeg'
import Yarcaud2 from '../Images/yercaud2.jpeg'
import Yarcaud3 from '../Images/yercaud3.jpeg'
import Yarcaud4 from '../Images/yercaud4.jpeg'
const YercaudPlace = () => {
    return (
        <section className=" mg-5">
            <div className='  text-md-center m-5  '>
                <h3>Yercaud</h3>
                <h4>Tourist Places Visit</h4>
            </div>

            <div className=' d-flex '>
                <div >
                    <img src={Yarcaud1} alt=" " style={{ height: '230px', width: '200px' }} />
                </div>
                <div className='  ms-3   '>
                    <h6 className=' fw-bold '> Pagoda Point, Overview</h6>

                    <p>
                        Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated to a panoramic view of the entire town of Salem as well as the neighbouring village of Kakambadi. The twists and turns of the 21 hairpin bends of Yercaud can be seen from this spot as they envelop themselves around the hills. The mysterious piles of stones arranged in the form of a pyramid resembling a Pagoda give the location its unique name. These stones are believed to be placed here by local tribes.
                    </p>
                    <p>
                        Between the Pagodas here lies a temple devoted to Lord Rama. One can indulge in the amazing natural beauty of the spot and the scenery of the Eastern Ghats, with the greenery growing within the rugged terrains of the hills, entwined with sights of the craggy cliffs

                    </p>
                </div>
            </div>

            <div className=' d-flex  mt-5 '>

                <div className='  me-3   '>
                    <h6 className=' fw-bold '> Botanical Garden, Overview</h6>

                    <p>
                        Any tourist who is interested in gods gift to this planet, the wondrous flora and in knowing about various species of plants must make it a point to visit the orchid garden and the green house in the Botanical garden.                    </p>
                    <p>
                        Yercaud is the place where the famous Kurinji flower blooms in plenty and the specialty of this flower is that it will bloom only once in twelve years. The National Orchidarium which is located 2 km from the Emerald Lake has a wide variety of orchids which includes 30 orchid species that are exclusively found here. Many endangered species of orchids are persevered in this orchidarium which is ranked the third largest of all the orchidariums in India.                    </p>
                </div>
                <div className=' '>
                    <img src={Yarcaud2} alt=" " style={{ height: '200px', width: '200px' }} />
                </div>

            </div>

            <div className=' d-flex  mt-5'>
                <div >
                    <img src={Yarcaud3} alt=" " style={{ height: '185px', width: '200px' }} />
                </div>
                <div className='  ms-3   '>
                    <h6 className=' fw-bold '> Emerald Lake, Overview</h6>

                    <p>
                        The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake, Surrounded by some wonderful cloud-peaked hills and a well persevered garden on its banks, this lake is a feast for the eyes
                    </p>
                    <p>

                        There is a floating fountain in the lake and boating facilities are available at a reasonable rate. Self-driven as well as rowing boats can be chosen according to your comfort and intersts. A nominal amount is collected as caution fee before issuing the boats and austere safety measures are followed by the authorities

                    </p>
                </div>
            </div>

            <div className=' d-flex  mt-5 '>

                <div className='  me-3   '>
                    <h6 className=' fw-bold '> Lady's Seat, Overview</h6>

                    <p>
                        Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam and Salem town. Besides: the place also houses a viewing tower, which is equipped with a telescope to enjoy the beautiful view. This viewing tower is open for visitors only during the daytime. Lady's Seat, Gent's Seat and Children's Seat, located to the south-west of Shevaroy Hill, are the names given to a group of rocks located on the Yercaud Hills.
                    </p>
                    <p>
                        It is believed that an English lady used to spend her evenings at this place watching the beautiful view of this rock. For those interested in a closer view, there's a mounted telescope. Swing it to your extreme right to see the Mettur Dam on the Cauvery River. Great shots of the river can be had from this spot in the late afternoon when the sun's rays are reflected in its waters
                    </p>
                </div>
                <div >
                    <img src={Yarcaud4} alt=" " style={{ height: '220px', width: '200px' }} />
                </div>

            </div>

        </section>
    )
}

export default YercaudPlace