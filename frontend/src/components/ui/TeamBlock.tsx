import React from "react";
import styled from "styled-components";
import {InputBox, ProfileInput, TitleInput} from "../../pages/Profile/components/Information";
import {TeamInterface} from "../../interfaces/Team.interface";
import {Contacts, Role, WrapperComponent} from "../CreateTeamBlock";


const dataTeam: TeamInterface = {
    teamName: 'DreamTeam',
    members: [
        {name: 'Петров Игорь Васильевич', group: 'РИ-210912', role: 'UI/UX-дизайнер', contacts: 'https://telegram.me/s/urfu_ru'},
        {name: 'Кашевников Игорь Николаевич', group: 'РИ-210912', role: 'Team Lead', contacts: 'https://telegram.me/s/urfu_ru'},
        {name: 'Дробцов Игорь Ильич', group: 'РИ-210912', role: 'Game-дизайнер', contacts: 'https://telegram.me/s/urfu_ru'},
        {name: 'Моветонов Игорь Догматович', group: 'РИ-210912', role: 'Unity-разработчик', contacts: 'https://telegram.me/s/urfu_ru'},
    ]
}

const GridTeam = styled.div`
    display: flex;

    @media (max-width: 777px) {
        flex-direction: column;
    }
`

const TeamBlock = ({buttonExit}: {buttonExit?: boolean}) => {
  return (
      <>
        <GridTeam>
          <div style={{marginRight: '24px'}}>
            <TitleInput>Роль в команде</TitleInput>
            <InputBox style={{marginBottom: '47px', width: '356px'}}>
              <ProfileInput style={{color: '#93AED6'}} disabled={true} readOnly={true} value={'Конципт дизанер'}/>
            </InputBox>
          </div>
          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <TitleInput>Ваша команда</TitleInput>
              <CountMembers>Участников: 4</CountMembers>
            </div>
            <InputBox style={{marginBottom: '47px', width: '356px'}}>
              <ProfileInput disabled={true} readOnly={true} value={dataTeam.teamName}/>
            </InputBox>
          </div>
        </GridTeam>

        {/*<TitleInput>Ваша команда</TitleInput>*/}
        {/*<InputBox style={{marginBottom: '47px'}}>*/}
        {/*  <ProfileInput disabled={true} readOnly={true} value={dataTeam.teamName}/>*/}
        {/*</InputBox>*/}
        <div style={{marginBottom: '109px'}}>
          {dataTeam.members.map((member, id) => (
              <>
                <TitleInput>Участник команды #{id + 1}</TitleInput>
                <InputBox>
                  <ProfileInput disabled={true} readOnly={true} value={member.name + ' ' + member.group}/>
                </InputBox>
                <WrapperComponent style={{marginBottom: '47px'}}>
                    <Role>Роль: <span style={{color: '#D0E6EE'}}>{member.role}</span></Role>
                    <Contacts target={'_blank'} href={member.contacts}>Контакты</Contacts>
                </WrapperComponent>
              </>)
          )}
        </div>

            {buttonExit && <ButtonLeaveTeam>Выйти из команды</ButtonLeaveTeam>}
        </>
    )
}

const CountMembers = styled.div`
    color: var(--d-0-e-6-ee, rgba(208, 230, 238, 0.50));
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 20px;
    //transform: translateY(20px);
`

const ButtonLeaveTeam = styled.button`
  margin-left: auto;
  width: 356px;
  height: 58px;
  padding: 0 16px;
  border-radius: 3px;
  border: 1px solid var(--ff-8197, #FF8197);
  background: #282828;

  color: var(--ff-8197, #FF8197);
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: var(--ff-8197, #FF8197);
    color: white;
  }
`

export default TeamBlock