import TimelineItem from "./../timeline-item/timeline-item.component";
import './directory.styles.scss';

const Directory = ({ timelines }) => {
    return (
        <div className='directory-container'>
            {timelines.map((timeline) => (
                <TimelineItem key={timeline.timelineId} timeline={timeline} />
            ))}
        </div>
    )
}

export default Directory;