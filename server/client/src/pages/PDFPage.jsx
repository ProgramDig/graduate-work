import React, {useState} from 'react';
import {Document, Page} from 'react-pdf';

function MyApp(){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}
// const PDFPage = () => {
//     const obj = localStorage.getItem('user')
//     const json = JSON.parse(obj)
//     return (
//         <div className={"container"} style={{minHeight: "65vh"}}>
//             <h1 className={"title"}>Головна</h1>
//         </div>
//     );
// };

export default MainPage;