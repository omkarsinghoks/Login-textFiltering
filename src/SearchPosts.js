import React, { useState } from 'react';
import './SearchPost.css';

const SearchPosts = () => {
    const [query, setQuery] = useState('');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Handle the search query submission
    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        try {
          const response = await fetch(`https://dummyjson.com/posts/search?q=${query}`);
            const data = await response.json();
            setPosts(data.posts);
        } catch (err) {
            setError('Error fetching data, please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container">
            <h1>Search Blog Posts</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search by tag..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div className="posts-container">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className="post">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <span>User ID: {post.userId}</span>
                            <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts found</p>
                )}
            </div>
        </div>
    );
};

export default SearchPosts;