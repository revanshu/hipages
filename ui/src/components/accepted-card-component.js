import { React } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBriefcase, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export function AcceptedCardComponent (props){
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
                <span>${props.data.price} Lead Invitation</span>
            </div>
            <div className="phone-email">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span>{props.data.contact_phone}</span>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>{props.data.contact_email}</span>
            </div>
            <div className="description">
                {props.data.description}
            </div>
        </div>
    );
}