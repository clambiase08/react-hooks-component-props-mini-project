import React from 'react';
import Article from './Article';

function ArticleList({posts}) {
    const articleElements = posts.map((post) => {
        return (
            <Article 
            key={post.id} 
            title={post.title}
            minutes={post.minutes}
            date={post.date}
            preview={post.preview}
             />
        )
    })
    return (
        <main>
           {articleElements} 
        </main>
    )
}

export default ArticleList;