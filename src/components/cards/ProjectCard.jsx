import React from "react";
import styled from "styled-components";
import socialIcon from '../behance.png'

const Card = styled.div`
  width: 330px;
  height: 470px;
  padding:15px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  gap: 14px;
  // transition: all 0.5s ease-in-out;
  // &:hover {
  //   transform: translateY(-10px);
  //   box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
  //   filter: brightness(1.1);
  // }
`;
const Image = styled.img`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 5px;
  // box-shadow: 5px 5px 16px 5px rgba(0, 0, 0, 0.3);
  // box-shadow: 2px 2px 2px 2px black ,-2px -2px 2px 2px black;
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  // color: ${({ theme }) => theme.text_secondary};
  color :white;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Date = styled.div`
  font-size: 11px;
  margin-left: 2px;
  font-weight: 400;
  // color: ${({ theme }) => theme.text_secondary + 80};
  color:white;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  color:white;
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;
const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  border:1px solid #854ce6;
  width:fit-content;
  padding:10px;
  border-radius:10px;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
      {/* <Tags></Tags> */}
      <div style={{padding:"5px"}}>
        <Details>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <Title>{project.title}</Title>
            <img src={socialIcon} alt=""   style={{width:"40px",height:"40px"}}  onClick={()=>window.open(project.github,"_blank")}/>
          </div>
          <Date>{project.date}</Date>
          <Description>{project.description}</Description>
        </Details>
        {/* <Members>
          {project.member?.map((member) => (
            <Avatar src={member.img} />
          ))}
        </Members> */}
        <center style={{marginTop:"20px"}}>
          <Button href={project.github} target="_blank">
            Explore the Design
          </Button>
        </center>
      </div>
    </Card>
  );
};

export default ProjectCard;
