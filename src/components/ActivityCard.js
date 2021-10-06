import styled from "styled-components";

const Card = styled.div`
    border-radius: 1rem;
    width: 90%;
    background: ${props => props.color};
    position: relative;

    @media (min-width: 768px){
        width: 47%;
    }

    @media (min-width: 1200px){
        width: 30%;
    }
`
const Icon = styled.img`
    position: absolute;
    z-index: 1;
    content: url(${props => props.src});
    right: 0px;
    top: 0;
`
const Info = styled.div`
    position: relative;
    z-index: 2;
    padding: 2rem;
    margin-top: 2rem;
    background: hsl(235, 46%, 20%);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    :hover{
        background: hsl(235, 45%, 61%);
    }
`
const Cont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(min-width: 1200px){
        ${props => props.align === "hr" ? `flex-direction: column;align-items: start;` : ""};
    }
`
const Title = styled.h1`
    color: white;
    font-weight: 500;
    font-size: 1rem;
`
const Time = styled.h1`
    color: white;
    font-size: 2rem;
    font-weight: 200;
`
const Dots = styled.img`
    width: 2rem;
    height: 2rem;
    content: url("dots.svg");
    :hover{
        transform: scale(1.2);
    }
`
const Prev = styled.p`
    color: rgba(255,255,255,.8);
    font-size: .6rem;
    margin-left: auto;
    @media (min-width: 1200px){
        margin-left: 0;
    } 
`
const ActivityCard = ({data, timeframe}) =>{
    const timelines = [data.timeframes.daily, data.timeframes.weekly, data.timeframes.monthly]
    const phrases = ["Yesterday", "Last Week", "Last Month"]
    return(
        <Card color={data.color}>
            <Info>           
                <Cont >
                    <Title> {data.title} </Title>
                    <Dots />
                </Cont>
                <Cont align={"hr"}>
                    <Time> {timelines[timeframe].current}hrs</Time>
                    <Prev> {phrases[timeframe]} - {timelines[timeframe].previous}hrs</Prev> 
                </Cont>
            </Info>
            <Icon src={data.image}/>
        </Card>
    )
}

export default ActivityCard