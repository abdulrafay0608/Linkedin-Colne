import React from 'react'
import { FaBookmark } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import "./Profile.css"

const Profile = () => {
    return (
        <div className='container1'>
            <div className='profile-container'>

                <div className='background-image-and-profile-image'>
                    <div className='img-banner'>
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--uMxNN4R4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fwk298rnmd6qt74q6vol.png" alt="" />
                    </div>
                    <div className='img-profile'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3CZjDiX15LhFGj_2G63kjk5GnWzIzoX7R0g&usqp=CAU" alt="" />
                    </div>
                </div>

                <div className='content-area'>
                    <h4>Abdul Rafay</h4>
                    <p>Passionate Front-End Developer | HTML | CSS | JavaScript | React.js | Next.js | Creating Immersive User Experiences.</p>
                </div>


                <div className='profile-viewers'>
                    <div>
                        <p>Profile viewers</p>
                        <p className='p'>114</p>
                    </div>
                    <div>
                        View all analytics
                    </div>
                </div>

                <div className='profile-thrid'>
                    <div>
                        <p>Strengthen your profile with an AI writing assistant</p>
                    </div>
                    <div className='premium'>
                        ⏹ <a href="/">Try Premium for free</a>
                    </div>
                </div>

                <div className='save'>
                    <FaBookmark />
                    My items
                </div>

            </div>

            <div className='second-section'>
                <p>Recent</p>
                <div >
                    <FaPeopleGroup size={50} color='#000' />
                    <p>Artificial Intelligence, Machine Learning, Robotics, Data Science, Analytics, Generative AI, ChatGPT
                    </p>
                </div>

                <p className='group'>Group</p>
                <div >
                    <FaPeopleGroup size={50} color='#000' />
                    <p>Artificial Intelligence, Machine Learning, Robotics, Data Science, Analytics, Generative AI, ChatGPT
                    </p>
                </div>
                <p className='seeall'>see all</p>

                <div className='events'>
                    <p className='event'>Events</p>
                    <FaPlus size={16} />
                </div>
                <p className='followed'>Followed Hashtags</p>

                <p className='discover-more'>Discover more </p>
            </div>


        </div>
    )
}

export default Profile;



