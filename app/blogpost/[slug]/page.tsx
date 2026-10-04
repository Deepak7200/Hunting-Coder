type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const Post = async ({ params }: PageProps) => {
  const { slug } = await params;

  return <div>{slug}</div>;
};

export default Post;