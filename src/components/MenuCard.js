import styled from "styled-components"

const Card = styled.div`
    width: 90%;
    border-radius: 1rem;
    background: hsl(235, 46%, 20%);
    margin-bottom: 1rem;

    @media(min-width: 1200px){
        width: 15%;
        margin: 0;
        height: auto;
        align-self: stretch;     
    }
`
const Intro = styled.div`
    border-radius: 1rem;
    padding: 0;
    background: hsl(246, 80%, 60%);
    display: flex;
    align-items: center;

    @media(min-width: 1200px){
        flex-direction: column;
        align-items: start;
        height: 60%;
    }
`
const Avatar = styled.img`
    content: url("image-jeremy.png");
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: .2rem solid white;
    margin: 1rem;
   
`
const Text = styled.div`
    @media(min-width: 1200px){
        margin: 1rem;
    }
`
const P = styled.p`
    color: rgba(255,255,255,.6);
    font-size: .8rem;
`
const Name = styled.h1`
    color: rgba(255,255,255,.8);
    font-size: 1.3rem;
    font-weight: 300;
`
const Timeline = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    @media(min-width: 1200px){
        flex-direction: column;
        align-items: start;
        justify-content: space-around;
    }
`
const Timespan = styled.span`
    font-weigth: 400;
    color: ${props => props.highlight ? "white" : "rgba(255,255,255,.5)"};
    font-size: 1rem;
    cursor: pointer;
    :hover{
        color: rgba(255,255,255,.7);
    }
    @media(min-width: 1200px){
        padding: .5rem 0;
    }
`
const MenuCard = ({activeTimeframe, setActiveTimeframe}) =>{
    
    return(
    <Card>
        <Intro>
            <Avatar />
            <Text>
                <P>Report for</P>
                <Name>Jeremy Robson</Name>
            </Text>
        </Intro>
        <Timeline>
            <Timespan onClick={()=>setActiveTimeframe(0)} highlight={activeTimeframe === 0}>Daily</Timespan>
            <Timespan onClick={()=>setActiveTimeframe(1)} highlight={activeTimeframe === 1}>Weekly</Timespan>
            <Timespan onClick={()=>setActiveTimeframe(2)} highlight={activeTimeframe === 2}>Monthly</Timespan>
        </Timeline>    
    </Card>
    )
}

export default MenuCard