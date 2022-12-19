import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';

const Hero = (props) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [fullText, setFullText] = useState(
        'WELCOME TO DEVELOPING NINJA SOURCE CODE WEBSITE.'
    );

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index]);
                setIndex(index + 1);
            }, 100);
        }
    }, [index]);

    return (
        <div>
            <div className="text-center fs-1 text  p-5">
                <h2>{text}</h2>
            </div>
            <div>
                <Button color={props.color}  />
            </div>
        </div>
    );
};

export default Hero;
