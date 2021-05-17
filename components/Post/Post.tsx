import { Container } from "@material-ui/core";
import Link from "next/link";

type Post = {
  title: string;
};

const Post = (props) => {
  const { post } = props;

  return (
    <div>
      <Container>
        {post?.map((el) => (
          <div key={el.id}>
            <Link href={`/Post/${el.id}`}>
              <p>{el.title}</p>
            </Link>
          </div>
        ))}
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log(posts);

  return {
    props: {
      post: posts,
    },
  };
}

export default Post;
