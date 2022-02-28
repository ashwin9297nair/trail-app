import React from "react"
import Card from "./Card"

import axios from "axios";
import { useEffect, useState } from "react"
import './FeedParser.css'
import { InputText } from 'primereact/inputtext';
let data=[
    {
        "_id": "620fa5e8dd460dba3eb38416",
        "Link": "https://www.ibm.com/blogs/blockchain/2021/12/blockchain-digital-assets-enterprise/",
        "Description": "Digital assets have been ubiquitous in the news these days: cryptocurrencies, stablecoins or non-fungible tokens (NFTs), to name a few. Their applications are even more varied, from representing financial instruments to safeguarding authenticity and ownership of digital IP or physical assets. Enterprises that engage in digital assets have significant opportunity to deliver meaningful value to […]\nThe post Take digital assets into the enterprise with blockchain appeared first on IBM Supply Chain and Blockchain Blog.\n",
        "Image": "https://www.ibm.com/blogs/blockchain/wp-content/uploads/2021/12/Digital-assets-financial-market.jpg",
        "PubDate": "Thu, 16 Dec 2021 12:55:15 +0000",
        "Title": "Take digital assets into the enterprise with blockchain IBM Supply Chain and Blockchain Blog",
        "__v": 0
    },
    {
        "_id": "620fa5a0dd460dba3eb383c9",
        "Link": "https://101blockchains.com/g2-best-software-awards-2022/",
        "Description": "101 Blockchains has emerged as one of the pioneers in the field of blockchain education and research in recent times. With a wide assortment of learning resources on blockchain technology, we have evolved as a reliable platform for blockchain training. Over the years, the appreciation of blockchain practitioners and our beloved learners has been fuelling our [...]\nThe post 101 Blockchains Earned #16 on G2’s list of Best Fastest Growing Products for 2022 appeared first on 101 Blockchains.\n",
        "Image": "https://101blockchains.com/wp-content/uploads/2022/02/g2-best-software-2021-asset-twitter-1200x675-blue-2.png",
        "PubDate": "Thu, 10 Feb 2022 09:45:52 +0000",
        "Title": "101 Blockchains Earned #16 on G2’s list of Best Fastest Growing Products for 2022",
        "__v": 0
    },
    {
        "_id": "620fa53edd460dba3eb3835c",
        "Link": "https://www.blockedge.io/blog/does-your-supply-chain-need-blockchain/",
        "Description": "If there is one area where blockchain continues to find prominence and support, it is in supply chains. And the reasons are obvious: the promise of unmatchable \nThe post Does Your Supply Chain Need Blockchain? What Blockchain Solution Would Suit Your Value Chain? appeared first on Blog.\n",
        "Image": "https://www.blockedge.io/blog/wp-content/uploads/2021/12/supply-chain-blockchain.jpg",
        "PubDate": "Wed, 15 Dec 2021 13:14:54 +0000",
        "Title": "Does your supply chain need blockchain?",
        "__v": 0
    },
    {
        "_id": "620fa545dd460dba3eb38363",
        "Link": "https://blog.quillhash.com/2022/02/blockchain-consensus-mechanisms-beyond-pow-and-pos",
        "Description": "Read Time:  5 minutes Blockchain technology with a network of nodes on which cryptocurrencies are built wouldn’t thrive without consensus mechanisms. These refer to methodologies used in the blockchain network to achieve agreement (consensus) and trust across a decentralized network of computers. Blockchain consensus mechanisms play a vital role in ensuring that the security and performance of the network …\n  Blockchain Consensus Mechanisms Beyond PoW and PoS Read More »\nThe post Blockchain Consensus Mechanisms Beyond PoW and PoS appeared first on Blog.quillhash.\n",
        "Image": "https://blog.quillhash.com/media/uploads/2022/02/Banner-copy-min.jpg",
        "PubDate": "Fri, 18 Feb 2022 11:25:56 +0000",
        "Title": "Blockchain Consensus Mechanisms Beyond PoW and PoS",
        "__v": 0
    },
    {
        "_id": "620fa5b2dd460dba3eb383de",
        "Link": "https://www.blockchain-council.org/info/what-is-the-future-of-blockchain-technology-in-india/",
        "Description": "From simply being a Bitcoin platform conceived by Satoshi Nakamoto in 2009, blockchain has emerged as a promising innovative backbone technology that adds immense value to businesses across diverse sectors. Blockchain technology is making waves in India, with the government planning to set up a national blockchain framework that will be a centralised ecosystem covering...Read More",
        "Image": "https://www.blockchain-council.org/wp-content/uploads/2022/02/What-is-the-future-of-Blockchain-technology-in-India-01.png",
        "PubDate": "Thu, 17 Feb 2022 10:09:44 +0000",
        "Title": "What is the future of Blockchain technology in India? -",
        "__v": 0
    },
    {
        "_id": "620fa553dd460dba3eb38375",
        "Link": "https://blog.quillhash.com/2022/01/the-big-four-working-towards-blockchain-auditing",
        "Description": "Read Time:  4 minutes Blockchain and cryptocurrencies within its ecosystem remain phenomenal breakthroughs that have influenced the growth of the creator economy, multichain industries, banking, and fintech sectors. In general, Blockchain has grown to over $4.9 billion, with experts predicting this growth to continue with a Compound Annual Growth Rate (CAGR) of 68.4% to reach $67.4 billion by 2026. …\n  The Big Four Working Towards Blockchain Auditing Read More »\nThe post The Big Four Working Towards Blockchain Auditing appeared first on Blog.quillhash.\n",
        "Image": "https://blog.quillhash.com/media/uploads/2021/10/cropped-Favicon-2-1-2.png",
        "PubDate": "Fri, 07 Jan 2022 12:04:46 +0000",
        "Title": "The Big Four Working Towards Blockchain Auditing",
        "__v": 0
    },
    {
        "_id": "620fa537dd460dba3eb38354",
        "Link": "https://www.blockedge.io/blog/blockchain-solving-automotive-industry-problems/",
        "Description": "Blockchain Adoption Challenges The potential of blockchain technology goes beyond cryptocurrency. Enterprises in all sectors, including finance, healthcare, supply\nThe post What Problems Does Blockchain Solve For The Automotive Sector appeared first on Blog.\n",
        "Image": "https://www.blockedge.io/blog/wp-content/uploads/2022/02/application-and-benefits-of-blockchain.png",
        "PubDate": "Tue, 01 Feb 2022 08:52:04 +0000",
        "Title": "Key challenges in the automotive industry and the blockchain solutions.",
        "__v": 0
    },
    {
        "_id": "620fa53cdd460dba3eb3835a",
        "Link": "https://www.blockedge.io/blog/top-6-blockchain-use-cases-by-industry/",
        "Description": "Businesses today are forced to adapt to the rapid digital transformation. Blockchain is one of the latest breakthrough technologies making the future bright for businesses.\nThe post From pharma to automotive – Explore the top-rated blockchain use cases by industry appeared first on Blog.\n",
        "Image": "https://www.blockedge.io/blog/wp-content/uploads/2021/12/blockchain-industry-use-cases.jpg",
        "PubDate": "Fri, 17 Dec 2021 13:51:24 +0000",
        "Title": "Explore blockchain use cases by industry",
        "__v": 0
    },
    {
        "_id": "620fa541dd460dba3eb3835e",
        "Link": "https://www.blockedge.io/blog/how-blockchain-will-affect-consumer-and-business-markets/",
        "Description": "Every day, you find a new DeFi (Decentralized Finance) product getting funded, built upon blockchain networks such as Ethereum. And what do they intend to achieve?\nThe post Into a Tokenized Economy: How Blockchains will affect Consumer & Business Markets appeared first on Blog.\n",
        "Image": "https://www.blockedge.io/blog/wp-content/uploads/2021/11/blockchain-in-enterprise-markets.jpg",
        "PubDate": "Tue, 02 Nov 2021 14:48:16 +0000",
        "Title": "How Blockchains will affect Consumer and Enterprise Markets",
        "__v": 0
    },
    {
        "_id": "620fa566dd460dba3eb38387",
        "Link": "https://blog.coinfund.io/daos-what-the-esg-movement-can-learn-from-blockchain-governance-a7d0c7dbccde?source=rss----f5f136d48fc3---4",
        "Description": "Read Time:  5 minutes As the year comes to an end, the blockchain industry can appreciate the tremendous growth it has seen in the last twelve months and look forward to the endless possibilities in the coming year.  In 2021, blockchain and its technologies grew to $4.9 billion as the industry enjoyed a surge in mainstream adoption and found …\n  Top 5 Crypto Trends To Watch For In 2022 Read More »\nThe post Top 5 Crypto Trends To Watch For In 2022 appeared first on Blog.quillhash.\n",
        "Image": "https://miro.medium.com/fit/c/152/152/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
        "PubDate": "Mon, 15 Nov 2021 16:22:58 +0000",
        "Title": "DAOs: What the ESG movement can learn from blockchain governance",
        "__v": 0
    }
]
//icons

export default function FeedParser() {
    // const [data, setData] = useState([])
    // const [search, setSearch] = useState("")
    // const [noOfFeeds, setNoOfFeeds] = useState(0);
    // const [loading, setLoading] = useState(false);
    // const [endOfList, setEndOfList] = useState(false);



    // useEffect(() => {
    //     sendSearch(0)
    // }, [search])

    // console.log(search)

    // const sendSearch = async (number) => {

    //     let searchApi = await axios.post(Constants.BASE_URL + '/Rss_Feed_route/', { search: search, count: number + 10 });
    //     console.log(searchApi.data, 'FEEEEED');
    //     if (searchApi.data.data.length < 10) {
    //         setEndOfList(true);
    //         console.log("SendSearch  if Stat:  ", searchApi.data.data.length < 10)
    //     }
    //     else if (searchApi.data.data.length === data.length && searchApi.data.data.length <= 10 && search !== "") {
    //         setEndOfList(true);

    //     }
    //     else {
    //         setEndOfList(false);
    //     }

    //     setNoOfFeeds(number + 10)
    //     setData(searchApi.data.data)
    //     console.log(searchApi.data.data,'feeddata')
    // }

    // const seeMore = async () => {
    //     setLoading(true);
    //     setEndOfList(false)
    //     await sendSearch(noOfFeeds)
    //     setLoading(false);
    // }

    const cards = data.map(item => {

        return (
            <div className='col-5 m-1' >
            <Card 
                key={item._id}
                {...item}
            />
            </div>
        )

    })

    // window.localStorage.setItem("search", "")

    return (
        <div >

            <div>
               
                <div className="cards-list row">
                   
                    {cards}
                   
                </div>
            </div>
            {/* {endOfList ? null : <button className="seeMore"
                onClick={() => seeMore()}>{loading ? "loading" : "See More"}</button>} */}


        </div>
    )
}

// export default FeedParser;
