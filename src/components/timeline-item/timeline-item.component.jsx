import './timeline-item.styles.scss'

const TimelineItem = ( { timeline } ) => {
    const {imageUrl, name, timelineId} = timeline;

    return(
        <div className='timeline-container'>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className='timeline-body-container'>
                <h2>{name}</h2>
                <p>See details</p>
            </div>
        </div>
    )
}

export default TimelineItem;