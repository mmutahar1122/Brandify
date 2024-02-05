import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'



const ServicesList = ({state,setModal}) => {
    console.log('state',state)
    
    const [open, setOpen] = useState(true)

    const handleModalClick = (e) => {
      e.stopPropagation(); // Prevent click from bubbling to the backdrop
    }
    const cancelButtonRef = useRef(null)
    const dataMapping= {
      logo_Design: [
      "Wordmark or Logotype",
      "Lettermark or Monogram",
      "Brandmark or Symbol",
      "Abstract Logo",
      "Mascot Logo",
      "Combination Mark",
      "Emblem or Badge",
      "Dynamic or Fluid Logo",
      "Pictorial Mark or Icon",
      "Negative Space Logo",
      "Typographic Logo",
      "Geometric Logo",
      "Illustrative Logo"
  ],
  PACKAGING_DESIGN: [
    "Minimalist Packaging",
    "Eco-Friendly Packaging",
    "Vintage-Inspired Packaging",
    "Luxury Product Packaging",
    "Interactive Packaging",
    "Patterned Packaging",
    "Bright and Bold Colored Packaging",
    "Transparent Packaging",
    "Typography-Focused Packaging",
    "Seasonal or Limited-Edition Packaging"
],
SOCIAL_MEDIA_POST_DESIGN: [
  "Infographics",
  "User-Generated Content",
  "Behind-the-Scenes Posts",
  "Giveaways and Contests",
  "Inspirational Quotes",
  "Product Showcases",
  "Educational Posts",
  "Testimonials or Reviews",
  "Event Highlights",
  "Interactive Polls and Questions"
],
MENU_DESIGN: [
  "Classic Text-Only Menu",
  "Illustrated Menu",
  "Board or Chalkboard Style Menu",
  "Photographic Menu",
  "Minimalist Menu",
  "Themed Menu (e.g., Retro, Futuristic)",
  "Seasonal Menu",
  "Handwritten Style Menu",
  "Digital Interactive Menu",
  "Folded Brochure Style Menu"
],
FLYER_BROUCHER : [
  "Corporate Brochure",
  "Event Flyer",
  "Real Estate Listing Brochure",
  "Product Catalogue",
  "Travel Brochure",
  "Educational Brochure",
  "Menu Flyer",
  "Fitness or Gym Brochure",
  "Fashion Lookbook",
  "Charity or Fundraising Flyer"
],

INSTA_FB_ACCOUNT: [
  "Content Creation: Producing high-quality images, videos, and written posts.",
  "Content Planning: Scheduling posts for optimal times and maintaining a consistent posting calendar.",
  "Audience Engagement: Responding to comments, messages, and engaging with followers' content.",
  "Analytics Monitoring: Tracking performance metrics like engagement rates, follower growth, and reach.",
  "Ad Campaigns: Creating and managing advertising campaigns to target specific audiences.",
  "Influencer Collaborations: Partnering with influencers to expand reach and credibility.",
  "Hashtag Strategy: Using relevant and trending hashtags to increase post visibility.",
  "Brand Voice Consistency: Ensuring all content aligns with the brand's tone and message.",
  "Story and Reels Creation: Utilizing Instagram Stories and Reels for more dynamic content.",
  "Community Building: Creating a sense of community among followers through interactions and shared values."
],
BRANDING: [
  "Brand Identity: Developing a unique name, logo, and visual design that represents the brand.",
  "Brand Positioning: Establishing the brand's unique place in the market and in the minds of consumers.",
  "Brand Voice: Creating a consistent tone and style of communication that reflects the brand's personality.",
  "Brand Storytelling: Crafting a compelling narrative that connects the brand with its audience.",
  "Brand Experience: Designing customer experiences that reinforce the brand's values and promises.",
  "Brand Loyalty Programs: Implementing programs to reward and retain loyal customers.",
  "Brand Marketing: Using various marketing channels to promote the brand and its products/services.",
  "Brand Partnerships: Collaborating with other brands to expand reach and credibility.",
  "Brand Consistency: Ensuring uniformity across all touchpoints, from packaging to digital presence.",
  "Brand Evolution: Continuously adapting and evolving the brand to stay relevant and competitive."
],
AND_MUCH_MORE: [
  "Customer Feedback and Engagement: Actively seeking and incorporating customer feedback to improve brand relevance.",
  "Digital Presence: Establishing a strong online presence through a website, social media, and online marketing.",
  "Public Relations: Managing the brand's public image and media relations to enhance its reputation.",
  "Employee Branding: Encouraging employees to embody and promote the brand values in their interactions.",
  "Sustainable Practices: Incorporating eco-friendly and ethical practices to appeal to socially conscious consumers.",
  "Cultural Relevance: Ensuring the brand stays culturally relevant and sensitive to diverse audiences.",
  "Content Marketing: Creating valuable and relevant content to attract and engage a target audience.",
  "Brand Extensions: Expanding the brand into new categories or markets while maintaining core brand values.",
  "Crisis Management: Effectively handling potential crises to protect the brand's reputation.",
  "Innovation: Continuously introducing new ideas, products, or methods to keep the brand dynamic and forward-thinking."
]
    }
const currentArray = state ? dataMapping[state] : [];
// console.log('category',category)
  return (
    <div onClick={handleModalClick}>

    <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="relative " onClose={() => {setOpen(false); setModal(false)}}>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 text-center">
                <p className='text-[32px] font-bold'>{state}</p>

                  <div className="sm:flex sm:items-start justify-center">
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 ">
                          {currentArray?.map((name)=>{
                            return <>
                            <div className='hover:text-[#149DDD] font-semibold'>{name}</div>
                            </> 
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-[#149DDD] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto"
                    onClick={() => {setOpen(false);setModal(false)}}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>


    </div>
  )
}

export default ServicesList

