import React from 'react'
import {Wrapper,Container,Title,Description ,TimelineSection} from './EducationStyle';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {education , experiences} from '../../data/constants'
import EducationCard from '../Cards/EducationCard';

const Education = () => {
  return (
    <Container id="education">
    <Wrapper>
        <Title>Education</Title>
        <Description>
            My education has been a journey of self-discovery and growth. My educational details are as follows.
        </Description>
        <TimelineSection>
            <Timeline>
                {education.map((education,index) => (
                    <TimelineItem >
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <EducationCard education={education}/>
                        </TimelineContent>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="secondary" />
                            {index !== experiences.length  && <TimelineConnector style={{ background: '#854CE6' }} />}
                        </TimelineSeparator>
                    </TimelineItem>
                ))}
            </Timeline>

        </TimelineSection>
    </Wrapper>
</Container>
  )
}

export default Education