import Contact from '../Contact/Contact'

function ContactList({dataList,onDelete}) {
    const contactItems= dataList.map((item)=>{
        return  (
            <li key = {item.id}><Contact data={item} onDelete={onDelete} /></li>
        )})
    return (
        
        <ul>{contactItems}</ul>
        
    )
}

export default ContactList;