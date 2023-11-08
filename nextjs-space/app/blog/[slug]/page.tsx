export const revalidate = "3000"; //50 minutes;

interface Post {
    title: string;
    description: string;
    slug: string;
};

interface Props {
    params: { slug: string };
};

const BlogPostPage = async ({params}: Props) => {
    //deduped
    const jsonPosts = await fetch("http://localhost:3000/api/content");
    const posts: Array<Post> = await jsonPosts.json();
    const post = posts.find((post) => post.slug === params.slug);

    return (
        <main>
            <h1>{post?.title}</h1>
            <p>{post?.description}</p>
        </main>
    );
};

export default BlogPostPage;