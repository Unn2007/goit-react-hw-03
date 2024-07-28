import { FaPhoneAlt,FaUser } from "react-icons/fa";

function Contact({data:{id,name,number},onDelete}) {
    return (
        <div className="contact">
            <div>
                <div>
                <FaUser />
                <p>{name}</p>

                </div>
                <div>
                <FaPhoneAlt />
                <p>{number}</p>
                </div>
                
               
            </div>
            <button onClick={()=>onDelete(id)}>Delete</button>


        </div>

    );
}

export default Contact;