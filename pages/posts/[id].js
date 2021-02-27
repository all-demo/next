export default function PostPage({id}) {
    return <div>PostPage:{ id}</div>
}

export async function getStaticProps({ params }) {
    
    return {
        props: {
            id: params.id
        }
    }
}


export async function getStaticPaths() {
    const ids=[1,2,3,4]
    const paths = ids.map(id => `/posts/${id}`)
    return {paths,fallback: false}
}