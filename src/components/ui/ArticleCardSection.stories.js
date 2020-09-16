// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'

import ArticleCardSection from './ArticleCardSection'
import ArticleCard from './ArticleCard'

export const ArticleCardSectionSample = () => (
  <ArticleCardSection title='Keep Moving Forward'>
    <ArticleCard
      poster='https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost//2019/08/X-Teamer.jpg'
      category='Community'
      title='X-Team: The Most Energizing Community for Developers'
      excerpt="You've heard of X-Team, but you don't quite know what it is. Maybe you've noticed many developers seem eager to join X-Team (💘) but you don't quite understand why. Maybe you've seen some video on YouTube that shows a pretty epic adventure but you don't know what to make of it."
      url='https://x-team.com/blog/most-energizing-community-developers/'
    />
    <ArticleCard
      poster='https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost//2020/06/Vibrant-Community--1-.png'
      category='Company'
      title='Applicants FAQ'
      excerpt="What happens when I pass your vetting? Once that happens, you'll be put on a shortlist of candidates, which consists of developers who’ve come from all our recruiting channels. You can think of it as a Top 5 or Top 10 of candidates for a given role."
      url='https://x-team.com/blog/applicants-faq/'
    />
    <ArticleCard
      poster='https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost//2020/07/GitHub-Profile.jpg'
      category='Growth'
      title='How to Stand Out With Your GitHub Profile'
      excerpt="GitHub recently released a new feature that is still quite hidden, but that can really help you stand out when you're searching for work as a developer. You can now create a README file that features front and center on your GitHub profile. Your personal documentation, if you will."
      url='https://x-team.com/blog/stand-out-with-a-github-profile/'
    />
  </ArticleCardSection>
)

storiesOf('UI Components|ArticleCardSection', module)
  .add('basic usage', () => (
    <ArticleCardSectionSample />
  ))

storiesOf('UI Components|ArticleCardSection/Debug', module)
  .add('missing props', () => (
    <ArticleCardSection />
  ))
