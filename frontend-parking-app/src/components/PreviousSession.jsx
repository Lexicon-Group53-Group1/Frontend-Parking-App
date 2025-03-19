export const PreviousSession = ({data}) => {
    return(
        <>
            {data.map(item=>
                { return(<div key={item.periodId}>Start at {item.startTime},End at {item.endTime} <br></br>Cost: {item.periodCost} kr </div>);})   
            }
        </>
        );
   
}