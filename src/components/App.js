import React, { useState, useEffect } from 'react';
import MarkdownPreview from './MarkdownPreview';
import './App.css';

const App = () => {
    const [markdown, setMarkdown] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading time for demonstration
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="app">
            <textarea
                className="textarea"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="Write your markdown here..."
            />
            <MarkdownPreview markdown={markdown} />
        </div>
    );
};

export default App;
