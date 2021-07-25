import { React } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons'

export function InvitedCardComponent(props){
    return (
        <div className="rows">
            <div className="contact">
                <div className="name-image">
                    {props.data.contact_name.split('')[0]}
                </div>
                <div className="name">
                    <div className="full-name">{props.data.contact_name}</div>
                    <div className="contact-time">{props.data.created_at}</div>
                </div>
            </div>
            <div className="details">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{props.data.suburb_name}</span>
                <FontAwesomeIcon icon={faBriefcase} />
                <span>{props.data.category_name}</span>
                <span>Job ID: {props.data.id}</span>
            </div>
            <div className="description">
                {props.data.description}
            </div>
            <div className="footer">
                <button type="button" onClick={() => {props.onStatusChange(props.data.id, 'accepted')}}>Accept</button>
                <button type="button" onClick={() => {props.onStatusChange(props.data.id, 'declined')}}>Decline</button>
                <span className="price-value">${props.data.price}</span>
                <span className="price-text">Lead Invitation</span>
            </div>
        </div>
    );
}