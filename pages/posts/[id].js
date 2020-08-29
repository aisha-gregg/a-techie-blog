import { getPost, getPostIds } from "../../features/posts-repository";
import { Page } from "../../components/page/Page";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { monokaiSublime as theme } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import ReactMarkdown from "react-markdown";

function CodeBlock({ language = null, value }) {
  return (
    <SyntaxHighlighter language={language} style={theme}>
      {value}
    </SyntaxHighlighter>
  );
}

export default function Post({ post, id }) {
  return (
    <Page>
      <ReactMarkdown
        source={post}
        renderers={{
          code: CodeBlock,
        }}
      />
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
