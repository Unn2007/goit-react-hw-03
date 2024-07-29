import css from './Contact.module.css'
import { FaPhoneAlt,FaUser } from "react-icons/fa";
import PropTypes from 'prop-types';

function Contact({data:{id,name,number},onDelete}) {
    return (
        <div className={css.contact}>
            <div>
                <div className={css.fieldContainer}>
                <FaUser />
                <p>{name}</p>

                </div>
                <div className={css.fieldContainer}> 
                <FaPhoneAlt />
                <p>{number}</p>
                </div>
                
               
            </div>
            <div className={css.buttonContainer}>
            <button onClick={()=>onDelete(id)}>Delete</button>
            </div>


        </div>

    );
}

export default Contact;

Contact.propTypes = {
    data: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    
    onDelete: PropTypes.func.isRequired,
  };