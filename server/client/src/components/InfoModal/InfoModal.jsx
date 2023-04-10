import React from 'react';
import classes from "./InfoModal.scss"

const InfoModal = () => {
    return (
        <div>
            <div id="modal2" className="modal">
                <div className="modal-content">
                    <h4 className={"title center"}>Інформація по зміні особистих даних</h4>
                    <div>
                        <blockquote className={classes.block} style={{borderColor: '#256AA0', fontSize: "18px"}}>
                            Заміна прізвища, ім'я або по батькові, логіну, пошти або ролі потребує підтвердження
                            модератора.
                            Ви змінюєте дані і відправляєте запит адміністратору, він у свій робочий час підтверджує або
                            відміняє запит.
                        </blockquote>
                        <blockquote style={{borderColor: '#256AA0', fontSize: "18px"}}>
                            Заміна пошти потребує підтвердження на пошту після підвтеврдження адмінісратора.
                            Відправляєте
                            запит адміністратору, після чого він відправляє на пошту підтверження для активації акаунта.
                        </blockquote>
                        <blockquote style={{borderColor: '#256AA0', fontSize: "18px"}}>
                            Заміна паролю не потребує підтердження адміністратора. Ви самостійно можете змінти пароль,
                            після зміни паролю відправляється підтверження на пошту після чого ви зможете змінити свій
                            пароль.
                        </blockquote>
                    </div>

                    <button
                        className="modal-close waves-effect waves-green btn-flat red darken-1"
                        style={{marginRight: 10, color: '#fff'}}
                    >
                        Повернутись
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;