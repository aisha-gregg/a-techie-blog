export default function Post({ post, id }) {
  return (
    <Page>
      <div
        className={styles.post}
        dangerouslySetInnerHTML={{ __html: post }}
      ></div>
    </Page>
  );
}

export function getStaticPaths() {
  const paths = getPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  return {
    props: {
      post,
      id: params.id,
    },
  };
}
