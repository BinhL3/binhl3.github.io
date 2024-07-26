import React from 'react';

function Card(props) {
    return(
        <div className=" flex flex-col items-center card mx-auto p-4">
            <h2 className="text-2m font-bold mb-2 text-slate-50">{props.title}</h2>
            <blockquote className="max-w-md text-center">
                <p className="font-small">
                    {props.description}
                </p>
            </blockquote>
            {props.children}
        </div>
    );
}

export default Card;