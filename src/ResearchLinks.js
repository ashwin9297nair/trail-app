import React, { useEffect, useState } from 'react';
import axios from 'axios'
import moment from 'moment';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import { Badge } from 'primereact/badge';
const ResearchLinks = (props) => {
    const [selectedCity1, setSelectedCity1] = useState(null);
    const [lastClick, setLastClick] = useState(null);
    console.log(props.link, 'pppp')


    const buttondata = (data) => {
        let content = []

        // return data?.map((item,index)=><Button key={index} label="Plain" onClick={()=> window.open(item, "_blank")} className="p-button-raised p-button-text p-button-plain" />)
        for (let i = 0; i < data?.length; i++) {
            if (!!data[i]) {
                let filtered_label = data[i].replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]
                filtered_label = filtered_label.replace('.com', '')
                console.log(filtered_label, 'filtered')
                let upper_cased = filtered_label.charAt(0).toUpperCase() + filtered_label.slice(1)
                console.log(upper_cased, 'Upper')
                content.push(
                    <Button style={{ color: 'black' }} key={i} label={upper_cased} onClick={() => window.open(data[i], "_blank")} className="p-button-raised p-button-text p-button-plain btn-success" />
                )
            }

        }
        return content
    }
    const categoriedata = (data) => {
        let content = []
        console.log('hhhh')

        for (let i = 0; i < data?.length; i++) {
            if (!!data[i]) {
                content.push(
                    <Chip style={{ color: 'black' }} key={i} label={data[i]} className="mr-2 mb-2 btn-success" />

                )
            }

        }
        return content
    }
    function nFormatter(num) {
        if (num >= 1000000000) {
           return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 't';
        }
        if (num >= 1000000) {
           return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
        }
        if (num >= 1000) {
           return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
   }

    return (
        
        <div className='p-5'>
           
            <h3>Info</h3>
            <div className='grid'>
                <div className='col-1 pt-3 pl-2'>Website</div>
                <div className='col-6' >
                    {buttondata(props.linkdata.links?.homepage)}
                </div>
            </div>
            <div className='grid'>
                <div className='col-1 pt-3 pl-2'>Explorers</div>
                <div className='col-6'>
                    {buttondata(props.linkdata.links?.blockchain_site)}
                </div>
            </div>
            <div className='grid'>
                {/* {socialink} */}
                <div className='col-1 pt-3 pl-2'>Community</div>

                <div className='col-6'>
                    <Button badge={nFormatter(props.linkdata.community_data?.facebook_likes)} badgeClassName="p-badge-danger" style={{ color: 'black' }} className="p-button-raised p-button-text p-button-plain btn-success" label='Facebook' icon="pi pi-facebook" onClick={() => window.open(`https://www.facebook.com/${props.linkdata.links?.facebook_username}`, "_blank")} />
                    <Button badge={nFormatter(props.linkdata.community_data?.twitter_followers)} badgeClassName="p-badge-danger badgewidth" style={{ color: 'black' }} className="p-button-raised p-button-text p-button-plain btn-success" label='Twitter' icon="pi pi-twitter" onClick={() => window.open(`https://www.twitter.com/${props.linkdata.links?.twitter_screen_name}`, "_blank")} />
                    <Button badge={nFormatter(props.linkdata.community_data?.reddit_subscribers)} badgeClassName="p-badge-danger badgewidth" style={{ color: 'black' }} className="p-button-raised p-button-text p-button-plain btn-success" label='Reddit' icon="pi pi-reddit" onClick={() => window.open(props.linkdata.links.subreddit_url, "_blank")} />                   
                    {buttondata(props.linkdata.links?.official_forum_url)}
                </div>
            </div>
            <div className='grid'>
                <div className='col-1 pt-3 pl-2'>Source Code</div>

                <div className='col-6'>
                    <Button style={{ color: 'black' }} className="p-button-raised p-button-text p-button-plain btn-success" label='Github' icon="pi pi-github" onClick={() => {
                        
                        window.open(props.linkdata.links?.repos_url.github[0], "_blank")
                }} />
                </div >
            </div>
            <div className='grid'>
                <div className='col-1 pt-3 pl-2'>Categories</div>
                <div className='col-6'>
                    {categoriedata(props.linkdata.categories)}
                </div>
            </div>

        </div>
    )







}

export default ResearchLinks