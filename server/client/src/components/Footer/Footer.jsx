import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer" style={{backgroundColor: "#2e3e50"}}>
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Права</h5>
                        <p className="grey-text text-lighten-4">
                            © 2023 Digitalload. Усі права захищені. Всі матеріали на цьому сайті є власністю Digitalload і не можуть бути використані без нашої згоди.
                        </p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Посилання</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Telegram</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">GitHub</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Gmail</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container center">
                    Всі права захищені © 2023 Digitalload.
                </div>
            </div>
        </footer>
    );
};

export default Footer;