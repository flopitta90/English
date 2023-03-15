import {FacebookShareButton,LinkedinShareButton,TwitterShareButton,WhatsappShareButton,TwitterIcon, LinkedinIcon, FacebookIcon, WhatsappIcon} from 'react-share'

export const ShareButtons = () => {
  return (
    <div className='m-3 w-56 flex justify-around md:flex-col md:h-56 md:w-auto '>
    <FacebookShareButton url='http://wordup-ai.vercel.app' quote="I didn't have a clue about this one" hashtag='#learning'>
    <FacebookIcon borderRadius={20} size="50"/>
    </FacebookShareButton>
    <TwitterShareButton url='http://wordup-ai.vercel.app' 
    title="I didn't have a clue about this one"
    hashtags={['learning', 'wordup', 'english']}
    related={['@florencia.confo']}
    >
    <TwitterIcon borderRadius={20} size="50"/>
    </TwitterShareButton>
    <LinkedinShareButton url='http://wordup-ai.vercel.app' 
    title={"WordUp"}
    summary={'WordUp its an app to learn new English words everyday, check it out!'}
    source='http://wordup-ai.vercel.app'>
    <LinkedinIcon borderRadius={20} size="50"/>
    </LinkedinShareButton>
    <WhatsappShareButton url='http://wordup-ai.vercel.app' title="I didn't have a clue about this one">
    <WhatsappIcon borderRadius={20} size="50"/>
    </WhatsappShareButton>
    </div>
  )
}
