import React from "react";
import TeamBlock from "./ui/TeamBlock";
import styled from "styled-components";
import {TitleInput} from "../pages/Profile/components/Information";
import img from "../assets/images/project_preview/image1.jpg"
import Statistics from "./Aside/components/Statistics";
import RatingProject from "./RatingProject";

const CheckedProjectTeamBlock = () => {
    return (
        <>
            <PreviewProject>
                <div style={{marginRight: '9.5rem'}}>
                    <TitleInput>Merge Комбинаторика</TitleInput>
                    <img style={{width: '26.1rem', height: '15.3rem', borderRadius: '3px'}} src={img} alt={'Постер'}/>
                </div>
                <div>
                    <PublicationDate>Проект опубликован <span
                        style={{color: 'white'}}>24.03.2022</span></PublicationDate>
                    <RatingProject endVoting={false} currentPlace={14} currentVoices={350} fullVoices={1500}/>
                </div>
            </PreviewProject>
            <TeamBlock/>
        </>
    )
}

export const PublicationDate = styled.div`
    margin-bottom: 1.6rem;
    color: var(--d-0-e-6-ee, rgba(208, 230, 238, 0.50));
    font-family: Inter, sans-serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const PreviewProject = styled.div`
    display: flex;
`

export default CheckedProjectTeamBlock