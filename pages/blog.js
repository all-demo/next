function BlogPage({posts}) {
    return (
        <ul>
            {posts.map(post => {
                return <li>{ post.title}</li>
            })}
        </ul>
    )
}

export async function getStaticProps() {
    return {
        props: {
            posts: [
                { title: 'post1' },
                { title: 'post2' },
                { title: 'post3' },
                
            ]
        }
    }
}

export default BlogPage







