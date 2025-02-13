export const MapBox = () => {
  return (
    <section className="mapbox" data-mapbox>
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1593175.834428312!2d26.794884739557826!3d38.74829867870805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b839f1d676e4e9%3A0xd7c0a92dad794077!2sManisa%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2sbd!4v1726945679661!5m2!1sen!2sbd"
          width="400"
          height="300"
          loading="lazy"
          title="Location Map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </figure>
    </section>
  );
}; 