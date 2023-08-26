

 import "./Chennaito.css"

import Chennai1 from '../Images/chennai1.jpeg'
import Chennai2 from '../Images/chennai2.jpeg'
import Chennai3 from '../Images/chennai3.jpeg'
import Chennai4 from '../Images/chennai4.jpeg'
const ChennaiPlace = () => {
    return (
        <section className=" mg-5">
            <div className='  text-md-center m-5  '>
                <h3>Chennai</h3>
                <h4>Tourist Places Visit</h4>
            </div>

            <div className=' d-flex '>
                <div >
                    <img src={Chennai1} alt=" " style={{ height: '250px', width: '200px' }} />
                </div>
                <div className='  ms-3  mt-2  '>
                    <h6 className=' fw-bold '> Marina Beach, Overview</h6>

                    <p>
                        Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal. The beach is stretched out to a distance of 13 kilometres making it the longest natural urban beach in the country, second largest in the world and also the most crowded beach in India with almost 30,000 visitors a day,
                    </p>
                    <p>
                        With a white sandy shore that looks as though extending to infinity, the landscape of Marina Beach is a mesmerising and serene sight to behold. The beach has a primarily sandy terrain and is dotted with plenty of merry-go-rounds and shops selling souvenirs. You could take a walk along the Marina beach with your near and dear ones or even all alone and enjoy the cool evening sea breeze along with a hot plate of crispy sundal and murukku. Watching the sun crawl upwards into the sky or even disappear into the ocean from the beach, is an awe-striking and enchanting experience

                    </p>
                </div>
            </div>

            <div className=' d-flex  mt-5 '>

                <div className='  me-3  mt-2 '>
                    <h6 className=' fw-bold '> MGR Flim City, Overview</h6>

                    <p>
                        Having been established in the year 1994, a considerably new structure, the MGR Film city is managed by the Government of Tamil Nadu in loving memory of MG Ramachandran who was not only a crowd-pleasing tamil actor but also a longtime CM of Tamil Nadu.                    </p>
                    <p>
                        With a white sandy shore that looks as though extending to infinity, the landscape of Marina Beach is a mesmerising and serene sight to behold. The beach has a primarily sandy terrain and is dotted with plenty of merry-go-rounds and shops selling souvenirs, you could take a walk along the Marina beach with your near and dear ones or even all alone and enjoy the cool evening sea breeze along with a hot plate of crispy sundal and murukku. Watching the sun crawl upwards into the sky or even disappear into the ocean from the beach, is an awe-striking and enchanting experience.                    </p>
                </div>
                <div className=' '>
                    <img src={Chennai2} alt=" " style={{ height: '250px', width: '200px' }} />
                </div>

            </div>

            <div className=' d-flex  mt-5'>
                <div >
                    <img src={Chennai3} alt=" " style={{ height: '230px', width: '200px' }} />
                </div>
                <div className='  ms-3  mt-2 '>
                    <h6 className=' fw-bold '> Marundeeswarar Temple, Overview</h6>

                    <p>
                        The magnificent Marundeeswarar Temple in Tiruvanmiyur near Chennal has the temple deity Shiva in the form of Marundeeswar or Aushadeeswarar, the God of Medicines. A fine specimen of Dravidian architecture, this temple is a must visit for anyone visiting Chennai or nearby
                        cities
                    </p>
                    <p>
                        Glorified in the 7th-8th century by Nayanars (Sarvite Saints), Tirugnana Sambandar, and Appar, the temple was expanded by the Chola Kingdom in the 11th century. Moreover, given the name, Marundeeswarar Temple has been a place of worship especially for people with diseases and those facing various problems with their health. The prasadam here is a mixture of sacred ash, water, and milk which is believed to cure any ailments One must visit the temple to encounter the miraculous power it is said to have.
                    </p>
                </div>
            </div>

            <div className=' d-flex  mt-5 '>

                <div className='  me-3  mt-2 '>
                    <h6 className=' fw-bold '> Breezy Beach, Overview</h6>

                    <p>
                        Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai. Being smaller and less polluted, its a perfect getaway for anyone looking for a peaceful evening                    </p>
                    <p>
                        This beach is not as popular and known as the Elliots beach, and is hence more quiet and peaceful. Evenings are very pleasant and breezy here, and in the recent years, lots of tourists have been attracted towards this beach for its beauty. Those looking for an amiable, refreshing and breezy place to chill out and have fun, the Breezy beach of Chennai is the place to be

                    </p>
                </div>
                <div >
                    <img src={Chennai4} alt=" " style={{ height: '200px', width: '200px' }} />
                </div>

            </div>

        </section>
    )
}

export default ChennaiPlace