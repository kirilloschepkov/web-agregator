import styled from "styled-components";
import React from 'react';
import profileIMG from '../../assets/images/profile_default/profile.svg'
import {Link} from "react-router-dom";
import dropdownOutline from "../../assets/images/icons/arrows/dropdown_outline.svg";
import FireIcon from "../../assets/images/icons/voices.svg";
import { useData } from "../../context/DataContext";


const Profile = () => {
  let isActive = false;

  const {data} = useData();

  if (!data.countFireUser || typeof data.countFireUser !== 'number') {
      data.countFireUser = 0;
  }

  return (
      <ProfileStyle>
        <LinkProfile to={'#'}>
          <span style={{marginRight: 11, transition: 'color 0.3s ease-in-out'}}>Гость</span>
          <img src={profileIMG} alt="" style={{marginRight: 8}}/>
        </LinkProfile>
        <DropLinksWrapper>
          <DropLinks>
            <DropLink to={'/profile/information'}>Профиль</DropLink>
            <DropLink to={'/auth/login'}>Войти</DropLink>
          </DropLinks>
        </DropLinksWrapper>
        <FireWrapper>
          <Fire isActive = {isActive} src={FireIcon} alt=""/>
          <CountFire>{data.countFireUser}</CountFire>
        </FireWrapper>
      </ProfileStyle>
  )
}

const CountFire = styled.span`
  color: #FFF;

  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const FireWrapper = styled.div`
  display: flex;
  align-items: center;
`

type PropsFire = {
  isActive: boolean;
}

const Fire = styled.img<PropsFire>`
  high: 22px;
  width: 22px;
  filter: ${({ isActive }) => isActive ? 'none' : 'grayscale(100%)'}
`

const LinkProfile = styled(Link)`
  display: flex;
  align-items: center;

  margin-right: 2px;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: var(--white-color);

  &:hover span {
    color: var(--blue-bg);
  }

  @media (max-width: 500px) {
    span {
      display: none;
    }
  }

  &::after {
    content: '';
    width: 16px;
    height: 16px;
    background: url(${dropdownOutline}) center/contain no-repeat;
  }
`

const ProfileStyle = styled.div`
  display: flex;
  position: relative;
  
  &:hover ul {
    opacity: 1;
    visibility: visible;
  }
`

const DropLinksWrapper = styled.ul`
  visibility: hidden;
  position: absolute;
  opacity: 0;
  min-width: 100%;
  top: 100%;
  right: 0;
`

const DropLinks = styled.div`
  padding: 20px 25px;
  margin-top: 20px;
  
  background-color: var(--dark-grey-color);
  
  transition: opacity 0.3s ease-in-out;
`

const DropLink = styled(Link)`
  margin-bottom: 12px;
  font-size: 14px;

  color: var(--title-input);
  
  &:hover {
    color: var(--blue-bg);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  transition: color 0.3s ease-in-out;
`


export default Profile

