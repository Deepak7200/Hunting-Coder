type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const Post = async ({ params }: PageProps) => {
  const { slug } = await params;

  return(
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold m-10">Title of the page {slug}</h1>
        <div className="pl-30 pr-30">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora quidem rerum, natus ullam maiores explicabo iste corporis quasi earum nesciunt tempore. Officiis, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio maiores perspiciatis quos asperiores nostrum tempore quod libero suscipit, veritatis ex at quaerat quidem tenetur aspernatur reiciendis atque quam explicabo! Dicta labore tempore, nulla id aperiam temporibus quasi atque reiciendis exercitationem ab, eaque nostrum. Earum?</div>
    </div>
  ) 
};

export default Post;