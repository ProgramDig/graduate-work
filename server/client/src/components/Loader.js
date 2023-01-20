import React from 'react';

const Loader = ({loading}) => {
    return (
        <div>
            {
                loading ?
                    <>
                        <div className="progress">
                            <div className="indeterminate blue darken-1" style={{width: '100%'}}></div>
                        </div>
                    </>
                    :
                    <></>
            }
        </div>
    );
};

export default Loader;