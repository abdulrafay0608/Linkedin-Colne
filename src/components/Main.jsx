import React from 'react'
import { GoFileMedia } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { VscTriangleDown } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FaEarthAsia } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { AiTwotoneHeart } from "react-icons/ai";

import "./Main.css"

const Main = () => {
  return (

    <div className='container2'>
      <div className='main-container'>

        <div className='first-section'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3CZjDiX15LhFGj_2G63kjk5GnWzIzoX7R0g&usqp=CAU" alt="" />
          <input type="search" placeholder='Start a post, try writing with AI' />
        </div>

        <div className='first-section-part'>
          <div>
            <GoFileMedia color='blue' size={18} />
            <p>Media</p>
          </div>
          <div>
            <FaCalendarAlt color='orange' size={18} />
            <p>Events</p>
          </div>
          <div>
            <RiArticleLine color='orange' size={18} />
            <p>Media</p>
          </div>
        </div>
      </div>

      <button class="horizontail-line" type="button">
        <hr />
        <div class="display-flex t-black">
          <p>sort by: <span>Top <sub> <VscTriangleDown color='#000' size={12} /></sub> </span></p>
        </div>
      </button>

      <article >
        <div className='comment'>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3CZjDiX15LhFGj_2G63kjk5GnWzIzoX7R0g&usqp=CAU" alt="" />
            <a href="/">Abdul Rafay</a>
            <span className='span'>commented on this</span>
          </div>
          <div className='icon'>
            <BsThreeDots className="BsThreeDots" size={22} />
            <RxCross2 className='RxCross2' size={22} />
          </div>
        </div>
        <hr />

        <div className='post'>
          <div>
            <img src="https://media.licdn.com/dms/image/D4D03AQE_QYRll5jquA/profile-displayphoto-shrink_200_200/0/1692021678811?e=1715212800&v=beta&t=xRal8lznvDRHQ4LkkwpO-ENHohlCyzex4a5cS8FB9ww" alt="" />
            <div className='nameandlevel'>
              <a href="/">Munib ul hassan
              </a> <GoDotFill size={10} />
              <span className='level'>2nd</span>
              <p className='tag-line'>Experienced Full Stack Developer with a Passion... </p>
              <div>
                <div className='duration'>
                  <span >4h </span>
                  <GoDotFill size={10} />
                  <FaEarthAsia size={14} />
                </div>
              </div>
            </div>
          </div>
          <div className='follow'>
            <FaPlus />  Follow
          </div>



        </div>

        <div className='description' >
          𝐈𝐦𝐩𝐥𝐞𝐦𝐞𝐧𝐭𝐞𝐝  𝐄𝐬𝐥𝐢𝐧𝐭 𝐢𝐧 𝐦𝐲 𝐮𝐩𝐜𝐨𝐦𝐢𝐧𝐠 𝐏𝐫𝐨𝐣𝐞𝐜𝐭!
          <br />
          <br />
          <p>
            <a href="/">#nodejs</a>
            <a href="/">#backend</a>
            <a href="/">#backenddevelopment</a>
            <a href="/">#backenddeveloper</a>
            <a href="/">#javascript</a> <br />
            <a href="/">#nodejsdeveloper</a>
            <a href="/">#node</a>
            <a href="/">#nodejsdevelopment</a>
          </p>
        </div>
        <img src="https://media.licdn.com/dms/image/D4D22AQF5cHxZ6wzaQw/feedshare-shrink_800/0/1709686325568?e=1712793600&v=beta&t=RAzIkzRm_VhhKrtrv4GUpDMszYEw44Xk0b2rmGn_jlE" alt="" />

        <div className='react'>
          <span>
            <AiOutlineLike color='blue' size={18} />
            <AiTwotoneHeart color='red' size={18} className='ai' />
            <span className='react-count'>Shabbir Hussain and 12 others</span>
          </span>
          <span>
            1 comment  .  1 repost
          </span>
        </div>
        <hr />

        <div className='react-icon'>
          <div className='icon-text'>
            <AiOutlineLike size={18} />
            Like
          </div>
          <div className='icon-text'>
            <FaRegCommentDots size={18} />
            Comment
          </div>
          <div className='icon-text'>
            <BiRepost size={18} />
            Repost
          </div>
          <div className='icon-text'>
            <LuSend size={18} />
            Send
          </div>
        </div>
      </article>

      <article >
        {/* <div className='comment'>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3CZjDiX15LhFGj_2G63kjk5GnWzIzoX7R0g&usqp=CAU" alt="" />
            <a href="">Abdul Rafay</a>
            <span className='span'>commented on this</span>
          </div>
          <div className='icon'>
            <BsThreeDots className="BsThreeDots" size={22} />
            <RxCross2 className='RxCross2' size={22} />
          </div>
        </div>
        <hr /> */}

        <div className='post'>
          <div>
            <img src="https://media.licdn.com/dms/image/D5635AQEieLlY70_V_Q/profile-framedphoto-shrink_100_100/0/1706593318041?e=1710334800&v=beta&t=1VLH46EZ_tVyv3qavOvI2X9m3Jk_FGDb7Lb9YYIoBaY" alt="" />
            <div className='nameandlevel'>
              <a href="/">  Daisy AgatoDaisy Agato</a> <GoDotFill size={10} />
              <span className='level'> Following</span>
              <p className='tag-line'>HR Recruiter at HitTou Tech Inc. </p>
              <div>
                <div className='duration'>
                  <span >4h </span>
                  <GoDotFill size={10} />
                  <FaEarthAsia size={14} />
                </div>
              </div>
            </div>
          </div>
          <div className='follow'>
            <FaPlus />  Follow
          </div>
        </div>

        <div className='description' >
          Hello, Connections!
          We hear you. We're still hiring for individuals driven by innovation, creativity, and a commitment to excellence.
          <br /><br />
          We're expanding our team and looking for a talented SEO Specialist to optimize, strategize, and dominate the search results. Ready to take your career to new heights.
          <br /><br />
          For all interested applicant kindly fill up this form:

          <br />
          <br />
          <p>
            <a href="/">https://lnkd.in/g9cdEukZ</a>
            {/* <a href="">#backend</a>
            <a href="">#backenddevelopment</a>
            <a href="">#backenddeveloper</a>
            <a href="">#javascript</a> <br />
            <a href="">#nodejsdeveloper</a>
            <a href="">#node</a>
            <a href="">#nodejsdevelopment</a> */}
          </p>
        </div>
        <img src="https://media.licdn.com/dms/image/D5622AQGqwOOJzACh-A/feedshare-shrink_800/0/1709696731812?e=1712793600&v=beta&t=eUTQ4Lzb1PBlvkYyWGr04KBgkd91LDFoo2wVXP1OThw" alt="" />

        <div className='react'>
          <span>
            <AiOutlineLike color='blue' size={18} />
            <AiTwotoneHeart color='red' size={18} className='ai' />
            <span className='react-count'>66</span>
          </span>
          <span>
            23 comment
          </span>
        </div>
        <hr />

        <div className='react-icon'>
          <div className='icon-text'>
            <AiOutlineLike size={18} />
            Like
          </div>
          <div className='icon-text'>
            <FaRegCommentDots size={18} />
            Comment
          </div>
          <div className='icon-text'>
            <BiRepost size={18} />
            Repost
          </div>
          <div className='icon-text'>
            <LuSend size={18} />
            Send
          </div>
        </div>
      </article>

      <article >
        {/* <div className='comment'>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3CZjDiX15LhFGj_2G63kjk5GnWzIzoX7R0g&usqp=CAU" alt="" />
            <a href="">Abdul Rafay</a>
            <span className='span'>commented on this</span>
          </div>
          <div className='icon'>
            <BsThreeDots className="BsThreeDots" size={22} />
            <RxCross2 className='RxCross2' size={22} />
          </div>
        </div>
        <hr /> */}

        <div className='post'>
          <div>
            <img src="https://media.licdn.com/dms/image/D4D03AQEFi7aGz1Ia3w/profile-displayphoto-shrink_100_100/0/1701605709734?e=1715212800&v=beta&t=6MjuT-qlluiF_l4fDFYU4Ig1qgm_4x5kd575DJb5n7E" alt="" />
            <div className='nameandlevel'>
              <a href="/"> Muhammad MasoodMuhammad Masood</a> <GoDotFill size={10} />
              <span className='level'>2nd</span>
              <p className='tag-line'>Graphic Designing | Logo Designing | Web Designing | Branding... </p>
              <div>

                {/* 
                | Social Media Post Designing | Print Media Designing | Video Editing | Motion Graphics | Product Designing | UI / UX DesigningGraphic Designing | Logo Designing | Web Designing | Branding | Social Media Post Designing | Print Media Designing | Video Editing | Motion Graphics | Product Designing | UI / UX Designing
                1d • */}
                <div className='duration'>
                  <span >4h </span>
                  <GoDotFill size={10} />
                  <FaEarthAsia size={14} />
                </div>
              </div>
            </div>
          </div>
          <div className='follow'>
            <FaPlus />  Follow
          </div>
        </div>

        <div className='description' >
          It's official: I'm now a Senior Graphic Designer at Madcom Digital - (PVT) Limited ! This is a Great milestone for me and I can't wait to start working on more creative and innovative projects. I want to thank to God at First in addition my awesome colleagues and boss for their trust and encouragement.

          <br />
          <br />
          <p>
            <a href="/">Madcom Digital - (PVT) Limited</a>
            {/* <a href="">#backend</a>
            <a href="">#backenddevelopment</a>
            <a href="">#backenddeveloper</a>
            <a href="">#javascript</a> <br />
            <a href="">#nodejsdeveloper</a>
            <a href="">#node</a>
            <a href="">#nodejsdevelopment</a> */}
          </p>
        </div>
        <img src="https://media.licdn.com/dms/image/D4E22AQEQgjnXQ5hXLA/feedshare-shrink_2048_1536/0/1709598302018?e=1712793600&v=beta&t=ib6eGyCnksxGrxpbXeoe-XYJOWOWu7RfRnKYBcwtbNQ" alt="" />

        <div className='react'>
          <span>
            <AiOutlineLike color='blue' size={18} />
            <AiTwotoneHeart color='red' size={18} className='ai' />
            <span className='react-count'>Muhammad Saad Shaikh and 12 others</span>
          </span>
          <span>
            7 comment
          </span>
        </div>
        <hr />

        <div className='react-icon'>
          <div className='icon-text'>
            <AiOutlineLike size={18} />
            Like
          </div>
          <div className='icon-text'>
            <FaRegCommentDots size={18} />
            Comment
          </div>
          <div className='icon-text'>
            <BiRepost size={18} />
            Repost
          </div>
          <div className='icon-text'>
            <LuSend size={18} />
            Send
          </div>
        </div>
      </article>

      <article >
        <div className='comment'>
          <div>
            <img src="https://media.licdn.com/dms/image/D5603AQEScr_1nTjBqg/profile-displayphoto-shrink_100_100/0/1702804473684?e=1715212800&v=beta&t=65yHiZGY2ZTrK3T2tJqvlRKzp5grfQ7IM7dbOSMUQKY" alt="" />
            <a href="/">Jalil Umar</a>
            <span className='span'>finds this funny</span>
          </div>
          <div className='icon'>
            <BsThreeDots className="BsThreeDots" size={22} />
            <RxCross2 className='RxCross2' size={22} />
          </div>
        </div>
        <hr />
        {/* 2d •  */}
        <div className='post'>
          <div>
            <img src="https://media.licdn.com/dms/image/C4D0BAQHa212XwpTpRw/company-logo_100_100/0/1660626687953/geeksforgeeks_logo?e=1717632000&v=beta&t=8W79UhZWxzn-ATXaLOoZtZ5FjXN0uIfWVfGeUoeD35M" alt="" />
            <div className='nameandlevel'>
              <a href="/">GeeksforGeeksGeeksforGeeks</a> <GoDotFill size={10} />
              <span className='level'>2nd</span>
              <p className='tag-line'>1,782,037 followers </p>
              <div>
                <div className='duration'>
                  <span >2d </span>
                  <GoDotFill size={10} />
                  <FaEarthAsia size={14} />
                </div>
              </div>
            </div>
          </div>
          <div className='follow'>
            <FaPlus />  Follow
          </div>
        </div>

        <div className='description' >
          Only a Full-Stack dev can bring them together like no-one else...🤝
          <br /><br />.  <br />.<br /> . <br />
          . <br />.<br />.<br /> .<br />  <br />
          <p>
            <a href="/">#devlife</a>
            <a href="/">#codinglife</a>
            <a href="/">#programminghumor</a>
            <a href="/">#backenddeveloper</a>
            <a href="/">#fullstackdeveloper</a> <br />
            <a href="/">#developercommunity</a>
            <a href="/">#trendingnow </a>
            <a href="/">#fullstackengineer</a>
          </p>
        </div>
        <img src="https://media.licdn.com/dms/image/D5622AQGdFysZeJo6IA/feedshare-shrink_800/0/1709548190813?e=1712793600&v=beta&t=8M6-hECtPrscRfTEfXUkJsrpw83cFAY5dj9lhiu5BGM" alt="" />

        <div className='react'>
          <span>
            <AiOutlineLike color='blue' size={18} />
            <AiTwotoneHeart color='red' size={18} className='ai' />
            <span className='react-count'>Shabbir Hussain and 12 others</span>
          </span>
          <span>
            1 comment  .  1 repost
          </span>
        </div>
        <hr />

        <div className='react-icon'>
          <div className='icon-text'>
            <AiOutlineLike size={18} />
            Like
          </div>
          <div className='icon-text'>
            <FaRegCommentDots size={18} />
            Comment
          </div>
          <div className='icon-text'>
            <BiRepost size={18} />
            Repost
          </div>
          <div className='icon-text'>
            <LuSend size={18} />
            Send
          </div>
        </div>
      </article>

    </div>
  )
}

export default Main