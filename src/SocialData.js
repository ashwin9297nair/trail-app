import React, { useEffect, useState } from 'react';
// import Shopper from '../../assets/people.png';
// import gitImage from '../../assets/git.png';
import { Card } from 'primereact/card';

const SocialData = (props) => {





    return (
        <div>
            <h3>Developer Data</h3>
            <div className='grid m-5'>
                <div className='col-2 p-5 socialborder '>
                    <article>
                        <div className='socialdata'>{props.data.developer_data?.stars}</div>
                        <div className='socialmini' ><span className="pi pi-star socialminiimage "></span>STAR</div>
                    </article>
                    <article>
                        <div className='socialdata'>{props.data.developer_data?.forks}</div>
                        {/* <div className='socialmini' ><img src={gitImage} />STAR</div> */}
                    </article>
                    <article>
                        <div className='socialdata'>{props.data.developer_data?.pull_requests_merged}</div>
                        <div className='socialmini' >MERGED PULL REQUESTS</div>
                    </article>
                    {/* <article>
                    <div className='socialdata'>{props.data.developer_data.forks}</div>
                    <div className='socialmini' ><span className="pi pi-star socialminiimage "></span>STAR</div>
                </article> */}

                </div>
                <div className='col-3 p-5 '>
                    <article>
                        <div className='socialdata'>{props.data.developer_data?.subscribers}</div>
                        <div className='socialmini' ><span className="pi pi-eye socialminiimage "></span>STAR</div>
                    </article>
                    <article>
                        <div className='socialdata'>{props.data.developer_data?.pull_request_contributors}</div>
                        {/* <div className='socialmini' ><img src={Shopper} />STAR</div> */}
                    </article>
                    <article>
                        <div className='socialdata'>{props.data.developer_data?.closed_issues}/{props.data.developer_data?.total_issues}</div>
                        <div className='socialmini' ><span className="socialminiimage "></span>CLOSED ISSUES / TOTAL ISSUES</div>
                    </article>
                    {/* <article>
                    <div className='socialdata'>6192</div>
                    <div className='socialmini' ><span className="pi pi-star socialminiimage "></span>STAR</div>
                </article> */}

                </div>
            </div >
            <div className='grid m-5'>
                <div className='col-3'>
                    <div className='socialcircle'>
                        <div className='text-center'> <i className="pi pi-reddit socialicon"></i></div>

                        <h3 className='text-center'>{props.data.community_data?.reddit_subscribers}</h3>
                        <div className='text-center socialtext'>REDDIT SUBSCRIBERS</div>
                    </div>
                </div>
                <div className='col-2 m-5'>
                    <div className='socialcirclesmall'>
                        <div className='text-center'> <i className="pi pi-reddit socialiconsmall"></i></div>

                        <h4 className='text-center'>{props.data.community_data?.reddit_accounts_active_48h}</h4>
                        <div className='text-center socialtextmall'>AVERAGE ACCOUNTS ACTIVE</div>
                    </div>
                </div>
                <div className='col-2 m-5'>
                    <div className='socialcirclesmall'>
                        <div className='text-center'> <i className="pi pi-reddit socialiconsmall"></i></div>

                        <h4 className='text-center'>{props.data.community_data?.reddit_average_posts_48h}</h4>
                        <div className='text-center socialtextmall'>AVERAGE NEW HOT POSTS PER HOUR</div>
                    </div>
                </div>
                <div className='col-2 m-5'>
                    <div className='socialcirclesmall'>
                        <div className='text-center'> <i className="pi pi-reddit socialiconsmall"></i></div>

                        <h4 className='text-center'>{props.data.community_data?.reddit_average_comments_48h}</h4>
                        <div className='text-center socialtextmall'>AVERAGE NEW COMMENTS PER HOUR</div>
                    </div>
                </div>
            </div>
            <div className='grid m-5'>
                <div className='col-3'>
                    <div className='socialcircle'>
                        <div className='text-center'> <i className="pi pi-twitter socialicon"></i></div>

                        <h3 className='text-center'>{props.data.community_data?.twitter_followers}</h3>
                        <div className='text-center socialtext'>TWITTER FOLLOWERS</div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='socialcircle'>
                        <div className='text-center'> <i className="pi pi-telegram socialicon"></i></div>

                        <h3 className='text-center'>{props.data.community_data?.telegram_channel_user_count}</h3>
                        <div className='text-center socialtext'>TELEGRAM USERS</div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}
export default SocialData