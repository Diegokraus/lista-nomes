import styled from "styled-components";
import Background from "./assets/background1.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height:100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItems = styled.div`
  border-radius: 61px 61px 0px 0px;
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  padding: 50px 36px;

  display: flex;
  flex-direction: column;
  height:100vh;
`;

export const H1 = styled.h1`
  font-weight:bold;
  font-size:34px;
  line-height:40px;
  text-align:center;
  color:#fff;
`;

export const InputLabel = styled.p`
  color: #EEE;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
    margin-left:25px;
`;

export const Input = styled.input`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width:342px;
  height:58px;
  border:none;
  outline:none;
  padding-left:25px;

  color: #FFF;

  font-size: 24px;
  font-weight: 400;
  margin-bottom:34px;
`;

export const Button = styled.button`
  border-radius: 14px;
  background: var(--templates-5-color-1, rgba(0, 0, 0, 0.80));
  border:none;

  width:342px;
  height:74px;

  color: #FFF;
  font-size: 17px;
  font-weight: 700;
  line-height: 28px; 
  cursor:pointer;

  display:flex;
  justify-content:center;
  align-items:center;
  gap:20px;

  &:hover{
    opacity:0.8;
  }
  &:active{
    opacity:0.5;
  }
`;

export const User = styled.li `
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width:342px;
  height:58px;
  border:none;
  outline:none;

  color: #FFF;

font-size: 24px;
font-weight: 400;
margin-top:20px;

button{
  background:none;
  border:none;
}
`
