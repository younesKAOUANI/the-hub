function Map() {
  return (
    <div className="bisylms-map">
      <iframe
        title="My Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d776.0124255209572!2d6.639435869607795!3d36.3652126982734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1776e2ceba509%3A0x399e64327ce44948!2sThe%20Hub!5e1!3m2!1sfr!2sdz!4v1709149435088!5m2!1sfr!2sdz"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>    </div>
  );
}

export default Map;
