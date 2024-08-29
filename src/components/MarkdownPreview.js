import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownPreview = ({ markdown }) => {
    return (
        <div className="preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownPreview;
