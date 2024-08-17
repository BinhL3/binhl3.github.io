import React from 'react';

function Card(props) {
    return(
        <div className=" flex flex-col items-center card mx-auto p-4">
            <h2 className="text-2m font-bold mb-2 text-slate-50">{props.title}</h2>
            <blockquote className="max-w-md text-center">
                <div className="font-small">
                    {props.description1 && <p>{props.description1}<br /> <br /></p>}
                    {props.description2 && <p>{props.description2}<br /> <br /></p>}
                    {props.description3 && <p>{props.description3}</p>}
                </div>
            </blockquote>
            {props.children}
        </div>
    );
}

export default Card;