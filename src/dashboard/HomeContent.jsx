import React from 'react'
import { ContentSubtitleContianer, HomeContentContainer, HomeContentSubTitle, HomeContentTitle, HomeContentWrapper } from '../components/styles'
import {Group, Coronavirus} from '@mui/icons-material';

const HomeContent = () => {
  return (
        <HomeContentContainer>
            <HomeContentWrapper>
                <HomeContentTitle>Total Commuters Today</HomeContentTitle>
                <ContentSubtitleContianer>
                    <HomeContentSubTitle>
                        0 <Group/>
                    </HomeContentSubTitle>
                </ContentSubtitleContianer>
            </HomeContentWrapper>

            <HomeContentWrapper>
                <HomeContentTitle>Mild Symptoms</HomeContentTitle>
                <ContentSubtitleContianer>
                    <HomeContentSubTitle mild={true}>
                        0 <Coronavirus/>
                    </HomeContentSubTitle>
                </ContentSubtitleContianer>
            </HomeContentWrapper>

            <HomeContentWrapper>
                <HomeContentTitle >Severe Symptoms</HomeContentTitle>
                <ContentSubtitleContianer>
                    <HomeContentSubTitle severe={true}>
                        0 <Coronavirus/>
                    </HomeContentSubTitle>
                </ContentSubtitleContianer>
            </HomeContentWrapper>
        </HomeContentContainer>
    )
}

export default HomeContent