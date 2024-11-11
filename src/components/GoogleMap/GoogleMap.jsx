import React from "react";

const GoogleMap = () => {
  return (
    <section className='google-map'>
     <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.085081813266!2d-74.62983142452674!3d40.22941046701979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c15f97eec97d0f%3A0x29960213f999338c!2s200%20Hutchinson%20Rd%2C%20Robbinsville%20Twp%2C%20NJ%2008691%2C%20USA!5e0!3m2!1sen!2sin!4v1731325671178!5m2!1sen!2sin'
          className='google-map__two'
          allowFullScreen
        ></iframe>
    </section>
  );
};

export default GoogleMap;
