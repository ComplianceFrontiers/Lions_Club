import { sidebar } from "@/data/EventDetailsPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const { socials } = sidebar;

const Sidebar = () => {
  return (
    <div className='events-details__sidebar'>
      <div className='events-details__sidebar__single'>
        <div className='events-details__sidebar__info'>
          <p>
            <span>Starting time:</span>
            9:00 am to 2:00 pm
          </p>
          <p>
            <span>Date:</span>
            22 September, 2024
          </p>
          <p>
            <span>Categroy:</span>
            <a href='#'>Future Leaders</a>
            {/* , <a href='#'>Charity</a> */}
          </p>
          {/* <p>
            <span>Website:</span>
            <a href='#'>www.example.com</a>
          </p> */}
          <p>
            <span>Location:</span>200 Hutchinson Rd, Robbinsville Twp, NJ 08691
          </p>
        </div>
      </div>
      <div className='events-details__sidebar__single'>
         <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.085081813266!2d-74.62983142452674!3d40.22941046701979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c15f97eec97d0f%3A0x29960213f999338c!2s200%20Hutchinson%20Rd%2C%20Robbinsville%20Twp%2C%20NJ%2008691%2C%20USA!5e0!3m2!1sen!2sin!4v1731325671178!5m2!1sen!2sin'
          className='events-details__sidebar__map'
          allowfullscreen
        ></iframe>
      </div>

      <div className='events-details__sidebar__single'>
        <div className='events-details__sidebar__social'>
          {socials.map((social) => (
            <Link key={social.id} href={social.href}>
              <i>
                <FontAwesomeIcon icon={social.icon} />
              </i>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
