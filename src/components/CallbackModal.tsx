import React, { useState } from 'react';
import "../styles/CallbackModal.css"; // если папка называется styles и лежит рядом с src
import { sendToBitrix } from '../utils/sendToBitrix';

interface CallbackModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (formData: { name: string; phone: string; comment?: string }) => void;
}

const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');

    if (!isOpen) return null;


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !phone) {
            alert('Пожалуйста, заполните имя и телефон');
            return;
        }

        onSubmit({ name, phone, comment });
        await sendToBitrix({ name, phone, comment });
        onClose();
    };
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>✖</button>
                <h2>Заказать звонок</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Имя:
                        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                    </label>
                    <label>
                        Телефон:
                        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
                    </label>
                    <label>
                        Комментарий:
                        <textarea value={comment} onChange={e => setComment(e.target.value)} />
                    </label>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default CallbackModal;
