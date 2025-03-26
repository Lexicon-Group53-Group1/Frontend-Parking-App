export const PreviousSession = ({data}) => {
    return(
        <>
            {data.map(item=>
                { return(<div key={item.periodId}>Started at {new Date(item.startTime).toLocaleString()}<br></br>Ended at {new Date(item.endTime).toLocaleString()} <br></br>Cost: {item.periodCost} kr </div>);})   
            }
        </>
        );
   
}