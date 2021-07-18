import Modal from "react-modal"
import '../Style/EventModal.css'


const EventModal = ({isOpen, onClose, brandName, startDate, endDate}) => {

    
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <div className="event_info_modal">
                <h3>{brandName}</h3>
                <p>{startDate}</p>
                <p>{endDate}</p>
            </div>
        </Modal>
    )
}

export default EventModal