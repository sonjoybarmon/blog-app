import Head from "next/head";
import Post from "../components/Post/Post";
// import styles from "../styles/Home.module.scss";

type Posts = {};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      post: posts,
    },
  };
}

const Home: React.FC<{ post: Posts[] }> = (props) => {
  const { post } = props;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <Post post={post} />
        </section>
      </main>
      <footer>&copy; copyright all by sonjoybarmon</footer>
    </div>
  );
};
export default Home;
